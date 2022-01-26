import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translate-symbols';
  sTexto: string = '';
  sTextoConvertido: string = '';
  sTextoConvertidoConDobleSalto: string = '';

  replaceText() {
    const chars:any = {
      'Ă':'A',
      'ă':'a',
      'Â':'A',
      'â':'a',
      'Î':'I',
      'î':'i',
      'Ș':'S',
      'ș':'s',
      'Ț':'T',
      'ț':'t'
    };
    this.sTextoConvertido = this.sTexto.replace(/[ĂăÂâÎîȘșȚț]/g, m => chars[m]);

    // Dobles saltos de linea cambiarlos por --- para el programa de traduccioens Elim
    this.sTextoConvertidoConDobleSalto = this.sTextoConvertido.replace(/(\n\n)/gm,"\n---\n");
  }
}
