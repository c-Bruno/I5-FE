import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendSugestion(data): Observable<any> {
    return this.http.post(`${environment.apiUrl}/sugestion/add`, data);
  }

}
