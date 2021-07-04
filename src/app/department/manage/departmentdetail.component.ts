import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from "src/app/common/firebase.service";
import { Department } from "../department";
import { DepartmentService } from "../department.service";

@Component({
    selector: 'departmentdetail',
    templateUrl: './departmentdetail.component.html',
    styleUrls: ['./departmentdetail.component.css']
})

export class DepartmentDetailComponent implements OnInit {
    department = new Department();
    constructor(private activeRouter: ActivatedRoute, private fbService: FirebaseService) {
    }
    ngOnInit(): void {
        this.activeRouter.paramMap.subscribe(param => {
            let deptId = param.get('deptId');
            this.fbService.getDepartmentById(deptId).subscribe(
                (response => {
                    this.department = response;
                })
            );
        });
    }
}