import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = 'es';
  constructor() { }
  

  getlanguage() {
    if (this.language == 'es') {
      return 0;
    }
    return 1;
  }

  setlanguage(newLanguage: string) {
    this.language = newLanguage;
  }
}
