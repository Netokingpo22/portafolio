import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent implements OnInit {
  constructor(private languageService: LanguageService) { }
  private subscription: Subscription = new Subscription();
  buttonText: string = "";
  ngOnInit(): void {
    this.subscription = this.languageService.getlanguage().subscribe(language => {
      this.buttonText = language;
    });
  }

  setLanguage() {
    if (this.buttonText == 'es') {
      this.languageService.setlanguage("en");
      this.buttonText = 'en';
      return;
    }
    this.languageService.setlanguage("es");
    this.buttonText = 'es';
  }
}
