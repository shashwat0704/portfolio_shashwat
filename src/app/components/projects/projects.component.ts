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
      title: 'DR Drill Governance at 600+ Application Scale',
      company: 'Axis Bank',
      status: 'Delivered',
      caseStudy: {
        problem: 'Drill scheduling, tracking, and closure were conducted manually across hundreds of application teams, risking schedule drift and fragmented visibility.',
        approach: 'Established a governed annual DR calendar for 600+ applications paired with automated weekly status and ageing dashboards presented to senior management.',
        outcome: 'Completed 100% of planned Q1 and Q2 cluster DR drills across 500+ stakeholders, providing early visibility of pending closures and zero schedule drift.'
      },
      tags: ['DR Governance', 'Calendar Coordination', 'Executive Dashboards', 'Risk Management'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Automating the DR Reporting Loop',
      company: 'Axis Bank',
      status: 'Delivered',
      caseStudy: {
        problem: 'Recurring drill notifications, multi-stakeholder follow-ups, and cyclic status reporting consumed extensive team hours every week.',
        approach: 'Built automated Power Automate workflows for drill schedule alerts, ageing notifications, and automated governance dashboards.',
        outcome: 'Saves more than 1 working day of team effort every week, while cutting 4–5 hours of manual dashboard preparation per cycle.'
      },
      tags: ['Power Automate', 'Workflow Automation', 'Dashboards', 'Process Optimization'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Incident-to-DR Platform API Integration',
      company: 'Axis Bank',
      status: 'Delivered',
      caseStudy: {
        problem: 'Incident details were manually re-typed from incident tracking tools into DR request forms, introducing data discrepancy risks and audit friction.',
        approach: 'Led business requirements (BRD), access approvals, SIT/UAT validation, and change management for a direct API integration between tooling and the DR platform.',
        outcome: 'Incident data now populates automatically without manual intervention, eliminating errors and cleanly closing an audit observation.'
      },
      tags: ['API Integration', 'BRD & UAT', 'Audit Compliance', 'Change Management'],
      color: 'from-purple-500/20 to-indigo-500/20'
    },
    {
      title: 'Agentic Assistant for DR Queries',
      company: 'Axis Bank',
      status: 'In Progress',
      caseStudy: {
        problem: 'Application teams frequently raised repetitive BCP/DR compliance queries and status checks that required manual investigation and replies.',
        approach: 'Developing an intelligent Microsoft Copilot Studio agent connected to DR platform data to answer user queries and generate on-demand reports.',
        outcome: 'In progress: Automating routine stakeholder inquiries and report queries to streamline response times and enable self-service DR insights.'
      },
      tags: ['Copilot Studio', 'AI Agents', 'Automation', 'Self-Service'],
      color: 'from-amber-500/20 to-orange-500/20'
    }
  ];
}
