import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})
export class AboutViewComponent {

}
