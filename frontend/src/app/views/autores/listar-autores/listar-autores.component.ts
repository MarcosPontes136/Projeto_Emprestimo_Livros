import { Component, OnInit } from '@angular/core';
import Autor from 'src/app/global/models/autor.model';
import { AutorService } from '../autores.service';

@Component({
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss']
})
export class ListarAutoresComponent implements OnInit {
  [x: string]: any;
  autorSelecionado!: Autor;

  
  displayedColumns = ['nome','isni', 'email','dataDeNascimento','biografia','acoes'];

  constructor(private autorApi: AutorService ) {}

  ngOnInit(): void {
    this.autorApi.listarAutores().subscribe((res) => {
      this.autor = res;
    });  
  }

}