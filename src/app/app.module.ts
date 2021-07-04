import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from "./user.component";
import { EmployeeComponent } from "./employee.component";
import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import { CoursesComponent } from "./cources.component";
import { CoursesService } from "./courses.service";
import { CountryService } from "./country.service";
import { AuthService } from "./auth.service";
import { BindingsComponent } from './bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from "./summary.pipe";
import { SignupComponent } from './signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './login.component';
import { NotFoundComponent } from './notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employeedetail.component';
import { PostsCompoment } from './posts.component';
import { HttpClientModule } from '@angular/common/http';
import { UnAuthorizeComponent } from './unauthorize.component';
import { AuthGuard } from './auth-guard.service';
import { CustomStyleDirective } from './custom-style.directive';
import { CustomValidateDirective } from './custom-validate.directive';
import { InvoiceModule } from './invoice.module';
import { PostsService } from './posts.service';
import { AppErrorHandler } from './common/app-error-handler';
import { UserService } from './user.service';
import { DepartmentModule } from './department/department.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee/:name/:salary',
    component: EmployeeDetailComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employeedetail',
    component: EmployeeDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'posts',
    component: PostsCompoment
  },
  {
    path: 'unauthorize',
    component: UnAuthorizeComponent
  },
  {
    path: 'department',
    loadChildren: () => DepartmentModule
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    HomeComponent,
    CoursesComponent,
    BindingsComponent,
    SummaryPipe,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    PostsCompoment,
    UnAuthorizeComponent,
    CustomStyleDirective,
    CustomValidateDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    InvoiceModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers:
    [
      CoursesService,
      CountryService,
      AuthService,
      AuthGuard,
      PostsService,
      {
        provide: ErrorHandler, useClass: AppErrorHandler
      },
      UserService,
      ToastrService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
