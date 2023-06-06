import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getData(path: string): Observable<any> {
    const url = `https://project-test-utrw.onrender.com/${path}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.log('Error fetching data:', error);
        return throwError(error);
      })
    );
  }
}
