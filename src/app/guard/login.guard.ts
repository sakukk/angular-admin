import { CanActivate } from '@angular/router';

export class LoginGuard implements CanActivate {
    canActivate() {
        let isLoginIn: boolean = false;
        if (!isLoginIn) {
            console.log('用户未登陆');
        }
        return true
    }
}