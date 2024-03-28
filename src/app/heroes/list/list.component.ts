import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk','Thor','Capitan American'];
  listaBorrado: string = '';

  borrarHeroe(){
    //this.heroes.pop();
    // const heroeBorrado = this.heroes.shift();
    this.listaBorrado = this.heroes.shift() || '';

  }
}
