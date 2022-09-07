import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { MaterialModule } from '../material/material.module';
import { VerPublicacionComponent } from './ver-publicacion/ver-publicacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicacionesComponent,
    VerPublicacionComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PublicacionesModule { }
