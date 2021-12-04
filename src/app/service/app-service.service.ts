import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  url = 'http://bpegm.in/laxmi/quiz/';
  constructor(private http: HttpClient) { }

  getQuestionList(Id: any): Observable<any> {
    return this.http.get('assets/json/app.json');
  }

  getMenuList(Id: any): Observable<any> {
    return this.http.get('assets/json/menu.json');
  }

  getEventList(): Observable<any> {
    return this.http.get('assets/json/event.json');
  }
}
