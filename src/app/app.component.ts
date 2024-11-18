import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vp1Component } from './vp1/vp1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Vp1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vpipe';
}
