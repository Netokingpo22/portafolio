import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent implements OnInit {
  language: number = 0;
  buttonText: string = "";
  constructor(private languageService: LanguageService) {
   }
  ngOnInit(): void {
    this.language = this.languageService.getlanguage();
    if (this.language == 0) {
      this.buttonText = 'es';
    }
    this.buttonText = 'en';
  }

  setLanguage() {
    if (this.buttonText == 'es') {
      this.languageService.setlanguage("en");
      this.buttonText= 'en';
      return;
    }
    this.languageService.setlanguage("es");
    this.buttonText= 'es';
  }
}
