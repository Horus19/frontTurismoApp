import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from '../models/publicacion.model';
import { PublicacionesService } from '../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: Publicacion[] = [];

  imagenes : any[] = [];

  constructor(
    private publicacionService: PublicacionesService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.publicacionService.getPublicaciones().subscribe(
      (publicaciones) => {
        this.publicaciones = publicaciones;
        this.publicaciones.forEach(publicacion => {
          this.imagenes.push(this.sanitizer.bypassSecurityTrustResourceUrl(publicacion.imagen));
        });
      });
  }

  abrirPublicacion(publicacion: Publicacion) {
    this.router.navigate([`publicacion/${publicacion.id}`], {relativeTo: this.route});
  }
}
