import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  submitting = false;
  submitted = false;
  error = false;

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    this.submitting = true;
    this.error = false;

    this.http.post('https://formspree.io/f/mojrjoeg', formData, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: (response) => {
        this.submitting = false;
        this.submitted = true;
        this.error = false;
        form.reset();
        // Hide success message after 5 seconds
        setTimeout(() => this.submitted = false, 5000);
      },
      error: (err) => {
        this.submitting = false;
        this.error = true;
        this.submitted = false;
        console.error('Formspree Error:', err);
      }
    });
  }
}
