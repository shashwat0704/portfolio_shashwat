import { Directive, ElementRef, OnInit, OnDestroy, NgZone } from '@angular/core';

@Directive({
  selector: '.reveal',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private mouseMoveHandler: ((e: MouseEvent) => void) | null = null;

  constructor(private el: ElementRef<HTMLElement>, private ngZone: NgZone) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    // 1. Apple-style Scroll Reveal with Staggered Child Delays
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = this.el.nativeElement;
          target.classList.add('active');

          // Stagger any child cards smoothly (80ms increments)
          const cards = target.querySelectorAll<HTMLElement>('.glow-border');
          cards.forEach((card, idx) => {
            card.style.transitionDelay = `${idx * 80}ms`;
            card.classList.add('child-active');
          });

          this.observer?.unobserve(target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    this.observer.observe(this.el.nativeElement);

    // 2. Apple Spotlight Effect: Update cursor coordinates on cards for interactive radial lighting
    this.ngZone.runOutsideAngular(() => {
      const target = this.el.nativeElement;
      const cards = target.querySelectorAll<HTMLElement>('.glow-border');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
