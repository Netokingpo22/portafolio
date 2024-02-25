import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IntroductionComponent } from './modules/introduction/introduction.component'
import { ExperienceComponent } from './modules/experience/experience.component'
import { TitleComponent } from './modules/title/title.component'
import { SkillsComponent } from './modules/skills/skills.component'
import { ButtonsComponent } from './modules/buttons/buttons.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, ExperienceComponent, TitleComponent, SkillsComponent, ButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
