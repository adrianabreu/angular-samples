import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {

  public data = [{
    header: 'Sucede algo en el mundo de Angular',
    body: 'Se identifica a un grupo de nuevos navegantes',
    footer: 'que han dominado la proyección de contenido'
  }, {
    header: '¡Consecuencias!',
    body: 'Ahora los componentes son mucho más reusables',
    footer: 'Y se hace un mejor uso del DRY'
  }];

}
