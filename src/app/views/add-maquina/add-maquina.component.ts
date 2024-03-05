import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MaquinaService } from '../../services/maquina.service';
import { Maquina } from '../../interfaces/Maquina.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-maquina',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-maquina.component.html',
  styleUrl: './add-maquina.component.css'
})
export class AddMaquinaComponent {

  maquina: Maquina = { id: 0, nombre: '', descripcion: '', imagenURL: '' };

  constructor(private maquinaService: MaquinaService) { }

  submitForm() {
    this.maquinaService.create(this.maquina).subscribe(
      response => {
        alert('Máquina añadida con éxito');
      },
      error => {
        alert('Error al añadir la máquina');
      }
    )
  }

}
