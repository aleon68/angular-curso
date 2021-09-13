import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Ironman','Spiderman','Hulk','Thor','Cápitan América'];
  heroeBorrado: string = '';

  borrarItem() {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
