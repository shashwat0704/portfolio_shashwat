import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'portfolio_theme';
  
  /** Current active theme ('dark' or 'light') as a reactive Angular Signal */
  currentTheme = signal<Theme>('dark');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    }
  }

  private initTheme(): void {
    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      this.applyTheme(saved, false);
      return;
    }

    // Check system preference
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme: Theme = prefersLight ? 'light' : 'dark';
    this.applyTheme(initialTheme, false);

    // Listen for OS scheme change if user hasn't set explicit choice
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.applyTheme(e.matches ? 'light' : 'dark', false);
      }
    });
  }

  /** Toggle between 'dark' and 'light' */
  toggleTheme(): void {
    const nextTheme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme, true);
  }

  /** Explicitly set theme */
  setTheme(theme: Theme): void {
    this.applyTheme(theme, true);
  }

  private applyTheme(theme: Theme, persist = true): void {
    this.currentTheme.set(theme);

    if (persist && isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(this.storageKey, theme);
      } catch (e) {
        console.warn('Could not persist theme to localStorage', e);
      }
    }

    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      const body = document.body;

      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
        body.classList.add('dark');
        body.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        body.classList.remove('dark');
        body.classList.add('light');
      }
    }
  }
}
