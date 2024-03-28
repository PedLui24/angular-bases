import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>
        <button  class="bg-sky-500 px-2 rounded-xl" (click)="increaseBy(+1)"> +1 </button>
        <button (click)="reset()"> Reset </button>
        <button (click)="increaseBy(-1)"> -1 </button>
    `,
})
export class CounterComponent {
    public counter: number = 10;

  
  increaseBy(valor: number):void {
    this.counter += valor;
  }

  reset(): void {
    this.counter= 10;
  }
}
