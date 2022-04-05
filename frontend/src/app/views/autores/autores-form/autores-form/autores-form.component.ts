import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AutorService } from '../../autores.service';

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.scss']
})
export class AutoresFormComponent implements OnInit {

  public form!: FormGroup;
  
  submitted: boolean = false;  

  constructor(private fb: FormBuilder, 
    private service: AutorService, 
    private location: Location,
    private modal: AlertModalService,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contato: [null, [Validators.required, Validators.pattern("[0-9]{11}")]],
      isni: [null, [Validators.required, Validators.pattern("[0-9]{16}")]],
      dataDeNascimento: [null, [Validators.required,]],
      biografia: [null, [Validators.required, Validators.maxLength(50)]],
    });
  }

  get f(){
    return this.form.controls;
  }
  onSubimit(){ 
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){
      console.log('sumit');
      this.service.creationAutor(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess('Autor criado!');
          this.location.back();
        },
        error => this.modal.showAlertDanger('Erro ao criar autor, tente de novamente')
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset;
    this.location.back();
  }
}
