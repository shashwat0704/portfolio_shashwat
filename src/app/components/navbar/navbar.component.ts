import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isVisible = true;
  lastScrollTop = 0;
  isHovered = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isMenuOpen) return; // Don't hide navbar if menu is open
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    // If scrolling down and past the navbar area, hide it
    if (st > this.lastScrollTop && st > 100) {
      this.isVisible = false;
    } else {
      // If scrolling up, show it
      this.isVisible = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  onMouseOver() {
    this.isHovered = true;
    this.isVisible = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
