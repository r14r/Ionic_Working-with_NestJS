import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsHomePage } from './page';
import { ContactsHomePageRoutingModule } from './routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactsHomePageRoutingModule,
    ],
    declarations: [ContactsHomePage],
})
export class ContactsHomePageModule {
    private PREFIX = 'ContactsHomePageModule';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor() {
        this.log('constructor');
    }
}
