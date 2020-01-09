import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import { Project} from '../models/project';
import * as Wizard from './../store/actions';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.css']
})
export class ProjectSettingsComponent implements OnInit {

  project: Array<any>;
  projectSettingsForm = new FormGroup({
    email: new FormControl(''),
    language: new FormControl(''),
    timeZone: new FormControl(''),
  });
  languages$: Observable<any> = this.http.get('/api/languages');
  timeZones$: Observable<any> = this.http.get('/api/timeZones');

  backTo() {
    this.router.navigateByUrl('/project-details');
  }
  onSubmit() {
    this.store.dispatch(new Wizard.AddProject(this.projectSettingsForm.value));
    this.router.navigateByUrl('/delivery-details');
  }
  constructor(private http: HttpClient, private router: Router, private store: Store<any>) { }

  ngOnInit() {
    this.store.select('project').subscribe((state => {
      this.project = state;
    }));
  }

}
