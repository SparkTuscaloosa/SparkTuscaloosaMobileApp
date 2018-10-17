import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SurveyPage } from '../survey/survey';

@Component({
  selector: 'page-surveys',
  templateUrl: 'surveys.html'
})
export class SurveysPage {

  constructor(public navCtrl: NavController) {
  }
  goToSurvey(params){
    if (!params) params = {};
    this.navCtrl.push(SurveyPage);
  }
}
