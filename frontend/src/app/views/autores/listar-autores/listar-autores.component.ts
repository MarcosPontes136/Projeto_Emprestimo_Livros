import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss']
})
export class ListarAutoresComponent implements OnInit {
  
    displayedColumns = ['nome', 'isni', 'email', 'datadeNascimento', 'biografia', 'acoes'];

  constructor( ) {}

  ngOnInit(): void {
  }
}