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
    project_name: new FormControl(''),
    project_owner: new FormControl(''),
    customer_name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    company_site: new FormControl(''),
  });

  onSubmit() {
    this.store.dispatch(new Wizard.AddProject(this.projectDetailsForm.value));
    this.router.navigateByUrl('/project-settings');
  }

  constructor(private router: Router, private store: Store<any>) {
  }

  ngOnInit() {
    this.store.select('project').subscribe((state => {
      this.project = state;
    }));
  }

}
