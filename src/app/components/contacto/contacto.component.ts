import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent {
  copyContent() {
    const emailElement = document.getElementById('mail') as HTMLParagraphElement;
    const email = emailElement.innerText;
    navigator.clipboard.writeText(email).then(() => {
      console.log('Contenido copiado al portapapeles');
    }).catch((error) => {
      console.error('Error al copiar contenido al portapapeles:', error);
    });
  }
}
