import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { ContactEditPage } from './page';
import { ContactEditPageRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactEditPageRoutingModule
  ],
  declarations: [ContactEditPage]
})
export class ContactEditPageModule {}
