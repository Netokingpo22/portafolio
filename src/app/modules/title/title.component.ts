import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  @Input() title: String[] = [""];
  language: number = 0;
  constructor(private languageService: LanguageService) { }
  ngOnInit(): void {
    this.language = this.languageService.getlanguage();
  }
  getTitle() {
    if (this.title?.length == 1) {
      return this.title[0];
    }
    return this.title[this.language];
  }
}