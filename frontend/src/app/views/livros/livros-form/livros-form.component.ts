import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.scss']
})
export class LivrosFormComponent implements OnInit {
  public form!: FormGroup;
  submitted: boolean = false;  
  
  constructor(private fb: FormBuilder, 
    private service: LivrosService, 
    private location: Location,
    private modal: AlertModalService,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      editora: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      autor: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      anoPublicado: [null, [Validators.required]],
      isbn: [null, [Validators.required, Validators.pattern("[0-9]{13}")]],
      quantexemplares: [null, [Validators.required, Validators.pattern("[0-9]") ]]
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
      this.service.creationLivro(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess('Livro criado!');
          this.location.back();
        },
        error => this.modal.showAlertDanger('Erro ao criar livro, tente de novamente')
      );
    }
  }
  onCancel(){
    this.submitted = false;
    this.form.reset;
    this.location.back();
  }

}
