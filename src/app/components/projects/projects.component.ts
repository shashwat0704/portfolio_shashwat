import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Enterprise BCDR Strategy',
      company: 'Axis Bank',
      caseStudy: {
        problem: 'The organization lacked a centralized resilience framework for 600+ critical banking applications, creating significant regulatory and operational risk.',
        approach: 'Developed a comprehensive BCDR roadmap aligned with ISO 22301 standards and RBI guidelines, integrating real-time monitoring and governance.',
        outcome: 'Achieved 100% regulatory compliance and established a fail-safe infrastructure resilience model for the bank\'s core operations.'
      },
      tags: ['Strategy', 'BCDR', 'Compliance'],
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      title: 'AI-Driven Transformation',
      company: 'Axis Bank',
      caseStudy: {
        problem: 'Manual reporting and manual incident response workflows were consuming 100+ man-hours weekly, leading to slow turnaround times.',
        approach: 'Led the integration of intelligent chatbots and Power Automate workflows to handle repetitive reporting and triage tasks.',
        outcome: 'Reduced manual intervention by 45% and reporting effort by 40%, allowing technical teams to focus on high-value strategic tasks.'
      },
      tags: ['AI', 'Automation', 'Power Automate'],
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'Infrastructure Resilience Drills',
      company: 'Axis Bank',
      caseStudy: {
        problem: 'Disaster Recovery drills were inconsistent, with a success rate of only 75% and fragmented reporting methods.',
        approach: 'Standardized the governing methodology for DR drills and implemented a unified dashboard for tracking drill performance and gaps.',
        outcome: 'Executed 300+ successful drills, improving the success rate to 95% and reducing reporting turnaround time by 20%.'
      },
      tags: ['Infrastructure', 'Planning', 'DR Drills'],
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];
}
