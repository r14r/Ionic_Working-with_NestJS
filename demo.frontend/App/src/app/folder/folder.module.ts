import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {
  private PREFIX = 'FolderPageModule';
  private log(func, line = '') {
      console.log(this.PREFIX + '/' + func + ':' + line);
  }

  constructor() {
      this.log('constructor');
  }

}
