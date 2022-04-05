import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiUrl from 'src/app/global/constant/api-urls.constant';
import Autor from 'src/app/global/models/autor.model';


@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private AUTOR_API = 'http://localhost:8080/api/autor';


  constructor(private http: HttpClient) { }


  listarAutores(): Observable<Autor[]> {
    return this.http
      .get<Autor[]>(ApiUrl.listarAutores)
      .pipe(map((res) => res.map((c, i) => ({ ...c, id: i }))));
  }
}
