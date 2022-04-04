import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAutoresComponent } from './views/autores/listar-autores/listar-autores.component';
import { ClientesFormComponent } from './views/clientes/clientes-form/clientes-form.component';
import { ListarClientesComponent } from './views/clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './views/home/home.component';
import { ListarLivrosComponent } from './views/livros/listar-livros/listar-livros.component';

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
    path: 'autores/listar',
    component: ListarAutoresComponent,
    data: { pagetitle: 'Listar Autores' },
  },
  {
    path: 'livros/listar',
    component: ListarLivrosComponent,
    data: { pageTitle: 'Listar Livros'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
