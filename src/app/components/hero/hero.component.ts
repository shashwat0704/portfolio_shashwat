import { Component, ElementRef, OnInit, OnDestroy, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('metricStrip') metricStripRef?: ElementRef<HTMLElement>;

  appsCount = 0;
  reportsCount = 0;
  drillsCount = 0;
  hasAnimated = false;

  private observer: IntersectionObserver | null = null;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    // Observe when metric strip enters view to trigger Apple ticker counter
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.2 });

    // Fallback: If not observed in 1.5s, animate anyway
    setTimeout(() => {
      if (!this.hasAnimated) {
        this.animateCounters();
      }
    }, 1500);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  // Apple-style smooth easeOutExpo ticker counter
  animateCounters(): void {
    this.hasAnimated = true;
    const duration = 1800; // 1.8s
    const startTime = performance.now();

    const targetApps = 600;
    const targetReports = 1325;
    const targetDrills = 100;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Apple cubic-bezier / expo easing
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      this.appsCount = Math.floor(ease * targetApps);
      this.reportsCount = Math.floor(ease * targetReports);
      this.drillsCount = Math.floor(ease * targetDrills);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        this.appsCount = targetApps;
        this.reportsCount = targetReports;
        this.drillsCount = targetDrills;
      }
    };

    requestAnimationFrame(tick);
  }

  formatNumber(val: number): string {
    return val.toLocaleString('en-US');
  }
}
