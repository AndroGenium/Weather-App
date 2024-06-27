import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToElementService {
  public scrollToElement(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
