import { Component, OnInit } from '@angular/core';
import Livro from 'src/app/global/models/livro.model';
import { LivrosService } from '../livros.service';

@Component({
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent implements OnInit {
  [x: string]: any;
  livroSelecionado!: Livro;

  displayedColumns = ['nome','autor','anoPublicado','editora','isbn','quantexemplares','acoes'];

  constructor(private livroApi: LivrosService) { }

  ngOnInit(): void {
    this.livroApi.listarLivros().subscribe((res) => {
      this.livro = res;
    });  
  }

}
