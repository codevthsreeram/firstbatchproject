import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './employee.component.html',
    selector: 'employee'
})

export class EmployeeComponent implements OnInit {
    lstEmployee: any[];
    action: string;
    editIndex: number;
    successMessage: string;
    errorMessage: string;
    employee: any = {
        name: '',
        salary: 0,
        address: ''
    };
    clearEmployee() {
        this.employee = {
            name: '',
            salary: 0,
            address: ''
        }
    }
    ngOnInit() {
        this.action = 'create';
        this.lstEmployee = this.getEmployeeData();
        this.successMessage = '';
        this.errorMessage = '';
    }
    deleteEmployee(index: number) {
        this.lstEmployee.splice(index, 1);
    }
    addEmployee() {
        this.action = 'create';
        this.successMessage = '';
        this.errorMessage = '';
        this.clearEmployee();
    }
    editEmployee(index: number, employee: any) {
        this.action = 'update';
        this.successMessage = '';
        this.errorMessage = '';
        this.employee = employee;
        this.editIndex = index;
    }
    manageEmployee() {
        if (this.employee.name == '') {
            this.errorMessage = 'Please enter name';
            return;
        }
        else if (this.employee.salary <= 0) {
            this.errorMessage = 'Please enter salary';
            return
        }
        else if (this.employee.address == '') {
            this.errorMessage = 'Please enter address';
            return;
        }
        if (this.action == 'create') {
            this.lstEmployee.push(this.employee);
            this.errorMessage = '';
            this.successMessage = 'Employee addedd successfully...';
        }
        else if (this.action == 'update') {
            this.lstEmployee[this.editIndex] = this.employee;
            this.errorMessage = '';
            this.successMessage = 'Employee updated successfully...';
        }
        this.clearEmployee();
    }
    getEmployeeData() {
        let employees: any[] = [
            {
                name: 'Sreeram Kondagorla',
                salary: 2000,
                address: 'Hyderabad'
            },
            {
                name: 'Raju G',
                salary: 3000,
                address: 'Edjerlappaly'
            },
            {
                name: 'Harish B',
                salary: 4000,
                address: 'Sattenapalli'
            },
            {
                name: 'Sreenu T',
                salary: 4000,
                address: 'Ongole'
            },
            {
                name: 'Hari Krishna M',
                salary: 5000,
                address: 'Kakinada'
            },
            {
                name: 'Manikanta Ch',
                salary: 6000,
                address: 'Hyderabad'
            },
            {
                name: 'Vinil A',
                salary: 7000,
                address: 'Kakinada'
            }
        ];
        return employees;
    }
}