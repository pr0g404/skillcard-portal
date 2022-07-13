import { Component, Input } from '@angular/core';
import { Project } from '../../shared/Project';
import { Education } from '../../shared/Education';
import { Certificate } from '../../shared/Certificate';
import { Experience } from '../../shared/Experience';
import { Selection } from '../../shared/Selection';

@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.css']
})
export class PrintPreviewComponent {
  @Input() selectedProjects: Array<Project>;
  @Input() selectedEducations: Array<Education>;
  @Input() selectedCertificates: Array<Certificate>;
  @Input() selectedExperiences: Array<Experience>;
  @Input() selectedProgramminglanguages: Array<Selection>;
  @Input() selectedSoftwares: Array<Selection>;
  @Input() selectedSkills: Array<Selection>;
}
