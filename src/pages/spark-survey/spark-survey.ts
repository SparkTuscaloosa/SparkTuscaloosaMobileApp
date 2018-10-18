import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SurveysPage } from '../surveys/surveys';
import { SurveyPage } from '../survey/survey';

@Component({
  selector: 'page-spark-survey',
  templateUrl: 'spark-survey.html'
})
export class SparkSurveyPage {

  constructor(public navCtrl: NavController) {
  }
  goToSurveys(params){
    if (!params) params = {};
    this.navCtrl.push(SurveysPage);
  }goToSurvey(params){
    if (!params) params = {};
    this.navCtrl.push(SurveyPage);
  }
}
