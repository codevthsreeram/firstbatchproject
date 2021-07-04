import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Department } from "../department/department";

@Injectable()

export class FirebaseService {
    constructor(private fireStore: AngularFirestore) {

    }
    getAllDepartments() {
        return this.fireStore.collection('department').snapshotChanges();
    }
    getDepartmentById(id) {
        return this.fireStore.doc<Department>('department/' + id).valueChanges();
    }
    saveDepartment(department: Department) {
        return this.fireStore.collection('department').add({ ...department });
    }
    updateDepartment(department: Department) {
        return this.fireStore.doc('department/' + department.id).update({ ...department });
    }
    deleteDepartment(id) {
        return this.fireStore.doc('department/' + id).delete();
    }
}
