import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./courses.service";
import { CountryService } from "./country.service";
import { AuthService } from "./auth.service";
@Component({
    templateUrl: './courses.component.html',
    selector: 'cources'
})
export class CoursesComponent implements OnInit {
    lstCourses: any;
    constructor(private courseService: CoursesService, private country: CountryService, private testService: AuthService) {

    }
    ngOnInit(): void {
        this.courseService.getAll().subscribe(
            (response) => {
                this.lstCourses = response;
            }
        );
    }
}



