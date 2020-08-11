import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './public/home/default/default.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { SideMenuComponent } from './public/master-page/side-menu/side-menu.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
//import { CrearComentariosComponent } from './modulos/parametros/comentarios/crear-comentarios/crear-comentarios.component';
import { CrearGrupoComponent } from './modulos/grupos/crear-grupo/crear-grupo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    NavbarComponent,
    SideMenuComponent,
    HeroComponent,
    FooterComponent,
    //CrearComentariosComponent,
    CrearGrupoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
