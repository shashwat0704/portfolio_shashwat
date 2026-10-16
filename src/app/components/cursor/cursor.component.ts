import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-dot" [ngStyle]="{'left.px': x, 'top.px': y}" [class.hovering]="isHovering"></div>
    <div class="cursor-outline" [ngStyle]="{'left.px': x, 'top.px': y}" [class.hovering]="isHovering"></div>
  `,
  styles: [`
    .cursor-dot {
      width: 8px;
      height: 8px;
      background-color: var(--color-brand-green);
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transition: width 0.3s, height 0.3s, background-color 0.3s;
      transform: translate(-50%, -50%);
    }
    .cursor-outline {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(106, 176, 29, 0.3);
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.15s ease-out;
      transform: translate(-50%, -50%);
    }
    .cursor-dot.hovering {
      width: 40px;
      height: 40px;
      background-color: rgba(106, 176, 29, 0.1);
      border: 1px solid var(--color-brand-green);
    }
    .cursor-outline.hovering {
      width: 60px;
      height: 60px;
      opacity: 0;
    }
  `]
})
export class CursorComponent implements OnInit {
  x = 0;
  y = 0;
  isHovering = false;

  ngOnInit() {
    this.x = -100;
    this.y = -100;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
    
    const target = e.target as HTMLElement;
    this.isHovering = !!target.closest('a, button, .group');
  }
}
