import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLivrosComponent } from './listar-livros.component';

describe('ListarLivrosComponent', () => {
  let component: ListarLivrosComponent;
  let fixture: ComponentFixture<ListarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
