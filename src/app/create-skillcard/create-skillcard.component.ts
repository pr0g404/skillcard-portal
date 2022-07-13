import { Component } from '@angular/core';
import { Selection } from '../../shared/Selection';
import { Education } from '../../shared/Education';
import { Project } from '../../shared/Project';
import { Experience } from '../../shared/Experience';
import { Certificate } from '../../shared/Certificate';

@Component({
  selector: 'app-create-skillcard',
  templateUrl: './create-skillcard.component.html',
  styleUrls: ['./create-skillcard.component.css']
})

export class CreateSkillcardComponent {

  selectedEducations: Array<Education> = [];
  selectedCertificates: Array<Certificate> = [];
  selectedExperiences: Array<Experience> = [];
  selectedProjects: Array<Project> = [];

  selectedProgramminglanguages: Selection[] = [];
  selectedSoftwares: Selection[] = [];
  selectedSkills: Selection[] = [];

  programminglanguages: Selection[] = [
    {id: 1, name: 'Programmiersprache 1'},
    {id: 2, name: 'Programmiersprache 2'},
    {id: 3, name: 'Programmiersprache 3'}
  ];

  softwares: Selection[] = [
    {id: 1, name: 'Software 1'},
    {id: 2, name: 'Software 2'},
    {id: 3, name: 'Software 3'},
  ];

  skills: Selection[] = [
    {id: 1, name: 'Skill 1'},
    {id: 2, name: 'Skill 2'},
    {id: 3, name: 'Skill 3'},
  ];

  addEducation() {
    let education: Education = {} as Education;
    this.selectedEducations.push(education);
  }

  addCertificates() {
    let certificate: Certificate = {} as Certificate;
    this.selectedCertificates.push(certificate);
  }

  addExperience() {
    let experience: Experience = {} as Experience;
    this.selectedExperiences.push(experience);
  }

  addProject() {
    const project = {} as Project;
    this.selectedProjects.push(project);
  }
}
