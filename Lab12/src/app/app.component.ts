import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <div>
  <button style="margin:5px;" (click) ="decr()">-</button>
  <strong>{{value}}</strong> 
  <button style="margin:5px;" (click) ="incr()">+</button>    
  </div>
  `,
})
export class AppComponent {
 
  public value :number= 0;

  incr() {
    this.value += 1;
  }

  decr() {
    this.value -= 1;
  }
}
