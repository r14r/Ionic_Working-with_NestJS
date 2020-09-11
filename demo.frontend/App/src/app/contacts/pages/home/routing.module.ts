import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsHomePage } from './page';

const routes: Routes = [
  {
    path: '',
    component: ContactsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsHomePageRoutingModule {
  private PREFIX = 'ContactsHomePageRoutingModule';
  private log(func, line = '') {
      console.log(this.PREFIX + '/' + func + ':' + line);
  }

  constructor() {
      this.log('constructor');
  }
}
