import { Directive, ElementRef, OnInit, OnDestroy, NgZone } from '@angular/core';

@Directive({
  selector: '.reveal',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private cleanups: Array<() => void> = [];

  constructor(private el: ElementRef<HTMLElement>, private ngZone: NgZone) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    const target = this.el.nativeElement;

    // Fast path: if element is already within viewport on load, activate immediately (no 2-3s delay)
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      target.classList.add('active');
      const cards = target.querySelectorAll<HTMLElement>('.glow-border');
      cards.forEach(card => card.classList.add('child-active'));
    }

    // Smooth scroll reveal for below-the-fold content with eager 80px bottom margin
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('active');

          const cards = target.querySelectorAll<HTMLElement>('.glow-border');
          cards.forEach((card, idx) => {
            card.style.transitionDelay = `${Math.min(idx * 40, 160)}ms`;
            card.classList.add('child-active');
          });

          this.observer?.unobserve(target);
        }
      });
    }, {
      threshold: 0.02,
      rootMargin: '0px 0px 80px 0px'
    });

    this.observer.observe(target);

    // Optimized Apple Spotlight Effect: throttled with requestAnimationFrame & passive listeners
    this.ngZone.runOutsideAngular(() => {
      const cards = target.querySelectorAll<HTMLElement>('.glow-border');
      
      cards.forEach(card => {
        let rafId: number | null = null;
        const handler = (e: MouseEvent) => {
          if (rafId !== null) return;
          rafId = requestAnimationFrame(() => {
            const cardRect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - cardRect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - cardRect.top}px`);
            rafId = null;
          });
        };

        card.addEventListener('mousemove', handler, { passive: true });
        this.cleanups.push(() => {
          if (rafId !== null) cancelAnimationFrame(rafId);
          card.removeEventListener('mousemove', handler);
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.cleanups.forEach(cleanup => cleanup());
    this.cleanups = [];
  }
}
