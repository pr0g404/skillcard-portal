import { Component, Input } from '@angular/core';
import { Project } from '../../shared/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  @Input() project: Project;
  addedTasks: string[] = [];
  inputValue: string;
  projectTitle: string;
  customer: string;
  from: string;
  to: string;

  addToActivities() {
    this.addedTasks.push(this.inputValue);
    this.project.activities = this.addedTasks;
  }

  onChange() {
    this.project.customer = this.customer;
    this.project.projectTitle = this.projectTitle;
    this.project.from = this.from;
    this.project.to = this.to;
  }
}
