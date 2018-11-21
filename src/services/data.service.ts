import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAssetsJson(fileName) {
    return this.http.get('./assets/json/' + fileName );
  }
}
