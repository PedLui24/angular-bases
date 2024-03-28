import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss'
})
export class HeroeComponent {

  public name: string = 'iron Man';
  public age: number = 45;
  
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {    
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'iron Man';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach(
      element => {element.innerHTML =  '<h1>Hola desde Angular</h1>'})
  }
}
