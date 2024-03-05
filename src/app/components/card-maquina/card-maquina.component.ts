import { Component, OnInit } from '@angular/core';
import { Maquina } from '../../interfaces/Maquina.interface';
import { MaquinaService } from '../../services/maquina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-maquina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-maquina.component.html',
  styleUrl: './card-maquina.component.css'
})
export class CardMaquinaComponent implements OnInit{

  maquinas?: Maquina[];

  constructor(private maquinaService: MaquinaService) { }

  ngOnInit(): void {
    this.fetchMaquinas();
  }

  private fetchMaquinas() {
    this.maquinaService.findAll().subscribe({
      next: value => {
        this.maquinas = value;
        console.log(value);
      },
      error: error => {console.log(error)}
    })
  }
}
