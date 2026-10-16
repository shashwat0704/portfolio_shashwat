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
      title: 'Product',
      level: 'MASTER',
      description: 'Leading enterprise strategy for Infrastructure Resilience and Disaster Recovery (BCDR). Specialized in Business Impact Analysis (BIA) and optimizing recovery prioritization for 600+ critical applications.',
      skills: ['BCDR Strategy', 'Infrastructure Resilience', 'Disaster Recovery Drills', 'BIA']
    },
    {
      title: 'Design',
      level: 'EXPERIENCED',
      description: 'Expertise in RBI Audit Management and Regulatory Compliance. Ownership of RCSA and thematic assessments, delivering high-impact dashboards for senior leadership and ensuring 100% regulatory adherence.',
      skills: ['RBI Audit Management', 'RCSA', 'SOP Development', 'Compliance']
    },
    {
      title: 'Engineering',
      level: 'NOVICE',
      description: 'Driving digital transformation with AI-driven automation. Implementing intelligent workflows and chatbots to eliminate manual dependencies and improve reporting efficiency by 40%.',
      skills: ['Power Automate', 'SQL', 'AI Chatbots', 'Data Analysis']
    }
  ];
}
