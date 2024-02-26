import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  constructor(private languageService: LanguageService) { }
  @Input() title: string[] = [""];
  @Input() titleColor: string = "bg-[#F2E6EA]";
  private subscription: Subscription = new Subscription();
  language: string = "";
  ngOnInit(): void {
    this.subscription = this.languageService.getlanguage().subscribe(language => {
      this.language = language;
    });
  }
  getTitle() {
    if (this.title?.length == 1) {
      return this.title[0];
    }
    if (this.language == 'es') {
      return this.title[0];
    }
    return this.title[1];
  }
}