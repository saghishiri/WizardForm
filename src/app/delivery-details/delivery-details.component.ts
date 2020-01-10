import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import * as Wizard from './../store/actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  project: Array<any>;
  countries$: Observable<any> = this.http.get('/api/countries');

  deliveryDetailsForm = new FormGroup({
    addressLine1: new FormControl(''),
    addressLine2: new FormControl(''),
    postcode: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
  });

  backTo() {
    this.router.navigateByUrl('/wizard/project-settings');
  }
  onSubmit() {
    this.store.dispatch(new Wizard.AddProject(this.deliveryDetailsForm.value));
    this.router.navigateByUrl('/wizard/review');
  }

  constructor(private http: HttpClient, private router: Router, private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new Wizard.ActiveRoute({activeRoute: 3}));

    this.store.select('project').subscribe((state => {
      this.deliveryDetailsForm = new FormGroup({
        addressLine1: new FormControl(state.addressLine1),
        addressLine2: new FormControl(state.addressLine2),
        postcode: new FormControl(state.postcode),
        city: new FormControl(state.city),
        state: new FormControl(state.state),
        country: new FormControl(state.country),
      });
    }));
  }

}
