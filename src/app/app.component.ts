import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  duplicarNumero(x:number){
    return x*2;
  }

  alumno={
    matricula:1234,
    nombre:"Juan",
    fechaInscrito:new Date(),
    pago:2220
  };
}
