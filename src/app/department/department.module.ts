import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { environment } from "src/environments/environment";
import { FirebaseService } from "../common/firebase.service";
import { DepartmentService } from "./department.service";
import { DepartmentListComponent } from "./list/departmentlist.component";
import { DepartmentDetailComponent } from "./manage/departmentdetail.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: DepartmentListComponent,
        pathMatch: 'full'
    },
    {
        path: ':deptId',
        component: DepartmentDetailComponent,
        children: [
            {
                path: '',
                redirectTo: 'view',
                pathMatch: 'full'
            },
            {
                path: 'view',
                component: DepartmentDetailComponent,
            }
        ]
    }]
@NgModule({
    declarations:
        [
            DepartmentListComponent,
            DepartmentDetailComponent
        ],
    imports:
        [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            RouterModule.forChild(routes),
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,
            ToastrModule.forRoot(),
            NgxPaginationModule
        ],
    providers:
        [
            DepartmentService,
            FirebaseService,
            ToastrService
        ],
    bootstrap:
        []
})

export class DepartmentModule {

}