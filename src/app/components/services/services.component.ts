import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      title: 'BCDR Strategy & Governance',
      description: 'End-to-end governance for Business Continuity and Disaster Recovery across 600+ banking applications, ensuring audit-ready resilience and calendar adherence.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Infrastructure Resilience',
      description: 'Coordinating cluster DR drills across 500+ stakeholders, conducting BIA reviews, and translating infrastructure health metrics into executive leadership dashboards.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      title: 'AI & Workflow Automation',
      description: 'Building Power Automate pipelines, API integrations, and Copilot Studio agents that eliminate manual follow-ups and save over a working day every week.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Regulatory & Audit Assurance',
      description: 'Managing regulatory and internal audit readiness with disciplined tracking and closure, maintaining zero overdue DR observations under scope.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
    }
  ];
}
