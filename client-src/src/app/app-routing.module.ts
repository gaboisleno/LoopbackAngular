import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth.guard.service';
import { HomeComponent } from './pages/home/home.component';

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
