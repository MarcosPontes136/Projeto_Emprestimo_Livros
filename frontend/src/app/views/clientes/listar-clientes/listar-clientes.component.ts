import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import Cliente from 'src/app/global/models/cliente.model';
import { ClienteService as ClienteService } from '../clientes.service';

@Component({
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns = ['nome', 'email', 'contato', 'acoes'];

  constructor(private clienteApi: ClienteService) {}

  ngOnInit(): void {
    this.clienteApi.listarClientes().subscribe((res) => {
      this.clientes = res;
    });
  }
}
