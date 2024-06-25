import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-raining-loader',
  templateUrl: './raining-loader.component.html',
  styleUrls: ['./raining-loader.component.scss']
})
export class RainingLoaderComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const status = document.getElementById('status');
    const preloader = document.getElementById('preloader');
    const body = document.body;

    if (status) {
      this.fadeOut(status, 1250); // 1250ms fade out
    }

    if (preloader) {
      setTimeout(() => {
        this.fadeOut(preloader, 1250); // 1250ms fade out
      }, 350); // 350ms delay before fade out
    }

    setTimeout(() => {
      this.renderer.setStyle(body, 'overflow', 'visible');
    }, 1600); // 1600ms delay for body overflow change
  }

  private fadeOut(element: HTMLElement, duration: number) {
    let opacity = 1;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      opacity = 1 - elapsed / duration;
      if (opacity <= 0) {
        element.style.opacity = '0';
        element.style.display = 'none';
      } else {
        element.style.opacity = opacity.toString();
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
}
