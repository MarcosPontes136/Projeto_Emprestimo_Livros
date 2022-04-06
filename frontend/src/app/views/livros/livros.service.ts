import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiUrl from 'src/app/global/constant/api-urls.constant';
import Livro from 'src/app/global/models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private LIVRO_API = 'http://localhost:8080/api/livro';

  constructor(private http: HttpClient) { }

  listarLivros(): Observable<Livro[]> {
    return this.http
      .get<Livro[]>(ApiUrl.listarLivros)
      .pipe(map((res) => res.map((c, i) => ({ ...c, id: i }))));
  }

  creationLivro(Livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(this.LIVRO_API, Livro);
  }
}
