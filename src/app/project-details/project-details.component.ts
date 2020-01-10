import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import { Project} from '../models/project';
import * as Wizard from './../store/actions';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Array<any>;
  // project = Project;
  projectDetailsForm = new FormGroup({
    projectName: new FormControl(''),
    projectOwner: new FormControl(''),
    customerName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    companySite: new FormControl(''),
  });
  onSubmit() {
    this.store.dispatch(new Wizard.AddProject(this.projectDetailsForm.value));
    this.router.navigateByUrl('/wizard/project-settings');
  }

  constructor(private router: Router, private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(new Wizard.ActiveRoute({activeRoute: 1}));

    this.store.select('project').subscribe((state => {
      this.projectDetailsForm = new FormGroup({
        projectName: new FormControl(state.projectName),
        projectOwner: new FormControl(state.projectOwner),
        customerName: new FormControl(state.customerName),
        phone: new FormControl(state.customerName),
        email: new FormControl(state.email),
        companySite: new FormControl(state.companySite),
      });
    }));
  }

}
