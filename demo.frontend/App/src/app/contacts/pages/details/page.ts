import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.entity';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-contact-details',
    templateUrl: './page.html',
    styleUrls: ['./page.scss'],
})
export class ContactDetailsPage implements OnInit {
    private contactID;
    contacts: Observable<any>;
    contact: Contact;

    private PREFIX = 'ContactDetailsPage';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private contactsService: ContactsService) {
        this.log('constructor');
    }

    ngOnInit() {
        this.contactID = this.activatedRoute.snapshot.paramMap.get('id');

        this.log('ngOnInit', 'id = ' + this.contactID);

        this.contacts = this.contactsService.getDetails(this.contactID);

        this.contacts.forEach(contact => {
            this.contact = contact;
            this.log('ngOnInit', 'contact = ' + JSON.stringify(this.contact));
        });
    }

    editContact(): void {
        this.log('edit', 'id = ' + this.contactID);

        this.router.navigateByUrl( 'contact-edit' + '/' + this.contactID);
    }

    delContact() {
        this.log('del', 'id = ' + this.contactID);
    }

}
