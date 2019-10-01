import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{ 
		path: 'register', 
		component: RegisterComponent
	},
	{ 
		path: 'home', 
		component: HomeComponent, 
		canActivate: [AuthGuard]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
