import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SurveysPage } from '../pages/surveys/surveys';
import { SparkSurveyPage } from '../pages/spark-survey/spark-survey';
import { SurveyPage } from '../pages/survey/survey';

import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GRAPHQL_URL = 'http://localhost:4466';

@NgModule({
  declarations: [
    MyApp,
    SurveysPage,
    SparkSurveyPage,
    SurveyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SurveysPage,
    SparkSurveyPage,
    SurveyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: GRAPHQL_URL
          })
        }
      },
      deps: [HttpLink]
    }
  ]
})
export class AppModule {}