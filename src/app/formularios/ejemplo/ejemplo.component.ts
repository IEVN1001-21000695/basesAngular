import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent implements OnInit {
 
 
  formulario !:FormGroup;
  resultado:number=0;
  constructor(){}
  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl('', Validators.required),
      numero2: new FormControl('', Validators.required),
 
    });
  }
  SumarNumeros():void{
    const numero1 = this.formulario.get('numero1')?.value;
    const numero2 = this.formulario.get('numero2')?.value;
    this.resultado = numero1+numero2;
  }
}