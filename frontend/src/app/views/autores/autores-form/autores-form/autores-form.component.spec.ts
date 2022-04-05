import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresFormComponent } from './autores-form.component';

describe('AutoresFormComponent', () => {
  let component: AutoresFormComponent;
  let fixture: ComponentFixture<AutoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
