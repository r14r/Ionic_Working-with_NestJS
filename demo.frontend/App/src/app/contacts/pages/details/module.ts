import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactDetailsPage } from './page';
import { ContactDetailsPageRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactDetailsPageRoutingModule
  ],
  declarations: [ContactDetailsPage]
})
export class ContactDetailsPageModule {
  private PREFIX = 'ContactDetailsPageModule';
  private log(func, line = '') {
      console.log(this.PREFIX + '/' + func + ':' + line);
  }

  constructor(){
    this.log('constructor')
  }
}
