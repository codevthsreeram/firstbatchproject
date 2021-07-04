import { Component } from "@angular/core";

@Component({
    selector: 'notfound',
    template: `<div style="margin: auto;width: 1000px;text-align:center" class="form-control"><img [src]="imgUrl"></div>`
})

export class NotFoundComponent {
    imgUrl: string = '../assets/PageNotFound.png'
}