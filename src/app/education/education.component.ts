import { Component, Input } from '@angular/core';
import { Education } from '../../shared/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
})
export class EducationComponent {
  @Input() education: Education;
  institution: string;
  degree: string;
  from: string;
  to: string;

  onChange() {
    this.education.institution = this.institution;
    this.education.degree = this.degree;
    this.education.from = this.from;
    this.education.to = this.to;
  }
}
