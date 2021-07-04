import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SignupValidator } from "./signup.validator";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent {
    form = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email, SignupValidator.shouldNotContainSpace]),
        password: new FormControl()
    });
    constructor(private router: Router) {

    }
    get username() {
        return this.form.get('username');
    }
    Signup() {
        this.router.navigate(['/login']);
    }
}