import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from './../clientes.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientesComponent } from './listar-clientes.component';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';

describe('ListarClientesComponent', () => {
  let component: ListarClientesComponent;
  let fixture: ComponentFixture<ListarClientesComponent>;
  const mockService = jasmine.createSpyObj('ClienteService', [
    'listarClientes',
  ]);

  beforeEach(async () => {
    mockService.listarClientes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ListarClientesComponent],
      imports: [HttpClientTestingModule, MatTableModule, MatButtonModule],
      providers: [{ provide: ClienteService, useValue: mockService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
