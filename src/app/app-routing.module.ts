import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateSkillcardComponent } from './create-skillcard/create-skillcard.component';
import { PrintPreviewComponent } from './print-preview/print-preview.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'create-skillcard', component: CreateSkillcardComponent},
  {path: 'print-preview', component: PrintPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

