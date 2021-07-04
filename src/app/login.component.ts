import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import "./SignInData";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    authError: boolean = false;
    constructor(private router: Router, private authService: AuthService) {
    }
    login(userName, password) {
        let signInData: SignInData = {
            userName: userName,
            password: password
        }
        let authResponse = this.authService.authenticate(signInData);
        if (authResponse) {
            localStorage.setItem('loggedInUserEmail', signInData.userName);
            this.router.navigate(['/home']);
            this.authError = false;
        }
        else {
            this.authError = true;
        }
    }
}