import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private url = 'https://api.myjson.com/bins/n2dss';

  constructor(private http: HttpClient) {}

  getExams() {
    return this.http.get(this.url)
      .pipe(map(res => res));
  }
}
