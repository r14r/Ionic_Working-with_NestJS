import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        { title: 'Contacts', url: '/contacts', icon: 'people' },
        { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
        { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
        { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
        { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
        { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
        { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    ];
    public labels = [
        'Family',
        'Friends',
        'Notes',
        'Work',
        'Travel',
        'Reminders',
    ];

    private PREFIX = 'ContactsHomePage';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.log('constructor');
        this.initializeApp();
    }

    initializeApp() {
        /*
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    */
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[0];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(
                (page) => page.title.toLowerCase() === path.toLowerCase()
            );
        }
    }
}
