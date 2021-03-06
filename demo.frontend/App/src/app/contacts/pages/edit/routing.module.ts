import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactEditPage } from './page';

const routes: Routes = [
    {
        path: '',
        component: ContactEditPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactEditPageRoutingModule {}
