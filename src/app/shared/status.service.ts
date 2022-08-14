import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { json } from 'body-parser';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUrl: string = '/api/status';

  constructor(private http: HttpClient) {}

  getStatus(): Observable<any> {
    return this.http.get(this.statusUrl, { responseType: 'json' });
  }


}

