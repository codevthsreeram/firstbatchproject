import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InvoiceDetailComponent } from "./invoice-detail/invoice-detail.component";
import { InvoiceListComponent } from "./invoice-list/invoice-list.component";

const routes: Routes = [
    {
        path: 'invoicelist',
        component: InvoiceListComponent
    },
    {
        path: 'invoicedetail',
        component: InvoiceDetailComponent
    }
];

@NgModule({
    declarations: [
        InvoiceListComponent,
        InvoiceDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    bootstrap: []
})

export class InvoiceModule {

}