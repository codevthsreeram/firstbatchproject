import { FormControl, ValidationErrors } from "@angular/forms";

export class SignupValidator {
    static shouldNotContainSpace(control: FormControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {
                shouldNotContainSpace: true
            };
        }
        return null;
    }
}
