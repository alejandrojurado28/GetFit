import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardOfertasComponent } from '../../components/card-ofertas/card-ofertas.component';
import { CardMaquinaComponent } from '../../components/card-maquina/card-maquina.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, CardOfertasComponent, CardMaquinaComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}