import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import Cliente from 'src/app/global/models/cliente.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';

const CLIENTE_API: string = 'http://localhost:8080/api/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  listarClientes(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(ApiUrl.listarClientes)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }


  creationCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(CLIENTE_API, cliente);
  }

  //creationCliente(post: Cliente){
  //  return this.http.post<Cliente[]>('http://localhost:8080/api/cliente', post)
  //}
}
