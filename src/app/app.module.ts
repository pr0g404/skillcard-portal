import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateSkillcardComponent } from './create-skillcard/create-skillcard.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TextareaAutoresizeDirective } from './textarea-autoresize.directive';
import { EducationComponent } from './education/education.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { PrintPreviewComponent } from './print-preview/print-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CreateSkillcardComponent,
    TextareaAutoresizeDirective,
    EducationComponent,
    CertificateComponent,
    ExperienceComponent,
    ProjectComponent,
    PrintPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
