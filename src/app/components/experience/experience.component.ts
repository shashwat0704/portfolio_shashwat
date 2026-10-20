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
      tags: ['Strategy', 'Infrastructure', 'BCDR', 'Risk Management', 'Power Automate', 'Leadership'],
      roles: [
        {
          title: 'Manager – IT Strategy & Infrastructure',
          period: 'April 2026 - Present',
          current: true,
          highlights: [
            'Govern the annual DR drill calendar across 600+ applications, from schedule coordination to audit-ready closure.',
            'Scrutinised and closed 1,325 DR drill reports over two fiscal years (FY25 & FY26) with 100% accuracy and on-time closure.',
            'Building a Copilot Studio agent over DR platform data for automated report generation and routine stakeholder queries (in progress).'
          ]
        },
        {
          title: 'Deputy Manager – IT Strategy & Infrastructure',
          period: 'June 2024 - April 2026',
          current: false,
          highlights: [
            'Built Power Automate workflows and dashboards (schedule alerts, drill status, ageing exceptions) saving more than 1 working day per week.',
            'Led API integration between incident tooling and the internal DR platform, from requirements through UAT and change closure; eliminated manual entry and closed an audit point.',
            'Supported regulatory and internal audits with no overdue DR-related observations under my scope.'
          ]
        }
      ],
      description: 'Govern enterprise Disaster Recovery (BCDR) operations and infrastructure resilience across 600+ banking applications. Drive intelligent automation and API integrations to streamline reporting, eliminate manual operational overhead, and uphold audit readiness.',
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
