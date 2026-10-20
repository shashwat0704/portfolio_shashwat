import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-tech-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './tech-skills.component.html',
  styleUrl: './tech-skills.component.css'
})
export class TechSkillsComponent {
  skillGroups = [
    {
      category: 'Strategic Resilience',
      skills: [
        { name: 'DR Drill Governance', proof: 'Govern annual drill calendar across 600+ applications; 100% Q1 & Q2 cluster drills completed.' },
        { name: 'Risk Management', proof: 'Drive RCSA and BIA assessments; zero overdue DR-related audit observations under scope.' },
        { name: 'Audit & Compliance', proof: 'Supported internal and regulatory audit requirements, maintaining overdue rate below 2%.' }
      ]
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'Power Automate', proof: 'Automated schedule notifications and status dashboards, saving over 1 working day per week.' },
        { name: 'Copilot Studio', proof: 'Developing an AI agent over DR platform data for automated reporting and routine queries.' },
        { name: 'API Integration', proof: 'Led requirements, UAT, and rollout for incident-to-DR data flow, eliminating manual entry.' }
      ]
    },
    {
      category: 'Process Governance',
      skills: [
        { name: 'Drill Closure Scrutiny', proof: 'Scrutinised and closed 1,325 DR drill reports over two fiscal years with 100% on-time closure.' },
        { name: 'Executive Dashboards', proof: 'Automated quarterly and monthly reporting, saving 4–5 hours of manual prep per cycle.' },
        { name: 'BRD & UAT Leadership', proof: 'Translating complex stakeholder needs into actionable requirements, test cases, and change closure.' }
      ]
    }
  ];
}
