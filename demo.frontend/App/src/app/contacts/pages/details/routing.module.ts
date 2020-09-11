import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailsPage } from './page';

const routes: Routes = [
    {
        path: '',
        component: ContactDetailsPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactDetailsPageRoutingModule {
    private PREFIX = 'ContactDetailsPageRoutingModule';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor() {
        this.log('constructor');
    }
}
