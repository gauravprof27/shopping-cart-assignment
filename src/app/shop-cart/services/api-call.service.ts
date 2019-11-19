import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) {}

  getAllItems() {
    console.log("test");
    const ItemUrl = 'https://api.myjson.com/bins/qzuzi';
    return this.http.get(ItemUrl);
  }
}
