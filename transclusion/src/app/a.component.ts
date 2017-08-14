import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `<app-c>{{title | uppercase }}</app-c>
  <app-b>{{title | lowercase}} </app-b>
  `
})
export class AComponent {

  title = 'Content projection';
}
