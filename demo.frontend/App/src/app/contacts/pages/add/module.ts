import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactAddPage } from './page';
import { ContactAddPageRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactAddPageRoutingModule
  ],
  declarations: [ContactAddPage]
})
export class ContactAddPageModule {}
