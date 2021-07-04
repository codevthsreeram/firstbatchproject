import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
    templateUrl: './user.component.html',
    selector: 'user',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    p: Number = 1;
    lstUser: any;
    editIndex: number = 0;
    formData = new User();
    constructor(private userService: UserService, private toaster: ToastrService) {

    }
    userForm = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        email: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
        city: new FormControl(null, [Validators.maxLength(200)])
    });
    ngOnInit() {
        this.userService.getAll()
            .subscribe((response) => {
                this.lstUser = response;
                console.log(response);
            });
    }
    get name() {
        return this.userForm.get('name');
    }
    get email() {
        return this.userForm.get('email');
    }
    saveUser() {
        if (this.formData.id == null) {
            let response = this.userService.create(this.formData);
            if (response) {
                //alert('User saved successfully');
                this.toaster.success('User saved successfully');
                this.lstUser.push(this.formData);
                console.log(response);
            }
        }
        else {
            console.log(this.formData);
            let response = this.userService.update(this.formData);
            if (response) {
                //alert('User updated successfully');
                this.toaster.success('User updated successfully');
                this.lstUser[this.editIndex] = this.formData;
                console.log(response);
            }
        }
        this.formData = new User();
        this.userForm.reset();
    }
    addUser() {
        this.formData = new User();
        this.userForm.reset();
    }
    editUser(department: User, index: number) {
        this.userForm.reset();
        this.editIndex = index;
        this.formData = department;
    }
    deleteUser(id, index) {
        let response = this.userService.delete(id);
        if (response) {
            //alert('User deleted successfully');
            this.toaster.success('User deleted successfully')
            this.lstUser.splice(index, 1);
            console.log(response);
        }
    }
}