import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresFormComponent } from './views/autores/autores-form/autores-form/autores-form.component';
import { ListarAutoresComponent } from './views/autores/listar-autores/listar-autores.component';
import { ClientesFormComponent } from './views/clientes/clientes-form/clientes-form.component';
import { ListarClientesComponent } from './views/clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './views/home/home.component';
import { ListarLivrosComponent } from './views/livros/listar-livros/listar-livros.component';
import { LivrosFormComponent } from './views/livros/livros-form/livros-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { pageTitle: 'Página Inicial' },
  },
  {
    path: 'clientes/listar',
    component: ListarClientesComponent,
    data: { pageTitle: 'Listar Clientes' },
  },
  {
    path: 'clientes/form',
    component: ClientesFormComponent,
    data: { pagetitle: 'Formulario de clientes'},
  },
  {
    path: 'edit/:id',
    component: ClientesFormComponent,
    data: { pagetitle: 'Editar clientes'},
  },
  {
    path: 'autores/listar',
    component: ListarAutoresComponent,
    data: { pagetitle: 'Listar Autores' },
  },
  {
    path: 'autores/form',
    component: AutoresFormComponent,
    data: { pagetitle: 'Formulario Autores'},
  },
  {
    path: 'livros/listar',
    component: ListarLivrosComponent,
    data: { pageTitle: 'Listar Livros'},
  },
  {
    path: 'livros/form',
    component: LivrosFormComponent,
    data: { pageTitle: 'Formulario Livros'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
