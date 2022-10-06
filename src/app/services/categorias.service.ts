import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url: any = environment.url+`/v1/categorias`;

  constructor(private http: HttpClient) {
    console.log( this.url);
  }

  obtenerCategorias() {
    return this.http.get(this.url);
  }
}
