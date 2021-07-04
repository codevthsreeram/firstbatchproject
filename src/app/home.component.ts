import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
import { CountryService } from "./country.service";

@Component({
    templateUrl: './home.component.html',
    selector: 'home',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    isLoggedIn: boolean = false;
    imgUrl: string = '../assets/Profile.png';
    email: string;
    constructor() {
        let userInfo = localStorage.getItem("loggedInUserInfo");
        if (userInfo) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
        this.email = localStorage.getItem('loggedInUserEmail');
    }
}