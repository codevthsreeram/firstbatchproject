import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class DepartmentService {
    lstServiceDepartment: any[];
    constructor() {
        this.lstServiceDepartment = this.loadDepartments();
    }
    manageDepartment(department: any, action: string, index?: number) {
        if (action == 'create') {
            department.id = this.lstServiceDepartment.length + 1;
            this.lstServiceDepartment.push(department);
            return true;
        }
        else if (action == 'update') {
            this.lstServiceDepartment[index] = department;
            return true;
        }
    }
    getDepartments() {
        return this.lstServiceDepartment;
    }
    getDepartmentById(deptId: number) {
        let index = deptId - 1;
        return this.lstServiceDepartment[index];
    }
    deleteDepartment(index: number) {
        this.lstServiceDepartment.splice(index, 1);
    }
    loadDepartments() {
        let departments: any[] = [
            {
                id: 1,
                name: 'department1',
                description: 'This is first department..'
            },
            {
                id: 2,
                name: 'department2',
                description: 'This is second department..'
            },
            {
                id: 3,
                name: 'department3',
                description: 'This is third department..'
            },
            {
                id: 4,
                name: 'department4',
                description: 'This is fourth department..'
            }
        ];
        return departments;
    }
}