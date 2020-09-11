import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './page.html',
    styleUrls: ['./page.scss'],
})
export class ContactsHomePage implements OnInit {
    contacts: Observable<any>;

    private PREFIX = 'ContactsHomePage';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor(private contactsService: ContactsService) {
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');

        this.contacts = this.contactsService.getAll();

        this.contacts.forEach((contact) => {
            console.log(contact);
        });
    }

    addContact() {
        this.log('addContact');

        this.contactsService.addContact();
    }

    delContact(contact) {
        this.log('delContact', 'contact = ' + JSON.stringify(contact));
    }
}
