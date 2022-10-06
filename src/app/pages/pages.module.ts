import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BodyComponent} from "./body/body.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    BodyComponent
  ],
  exports: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PagesModule { }
