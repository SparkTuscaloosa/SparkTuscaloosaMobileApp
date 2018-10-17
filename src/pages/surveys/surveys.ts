import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SurveyPage } from '../survey/survey';

import gql from 'graphql-tag';

const query = gql`
  query Surveys {
    surveys {
      id
      title
      description
    }
  }
`;

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
