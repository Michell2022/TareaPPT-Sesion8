import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  correcto: boolean = false;
  incorrecto: boolean = false;
  user = '';
  pass = '';
  usuario: string = 'michell';
  password: string = 'enero2022';

  verificarDatos() {

    // CREANDO FUNCION VALIDAR LOGIN
    if (this.user === this.usuario && this.pass === this.password) {
      this.correcto = true;
    } else {
      this.incorrecto = true;
    }

  }
}
