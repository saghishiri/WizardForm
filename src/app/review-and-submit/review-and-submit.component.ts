import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as Wizard from './../store/actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.css']
})
export class ReviewAndSubmitComponent implements OnInit {

  project: Array<any>;

  onSubmit() {
    this.router.navigateByUrl('/projects');
  }
  backTo() {
    this.router.navigateByUrl('/delivery-details');
  }
  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit() {
    this.store.select('project').subscribe((state => {
      this.project = state;
      console.log('state', state);
    }));
  }

}
