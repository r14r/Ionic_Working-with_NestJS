import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'folder/Inbox', pathMatch: 'full' },
    {
        path: 'folder/:id',
        loadChildren: () =>
            import('./folder/folder.module').then((m) => m.FolderPageModule),
    },
    {
        path: 'contacts',
        loadChildren: () =>
            import('./contacts/pages/home/module').then(
                (m) => m.ContactsHomePageModule
            ),
    },
    {
        path: 'contact-details/:id',
        loadChildren: () =>
            import('./contacts/pages/details/module').then(
                (m) => m.ContactDetailsPageModule
            ),
    },
    {
        path: 'contact-edit/:id',
        loadChildren: () =>
            import('./contacts/pages/edit/module').then(
                (m) => m.ContactEditPageModule
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            enableTracing: false,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
    private PREFIX = 'AppRoutingModule';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor() {
        this.log('constructor');
    }
}
