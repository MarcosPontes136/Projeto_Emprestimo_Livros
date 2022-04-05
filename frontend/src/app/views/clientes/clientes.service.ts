import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';
import Cliente from 'src/app/global/models/cliente.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private CLIENTE_API = 'http://localhost:8080/api/cliente';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Cliente[]>(this.CLIENTE_API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(ApiUrl.listarClientes)
      .pipe(map((res) => res.map((c, i) => ({ ...c, id: i }))));
  }

  
  creationCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.CLIENTE_API, cliente);
  }

  updateCliente(id: number): Observable<Object>{
    return this.http.put(`${this.CLIENTE_API}/${id}`, id).pipe(take(1));
  }
  
  getClienteId(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.CLIENTE_API}/${id}`);
  }

  remove(id: number): Observable<Object>{
    return this.http.delete(`${this.CLIENTE_API}/${id}`);
  }
}
