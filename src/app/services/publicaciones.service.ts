import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Publicacion } from '../models/publicacion.model';
import { Reviews } from '../models/reviews.model';

@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  constructor(private http: HttpClient) {}

  getPublicaciones() {
    return this.http.get<Publicacion[]>(`${environment.urlBack}publicaciones`);
  }

  getPulicacion(id: number) {
    return this.http.get<Publicacion>(
      `${environment.urlBack}publicacionByID?id=${id}`
    );
  }

  getReviews(idPublicacion: number) {
    return this.http.get<Reviews[]>(
      `${"environment.urlBackReviews"}reviewsByid?id=${idPublicacion}`
    );
  }

  createComentario(comentario: Reviews) {
    return this.http.post<Reviews>(
      `${"environment.urlBackReviews"}addreviews`,
      comentario
    );
  }
}
