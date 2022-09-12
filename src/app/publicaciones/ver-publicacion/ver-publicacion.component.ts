import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion.model';
import { Reviews } from 'src/app/models/reviews.model';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-ver-publicacion',
  templateUrl: './ver-publicacion.component.html',
  styleUrls: ['./ver-publicacion.component.scss'],
})
export class VerPublicacionComponent implements OnInit {
  constructor(
    private publicacionService: PublicacionesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private fb: FormBuilder,
    private snack: MatSnackBar
  ) {}

  idPublicacion!: number;

  publicacion!: Publicacion;

  reviews: Reviews[] = [];

  imageSource!: any;

  formComentario = this.fb.group({
    comentario: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.idPublicacion = this.route.snapshot.params['id'];
    this.publicacionService
      .getPulicacion(this.idPublicacion)
      .subscribe((publicacion) => {
        this.publicacion = publicacion;
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.publicacion.imagen
        );
      });
    this.publicacionService
      .getReviews(this.idPublicacion)
      .subscribe((reviews) => {
        this.reviews = reviews;
      });
  }

  comentar() {
    console.log('comentar')
    this.publicacionService.createComentario({
      comentario: this.formComentario.value.comentario,
      usuario: 'Felipe',
      idPublicacion: this.idPublicacion,
    }).subscribe((data)=>{
      this.snack.open('comentario enviado exitosamente.', undefined, {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      console.log(data)
      this.reviews = [data , ...this.reviews]
    });
  }
}
