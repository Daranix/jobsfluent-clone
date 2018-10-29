import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrabajoInfoComponent } from './trabajo-info/trabajo-info.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { TrabajosService } from './trabajos.service';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ListaTrabajosComponent,
    FormComponent,
    NavbarComponent,
    TrabajoInfoComponent,
    TrabajoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    TrabajosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
