import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pregunta } from '../../interfaces/Pregunta.interface';
import { PreguntaService } from '../../services/pregunta.service';
import { Usuario } from '../../interfaces/Usuario.interface';
import { CardMonitoresComponent } from '../../components/card-monitores/card-monitores.component';
import { CardInstalacionesComponent } from '../../components/card-instalaciones/card-instalaciones.component';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, CardMonitoresComponent, CardInstalacionesComponent],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})
export class AboutViewComponent implements OnInit {
  preguntas?: Pregunta[];
  nuevaPregunta: Pregunta = {
    id: 0,
    usuario: '',
    asunto: '',
    pregunta: ''
  };

  currentUser: Usuario | null;

  constructor(private preguntaService: PreguntaService) {
    const userString = localStorage.getItem('usuario');
    this.currentUser = userString ? JSON.parse(userString) : null;
  }

  ngOnInit(): void {
    this.fetchPreguntas();
  }

  private fetchPreguntas() {
    this.preguntaService.findAll().subscribe({
      next: value => {
        this.preguntas = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }

  createPregunta() {
    this.preguntaService.create(this.nuevaPregunta).subscribe({
      next: () => {
        this.fetchPreguntas();
        this.nuevaPregunta = {
          id: 0,
          usuario: '',
          asunto: '',
          pregunta: ''
        };
      },
      error: error => {
        console.error(error);
      }
    })
  }


}
