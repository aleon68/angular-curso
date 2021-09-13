import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}: Hola Mundo!!!</h1>
    <span>Base: {{base}}</span><br/>
    <span>Minimo: {{minimo}}</span><br/>
    <span>Maximo: {{maximo}}</span><br/>

    <button (click)=" acumular(base);">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)=" acumular(-1 * base);">-{{base}}</button>

  `
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 10;

  base: number = 5;
  maximo: number = 20;
  minimo: number = 0;

  acumular(valor: number): void {
    if (valor > 0 && this.numero >= this.maximo) return;
    if (valor < 0 && this.numero <= this.minimo) return;
    this.numero += valor;
  }
}
