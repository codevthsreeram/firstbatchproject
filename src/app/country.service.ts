import { Injectable } from "@angular/core";

@Injectable()

export class CountryService {
    getCountries() {
        let arrCountry: string[] = ['India', 'USA'];
        return arrCountry;
    }
    getUserList() {
        let userObject1 = { firstName: "Sreeram", lastName: "Kondagorla", gender: "Male" };
        let userObject2 = { firstName: "Raju", lastName: "G", gender: "Male" };
        let userArray = [userObject1, userObject2];
        return userArray;
    }
}