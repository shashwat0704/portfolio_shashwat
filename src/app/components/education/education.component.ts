import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = {
    school: 'KIIT University',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2020 – 2024',
    grade: '8.80 CGPA'
  };

  certifications = [
    {
      name: 'Microsoft Business Analyst Professional Certificate',
      url: 'https://www.coursera.org/professional-certificates/microsoft-business-analyst'
    },
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      url: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-foundations'
    },
    {
      name: 'Agile Software Development',
      url: 'https://www.coursera.org/learn/agile-software-development'
    },
    {
      name: 'Change Management',
      url: 'https://www.coursera.org/learn/change-management'
    },
    {
      name: 'Version Control with Git',
      url: 'https://www.coursera.org/learn/version-control-with-git'
    }
  ];
}
