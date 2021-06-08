import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formularioCreado!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario()
  }

  crearFormulario()
  {
    this.formularioCreado = this.formBuilder.group({
      name: ["",Validators.required],
      email: ["",Validators.compose([
        Validators.required, Validators.email
      ])],
    })
  }


  agregar()
  {
    console.log(this.formularioCreado.value);

  }

}
