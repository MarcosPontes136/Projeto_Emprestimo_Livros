import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { catchError, take } from 'rxjs/operators';
import Cliente from 'src/app/global/models/cliente.model';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ClienteService as ClienteService } from '../clientes.service';

@Component({
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
})
export class ListarClientesComponent implements OnInit {
  [x: string]: any;
  clienteSelecionado!: Cliente;

  //clientes: Cliente[] = [];
  displayedColumns = ['nome', 'email', 'contato', 'acoes'];

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;

  constructor(private clienteApi: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    ) {}

  ngOnInit(): void {
    this.clienteApi.listarClientes().subscribe((res) => {
      this.clientes = res;
    });

    this.onRefresh();
  }
  onRefresh() {
    this.cliente$ = this.clienteApi.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEditar(id: number){
    this.router.navigate(['update-cliente', id]);
  }

  onDelete(cliente: Cliente) {
    this.clienteSelecionado = cliente;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse cliente?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.clienteApi.remove(cliente.id) : EMPTY)
    )
  }
  onConfirmDelete(id: number) {
    this.clienteApi.remove(id).subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover cliente. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}


