import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url: any = environment.url+`/v1/libros`;

  constructor(private http: HttpClient) {
    console.log( this.url);
  }

  obtenerlibros() {
    return this.http.get(this.url);
  }
}
