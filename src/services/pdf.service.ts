import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private url: string = 'http://localhost:3000/api/pdf'

  constructor(private http: HttpClient) { }

  extractPdf (form: FormData): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
    
    return this.http.post(this.url, form, {headers: headers})
  }
}
