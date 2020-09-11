import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    public folder: string;

    private PREFIX = 'FolderPage';
    private log(func, line = '') {
        console.log(this.PREFIX + '/' + func + ':' + line);
    }

    constructor(private activatedRoute: ActivatedRoute) {
        this.log('constructor');
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
}
