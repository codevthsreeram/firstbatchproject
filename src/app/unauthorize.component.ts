import { Component } from "@angular/core";

@Component({
    selector: 'unauthorize',
    template: `<div style="margin: auto;width: 1000px;text-align:center" class="form-control"><img [src]="imgUrl"></div>`
})

export class UnAuthorizeComponent {
    imgUrl: string = '../assets/UNAUTHORIZED.png'
}