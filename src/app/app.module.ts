import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WizardComponent } from './wizard/wizard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { StepperComponent } from './stepper/stepper.component';

const appRoutes: Routes = [
  { path: 'wizard', component: WizardComponent, children: [
      { path: 'project-details', component: ProjectDetailsComponent },
      { path: 'project-settings', component: ProjectSettingsComponent },
      { path: 'delivery-details', component: DeliveryDetailsComponent },
      { path: 'review', component: ReviewAndSubmitComponent },
    ] },
  { path: '', redirectTo: 'wizard/project-details', pathMatch: 'full' },
  { path: 'projects', component: ProjectsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    ProjectDetailsComponent,
    ProjectSettingsComponent,
    DeliveryDetailsComponent,
    ReviewAndSubmitComponent,
    ProjectsListComponent,
    StepperComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({project: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
