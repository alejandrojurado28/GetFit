import { Component, OnInit } from '@angular/core';
import { Instalacion } from '../../interfaces/Instalacion.interface';
import { InstalacionesService } from '../../services/instalaciones.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-instalaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-instalaciones.component.html',
  styleUrl: './card-instalaciones.component.css'
})
export class CardInstalacionesComponent implements OnInit {

  instalaciones?: Instalacion[];

  constructor(private instalacionesService: InstalacionesService) { }

  ngOnInit(): void {
    this.fetchInstalaciones();
  }

  private fetchInstalaciones() {
    this.instalacionesService.findAll().subscribe({
      next: value => {
        this.instalaciones = value;
        console.log(value);
      },
      error: error => {console.error(error)}
    })
  }

}
