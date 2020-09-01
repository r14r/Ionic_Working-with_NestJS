import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL='http://localhost:3000/missions';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  constructor(private httpClient: HttpClient) { }

  getMissions() {
    console.log('missions.service/getMissions |', 'from url ', URL)
    return this.httpClient.get(URL);
  }
}
