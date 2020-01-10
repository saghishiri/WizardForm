import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  activeRoute: number;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('project').subscribe((state => {
      this.activeRoute = state.activeRoute;
    }));
  }

}
