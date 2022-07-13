import { Selection } from './Selection';
import { Education } from './Education';
import { Certificate } from './Certificate';
import { Experience } from './Experience';
import { Project } from './Project';

export interface Skillcard {
  selectedSkills: [Selection];
  selectedProgrammingLanguages: [Selection];
  selectedSoftware: [Selection];
  selectedEducation: [Education];
  selectedCertificates: [Certificate];
  selectedExperience: [Experience];
  selectedProjects: [Project];
}
