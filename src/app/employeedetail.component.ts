import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'employee-detail',
    styleUrls: ['./employeedetail.component.css'],
    templateUrl: './employeedetail.component.html'
})

export class EmployeeDetailComponent implements OnInit {
    imgUrl: string = '../assets/Profile.png';
    employeeName: string;
    employeeSalary: number;
    employeeAddress: string;
    course: string;
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(
            (param) => {
                this.employeeName = param.get('name');
                this.employeeSalary = +param.get('salary');
            }
        );
        this.route.queryParamMap.subscribe(
            (param) => {
                this.employeeAddress = param.get('address');
                this.course = param.get('course');
            })
    }
}