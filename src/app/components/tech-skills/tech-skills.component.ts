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
        { name: 'BCDR Strategy', proof: 'Architected resilience frameworks for 600+ critical banking applications.' },
        { name: 'Risk Management', proof: 'Lead RCSA and BIA assessments to identify and mitigate infrastructure gaps.' },
        { name: 'Compliance', proof: 'Ensured 100% adherence to ISO 22301 and RBI regulatory mandates.' }
      ]
    },
    {
      category: 'AI & Automation',
      skills: [
        { name: 'Power Automate', proof: 'Reduced manual reporting effort by 40% through intelligent workflows.' },
        { name: 'AI Chatbots', proof: 'Integrated enterprise chatbots for automated incident response and triage.' },
        { name: 'Python', proof: 'Utilized Jupyter for complex data analysis and system health reporting.' }
      ]
    },
    {
      category: 'Process Governance',
      skills: [
        { name: 'Process Design', proof: 'Standardized SOPs for enterprise-wide Disaster Recovery drills.' },
        { name: 'KPI Tracking', proof: 'Improved DR drill success rates from 75% to 95% via data governance.' },
        { name: 'BRD Preparation', proof: 'Translating complex stakeholder needs into actionable technical requirements.' }
      ]
    }
  ];
}
