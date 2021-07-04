import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { map } from "jquery";
import { ToastrService } from "ngx-toastr";
import { FirebaseService } from "src/app/common/firebase.service";
import { Department } from "../department";

@Component({
    selector: 'departmentlist',
    templateUrl: './departmentlist.component.html',
    styleUrls: ['./departmentlist.component.css']
})

export class DepartmentListComponent implements OnInit {
    p: Number = 1;
    lstDepartment: Department[];
    formData = new Department();

    deptForm = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
        description: new FormControl(null, [Validators.maxLength(200)])
    });

    constructor(private fbService: FirebaseService, private toster: ToastrService) {

    }
    ngOnInit(): void {
        this.fbService.getAllDepartments()
            .subscribe(
                (response) => {
                    console.log(response);
                    this.lstDepartment = response.map((data) => {
                        return {
                            id: data.payload.doc.id,
                            ...data.payload.doc.data() as Department
                        }
                    });
                    console.log(this.lstDepartment);
                }
            );
        ;
    }
    get name() {
        return this.deptForm.get('name');
    }
    get description() {
        return this.deptForm.get('description');
    }
    saveDepartment() {
        if (this.formData.id == null) {
            let response = this.fbService.saveDepartment(this.formData);
            if (response) {
                //alert('Department saved successfully');
                this.toster.success('Department saved successfully');
                console.log(response);
            }
        }
        else {
            console.log(this.formData);
            let response = this.fbService.updateDepartment(this.formData);
            if (response) {
                //alert('Department updated successfully');
                this.toster.success('Department updated successfully');
                console.log(response);
            }
        }
        this.formData = new Department();
        this.deptForm.reset();
    }
    addDepartment() {
        this.formData = new Department();
        this.deptForm.reset();
    }
    editDepartment(department: Department) {
        this.deptForm.reset();
        this.formData = department;
    }
    deleteDepartment(id) {
        let response = this.fbService.deleteDepartment(id);
        if (response) {
            //alert('Department deleted successfully');
            this.toster.success('Department deleted successfully');
            console.log(response);
        }
    }
}

