import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {
  private PREFIX = 'FolderPageRoutingModule';
  private log(func, line = '') {
      console.log(this.PREFIX + '/' + func + ':' + line);
  }

  constructor() {
      this.log('constructor');
  }
}
