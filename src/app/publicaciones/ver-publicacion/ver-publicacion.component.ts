import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion.model';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-ver-publicacion',
  templateUrl: './ver-publicacion.component.html',
  styleUrls: ['./ver-publicacion.component.scss']
})
export class VerPublicacionComponent implements OnInit {

  constructor(
    private publicacionService: PublicacionesService,
    private route:ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private fb : FormBuilder
  ) { }

  idPublicacion!: number;

  publicacion!: Publicacion;

  imageSource!: any;

  formComentario = this.fb.group({
    comentario: ['']
  });

  ngOnInit(): void {
    this.idPublicacion = this.route.snapshot.params['id'];
    this.publicacionService.getPulicacion(this.idPublicacion).subscribe(
      (publicacion) => {
        this.publicacion = publicacion;
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.publicacion.imagen);
      }
    );

  }

}
