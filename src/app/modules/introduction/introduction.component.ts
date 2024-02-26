import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent implements OnInit, OnDestroy {
  constructor(private languageService: LanguageService) { }
  private subscription: Subscription = new Subscription();
  text: string[] = [""];
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.languageService.getlanguage().subscribe(language => {
      if (language == 'es') {
        this.text = ['Hola, soy', "Soy un desarrollador back-end jr."];
        return;
      }
      this.text = ["Hello, i'm", "I'm a junior back-end developer."];
    });
  }
  squaresRight = [
    ['#F2E6EA', '#1A1617', '#F2E6EA', '#F2E6EA', '#F2E6EA'],
    ['#F2E6EA', '#1A1617', '#F2E6EA', '#F2E6EA'],
    ['#F2E6EA', '#1A1617', '#F2E6EA'],
    ['#F2E6EA', '#1A1617'],
    ['#F2E6EA'],
  ];
  indexSquaresRight = [0, 1, 2, 3, 4]
  squaresLeft = [
    ['#F2E6EA'],
    ['#1A1617', '#F2E6EA'],
    ['#F2E6EA', '#1A1617', '#F2E6EA'],
    ['#F2E6EA', '#F2E6EA', '#1A1617', '#F2E6EA'],
    ['#F2E6EA', '#F2E6EA', '#F2E6EA', '#1A1617', '#F2E6EA'],
  ];
  colors = ["#1A1617'", "#CC527A"];
  indexSquaresLeft = [0, 1, 2, 3, 4]
  indexFalling = [0, 1, 2, 3, 4, 5, 6, 7]
  indexShape = Array.from({ length: 8 }, () => this.randomNumbers());
  indexColor = Array.from({ length: 8 }, () => this.randomColor());

  randomNumbers() {
    return Math.round(Math.random());
  }

  randomColor() {
    return this.colors[Math.round(Math.random())];
  }
}
