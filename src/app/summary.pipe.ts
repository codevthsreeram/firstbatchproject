import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, args: number) {
        if (value) {
            let rtnValue = value.substr(0, args) + '...';
            return rtnValue;
        }
        else {
            return value;
        }
    }
}