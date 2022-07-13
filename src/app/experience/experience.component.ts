import { Component, Input } from '@angular/core';
import { Experience } from '../../shared/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  @Input() experience: Experience;
  addedTasks: string[] = [];
  inputValue: string;
  title: string;
  company: string;
  from: string;
  to: string;

  addToActivities() {
    this.addedTasks.push(this.inputValue);
    this.experience.activities = this.addedTasks;
  }

  onChange() {
    this.experience.title = this.title;
    this.experience.company = this.company;
    this.experience.from = this.from;
    this.experience.to = this.to;
  }
}
