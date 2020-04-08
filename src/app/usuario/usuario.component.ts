import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formRe: FormGroup;
  validaCampo: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
   this.formRe = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatedpassword: ['', Validators.required]
    }, { validators: this.ValidaConfirmacaoSenha });
  }

  onSubmit(){
    this.validaCampo = true;
    var jsonForm = JSON.stringify(this.formRe.value);
    console.log(jsonForm);
    
  }

  ValidaCamposObrigatorios(value: string){
    return this.formRe.get(value).invalid && this.formRe.get(value).touched
  }

  ValidaConfirmacaoSenha(formRepa: FormGroup){
    return formRepa.get('repeatedpassword').value === formRepa.get('password').value ? null : {'igual': true};
  }
}
