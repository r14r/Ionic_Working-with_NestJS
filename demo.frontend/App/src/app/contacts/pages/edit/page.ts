import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Contact } from '../../models/contact.entity';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-contact-edit',
    templateUrl: './page.html',
    styleUrls: ['./page.scss'],
})
export class ContactEditPage implements OnInit {
    private contactID;
    contacts: Observable<any>;
    contact: Contact;

    private PREFIX = 'ContactEditPage';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private contactsService: ContactsService
    ) {
        this.log('constructor');
    }

    ngOnInit() {
        this.contactID = this.activatedRoute.snapshot.paramMap.get('id');

        this.log('ngOnInit', 'id = ' + this.contactID);

        this.contacts = this.contactsService.getDetails(this.contactID);

        this.contacts.forEach((contact) => {
            this.contact = contact;
            this.log('ngOnInit', 'contact = ' + JSON.stringify(this.contact));
        });
    }
}
