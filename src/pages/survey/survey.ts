import { Component } from '@angular/core';
import { NavController, NavParams, Item } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {
  surveyData;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    console.log(navParams);
    this.surveyData = navParams.data;
  }
}
