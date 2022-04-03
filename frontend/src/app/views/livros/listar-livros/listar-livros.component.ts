import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent implements OnInit {

  displayedColumns = ['nome', 'autor', 'anopublicado', 'editora', 'isbn', 'quanexemplares' ,  'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

}
