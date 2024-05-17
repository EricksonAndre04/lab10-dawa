import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  @ViewChild('formulario', { static: true }) formulario!: NgForm;

  onSubmit() {
    const nuevaVentana = window.open('', '_blank');
    nuevaVentana?.document.write(`
      <html>
      <head>
        <title>Resultados del formulario</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </head>
      <body>
        <div class="container mt-5">
          <h2 class="text-center">Detalles del formulario:</h2>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <p><strong>Nombre:</strong> ${this.nombre}</p>
              <p><strong>Email:</strong> ${this.email}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    nuevaVentana?.document.close();
  }

  confirmEnviar() {
    if (window.confirm('¿Estás seguro de que deseas enviar el formulario?')) {
      this.onSubmit();
    }
  }
}
