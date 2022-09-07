import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Publicacion } from '../models/publicacion.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(
    private http: HttpClient
  ) { }

  getPublicaciones() {
    return this.http.get<Publicacion[]>(`${environment.urlBack}publicaciones`);
  }

  getPulicacion(id: number) {
    return this.http.get<Publicacion>(`${environment.urlBack}publicacionByID?id=${id}`);
  }

}
