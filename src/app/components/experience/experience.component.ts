import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Axis Bank',
      period: 'June 2024 - Present',
      tags: ['Strategy', 'Infrastructure', 'BCDR', 'Risk Management', 'Leadership'],
      roles: [
        {
          title: 'Manager – IT Strategy & Infrastructure',
          period: 'April 2026 - Present',
          current: true,
          highlights: [
            'Directing enterprise resilience strategy for 600+ critical banking applications, ensuring 100% regulatory compliance.',
            'Architecting Disaster Recovery (BCDR) frameworks that protect billion-dollar financial operations.',
            'Driving AI-driven automation workflows and architectural standards across cross-functional operations.'
          ]
        },
        {
          title: 'Deputy Manager – IT Strategy & Infrastructure',
          period: 'June 2024 - April 2026',
          current: false,
          highlights: [
            'Governed infrastructure resilience programs and Disaster Recovery drills across core banking platforms.',
            'Bridged technical infrastructure teams and C-suite leadership through data-driven risk management insights.'
          ]
        }
      ],
      description: 'Lead enterprise strategy and planning initiatives for Infrastructure Resilience and Disaster Recovery. Act as a strategic liaison between infrastructure, security, and leadership teams to translate technical data into executive insights.',
      color: 'from-green-600/40 to-emerald-900/40'
    },
    {
      company: 'HighRadius',
      role: 'Software Engineer Intern',
      period: 'July 2023 - October 2023',
      tags: ['Software Engineering', 'FinTech', 'Java', 'Automation'],
      highlights: [
        'Engineered automated financial reconciliation modules, reducing manual processing time by 30%.',
        'Optimized backend data pipelines in Java, improving system throughput for enterprise clients.',
        'Collaborated on full-stack features within a high-velocity FinTech product ecosystem.'
      ],
      description: 'Developed and optimized financial automation solutions. Gained hands-on experience in full-stack development and worked on enterprise-grade software products within a fast-paced FinTech environment.',
      color: 'from-blue-600/40 to-indigo-900/40'
    }
  ];
}
