import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaComponent} from "./components/vista/vista.component";
import {DetalleProvinciaComponent} from "./components/detalle-provincia/detalle-provincia.component";
import {FormProvinciaComponent} from "./components/form-provincia/form-provincia.component";


const routes: Routes = [
  {path: 'home', component:VistaComponent},
  {path: 'vista', component:VistaComponent},
  {path: 'vista/:nombre', component:VistaComponent},
  {path: 'provincia/:id', component:DetalleProvinciaComponent},
  {path: 'form/:id', component:FormProvinciaComponent},
  {path: '**', component:VistaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
