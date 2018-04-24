import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaTrabajoComponent } from './lista-trabajo/lista-trabajo.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrabajoInfoComponent } from './trabajo-info/trabajo-info.component';
import { TrabajoComponent } from './trabajo/trabajo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaTrabajoComponent,
    ListaTrabajosComponent,
    FormComponent,
    NavbarComponent,
    TrabajoInfoComponent,
    TrabajoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
