import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SurveyPage } from '../survey/survey';

import { Apollo, QueryRef } from 'apollo-angular';
import {Subscription} from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

const SURVEY_QUERY = gql`
  query surveys {
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
export class SurveysPage implements OnInit, OnDestroy {
  loading: boolean;
  surveys: Observable<any>;
  surveysRef: QueryRef<any>;
  surveysSub: Subscription;

  constructor(public navCtrl: NavController, private apollo: Apollo) {}

  ngOnInit() {

    this.loading = true;
    this.surveysRef = this.apollo.watchQuery({
      query: SURVEY_QUERY,
      fetchPolicy: 'network-only'
    });

    if(this.surveysSub) {
      this.surveysSub.unsubscribe();
    }

    this.surveysSub = this.surveysRef
      .valueChanges
      .subscribe(({ loading, data }) => {
        this.loading = loading;
        this.surveys = data.surveys
      })
  }

  ngOnDestroy() {
    this.surveysSub.unsubscribe();
  }

  goToSurvey(params){
    if (!params) params = {};
    this.navCtrl.push(SurveyPage);
  }
}
