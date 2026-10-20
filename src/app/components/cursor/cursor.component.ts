import { Component, HostListener, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrailNode {
  x: number;
  y: number;
}

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Simple Cursor Trail -->
    @for (node of trail; track $index) {
      <div 
        class="cursor-trail-dot"
        [ngStyle]="{
          'transform': 'translate3d(' + node.x + 'px, ' + node.y + 'px, 0)',
          'opacity': getOpacity($index),
          'width.px': getSize($index),
          'height.px': getSize($index)
        }">
      </div>
    }

    <!-- Main Cursor Dot -->
    <div 
      class="cursor-head" 
      [ngStyle]="{'transform': 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0)'}"
      [class.hovering]="isHovering"
      [class.active]="hasMoved">
    </div>
  `,
  styles: [`
    :host {
      display: block;
      pointer-events: none;
    }

    .cursor-head {
      position: fixed;
      top: -4px;
      left: -4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 0 0 10px #ffffff, 0 0 18px #6ab01d;
      pointer-events: none;
      z-index: 99999;
      opacity: 0;
      transition: opacity 0.2s, transform 0.04s ease-out, width 0.2s, height 0.2s, background-color 0.2s;
      will-change: transform;
    }

    .cursor-head.active {
      opacity: 1;
    }

    .cursor-head.hovering {
      width: 14px;
      height: 14px;
      top: -7px;
      left: -7px;
      background-color: #a8ff3e;
      box-shadow: 0 0 15px #a8ff3e, 0 0 30px rgba(106, 176, 29, 0.8);
    }

    .cursor-trail-dot {
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 50%;
      background: #6ab01d;
      box-shadow: 0 0 8px rgba(106, 176, 29, 0.8);
      pointer-events: none;
      z-index: 99998;
      transform: translate3d(-100px, -100px, 0);
      margin-top: -3px;
      margin-left: -3px;
      will-change: transform;
    }

    /* Disable custom cursor on touch devices */
    @media (hover: none) and (pointer: coarse) {
      .cursor-head, .cursor-trail-dot {
        display: none !important;
      }
    }
  `]
})
export class CursorComponent implements OnInit, OnDestroy {
  mouseX = -100;
  mouseY = -100;
  isHovering = false;
  hasMoved = false;

  readonly trailLength = 12;
  trail: TrailNode[] = Array.from({ length: 12 }, () => ({ x: -100, y: -100 }));

  private animId: number | null = null;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    // Run outside Angular change detection zone for 60/120fps performance
    this.ngZone.runOutsideAngular(() => {
      const render = () => {
        let targetX = this.mouseX;
        let targetY = this.mouseY;

        for (let i = 0; i < this.trail.length; i++) {
          const node = this.trail[i];
          node.x += (targetX - node.x) * 0.42;
          node.y += (targetY - node.y) * 0.42;
          targetX = node.x;
          targetY = node.y;
        }

        this.animId = requestAnimationFrame(render);
      };
      this.animId = requestAnimationFrame(render);
    });
  }

  ngOnDestroy(): void {
    if (this.animId !== null) {
      cancelAnimationFrame(this.animId);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.hasMoved = true;

    const target = e.target as HTMLElement | null;
    this.isHovering = !!target?.closest('a, button, input, textarea, select, .glow-border, .cursor-pointer');
  }

  getSize(index: number): number {
    return Math.max(2, 6 - (index * 0.35));
  }

  getOpacity(index: number): number {
    return Math.max(0, 0.7 - (index / this.trailLength) * 0.65);
  }
}
