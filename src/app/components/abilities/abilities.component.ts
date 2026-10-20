import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.css'
})
export class AbilitiesComponent {
  abilities = [
    {
      title: 'DR Governance at Scale',
      subtitle: 'Disaster Recovery & Enterprise Resilience',
      description: 'Governing the annual DR drill lifecycle across 600+ critical banking applications. Managing calendar coordination, multi-stakeholder cluster drills, and rigorous audit-ready report scrutiny.',
      proofPoints: [
        'Annual drill calendar across 600+ banking applications',
        '1,325 DR drill reports scrutinised and closed across FY25 & FY26',
        '100% of planned Q1 & Q2 cluster drills completed with 500+ stakeholders'
      ],
      skills: ['DR Drill Governance', 'BCDR Strategy', 'Cluster Drills', 'BIA', 'Executive Reporting']
    },
    {
      title: 'Automation & AI Workflows',
      subtitle: 'Power Platform & GenAI Solutions',
      description: 'Architecting intelligent workflows and AI tooling to eliminate repetitive manual processes. Leading end-to-end API integrations, alert pipelines, and agentic query assistants.',
      proofPoints: [
        'Power Automate workflows save >1 working day of team effort weekly',
        'Led API integration between incident tooling and DR platform through UAT',
        'Developing Copilot Studio agent for automated reports and routine queries'
      ],
      skills: ['Power Automate', 'Copilot Studio', 'API Integrations', 'Process Optimization', 'BRD & UAT']
    },
    {
      title: 'Audit & Regulatory Compliance',
      subtitle: 'Governance, Risk & Assurance',
      description: 'Ensuring resilience operations align with stringent regulatory mandates and internal audit expectations through evidence-backed tracking, RCSA reviews, and timely remediations.',
      proofPoints: [
        'Supported regulatory and internal audits with zero overdue DR observations under scope',
        'Maintained audit-observation overdue rate below 2% across FY25',
        'Closed key audit observations via system automation and process governance'
      ],
      skills: ['Regulatory Audits', 'RCSA Reviews', 'Risk Governance', 'SOP Standardization', 'Remediation Tracking']
    }
  ];
}
