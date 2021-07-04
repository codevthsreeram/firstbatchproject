import { Component } from "@angular/core";

@Component({
    selector: 'bindings',
    templateUrl: './bindings.component.html',
    styleUrls: ['./bindings.component.css']
})

export class BindingsComponent {
    textContent: string = "This is our first angular batch started on march 24th 2021 with 5 members and have completed basics of softwaredevelopement in 1 week";
    totalValue: number = 10000;
    totalAmount: number = 2000;
    releaseDate: Date = new Date(2021, 4, 14);
    title: string = "Binding Component";
    imgUrl: string = "../assets/Profile.png";
    colspan: number = 2;
    canSave: boolean = false;
    IsCreate: boolean = false;
    action: string = 'update';
    loginData = {
        username: '',
        password: ''
    }
    validate() {
        console.log(this.loginData.username);
        console.log(this.loginData.password);
        if (false) {

        }

    }
}