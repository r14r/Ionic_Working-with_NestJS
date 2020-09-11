import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
    all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode',
}

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    private URL = 'http://localhost:3000/contacts';
    private APIKEY = '';

    private PREFIX = 'ContactsService';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor(private httpClient: HttpClient) {
        this.log('constructor');
    }

    getAll() {
        this.log('getAll |', 'from url ' + this.URL);

        return this.httpClient.get(this.URL);
    }

    getDetails(id) {
        this.log('getDetails |', 'id =  ' + id);

        return this.httpClient.get(this.URL + '/details/' + id);
    }

    addContact() {
        // const headers = new Headers();
        // headers.append('Accept', 'application/json');
        // headers.append('Content-Type', 'application/json');
        // const requestOptions = new RequestOptions({ headers });
        this.log('addContact');

        const postData = {
            firstName: 'DUMMY',
            lastName: 'DUMMY',
            phone: '0000252525',
            email: '#',
            city: '#',
            country: '#',
        };

        this.log('addContact', 'data = ' + JSON.stringify(postData));

        return new Promise((resolve, reject) => {
            this.httpClient.post(this.URL + '/create', postData).subscribe(
                (res) => {
                    console.log(res);
                    resolve(res);
                },
                (err) => {
                    console.log(err);
                    reject(err);
                }
            );
        });
    }

    searchData(title: string, type: SearchType): Observable<any> {
        return this.httpClient
            .get(
                `${this.URL}?s=${encodeURI(title)}&type=${type}&apikey=${
                    this.APIKEY
                }`
            )
            .pipe(map((results) => results['Search']));
    }
}
