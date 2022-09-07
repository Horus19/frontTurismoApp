import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionesComponent } from './publicaciones.component';
import { VerPublicacionComponent } from './ver-publicacion/ver-publicacion.component';

const routes: Routes = [
  {
    path: '',
    component: PublicacionesComponent
  },
  {
    path: 'publicacion/:id',
    component: VerPublicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
