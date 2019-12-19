import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoopBackAuth } from '../shared/sdk/services';

import * as moment from 'moment';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: LoopBackAuth, private router: Router) {  }
    
    canActivate() {
        //Token is valid for 3 days -- moment(token.created).diff(moment(), 'days')
        // If the user is not logged in we'll send them back to the home page
        let token = this.authService.getToken();
        if (!token.id) {
            console.log('No estás logueado o token vencido');
            this.router.navigate(['/']);
            return false;
        }
        console.log('Estas logueado');
        return true;
    }
}