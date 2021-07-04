import { FormControl, ValidationErrors } from "@angular/forms";

export class UserValidators {
    static canNotContainSpace(control: FormControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { canNotContainSpace: true };
            return null;
        }
    }
}