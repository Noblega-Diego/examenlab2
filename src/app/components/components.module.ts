import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProvinciaComponent } from './table-provincia/table-provincia.component';
import { FormProvinciaComponent } from './form-provincia/form-provincia.component';
import {FormsModule} from "@angular/forms";
import { VistaComponent } from './vista/vista.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetalleProvinciaComponent } from './detalle-provincia/detalle-provincia.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TableProvinciaComponent,
    FormProvinciaComponent,
    VistaComponent,
    NavBarComponent,
    DetalleProvinciaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    VistaComponent,
    DetalleProvinciaComponent,
    NavBarComponent,
    FormProvinciaComponent
  ]
})
export class ComponentsModule { }
