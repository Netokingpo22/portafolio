import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = new BehaviorSubject<string>('es');
  constructor() { }


  getlanguage() {
    return this.language.asObservable();
  }

  setlanguage(newLanguage: string) {
    this.language.next(newLanguage);
  }
}
