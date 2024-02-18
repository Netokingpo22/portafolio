import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IntroductionComponent } from './modules/introduction/introduction.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
