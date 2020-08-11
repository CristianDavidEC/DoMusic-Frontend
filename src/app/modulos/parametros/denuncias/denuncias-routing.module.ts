import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from  '@angular/platform-browser'
import { CommonModule } from "@angular/common";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class DenunciasRoutingModule { }
