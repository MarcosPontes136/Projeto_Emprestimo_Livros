import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {
  public form!: FormGroup;
  
  submitted: boolean = false;
  
  
  constructor(private fb: FormBuilder, private service: ClienteService, private location: Location) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contato: [null, [Validators.required, Validators.pattern("[0-9]{11}")]]
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
      this.service.creationCliente(this.form.value).subscribe(
        success => {
          console.log('sucesso');
          this.location.back();
        },
        error => console.error(error),
        () => console.log('request completo')
      );
    }
  }
  onCancel(){
    this.submitted = false;
    this.form.reset;
    this.location.back();
  }
}
