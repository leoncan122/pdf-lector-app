import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  private url: string = 'http://localhost:3000/convert';

  constructor(private http: HttpClient) {}

  extractPdf(form: FormData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'content-disposition' });

    let getfileheaders = new HttpHeaders().set(
      'Accept',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );

    return this.http.get(this.url, {
      responseType: 'blob',
    });
  }
}
