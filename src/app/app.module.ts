import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SurveysPage } from '../pages/surveys/surveys';
import { SparkSurveyPage } from '../pages/spark-survey/spark-survey';
import { SurveyPage } from '../pages/survey/survey';

import { ApolloModule, Apollo } from "apollo-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ReactiveFormsModule } from '@angular/forms';

const GRAPHQL_URL = 'https://us1.prisma.sh/tarakesh-gogi-98311c/mobile-app-backend/dev';

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
    ReactiveFormsModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink){
    apollo.create({
      link: httpLink.create({
        uri: GRAPHQL_URL
      }),
      cache: new InMemoryCache()
    })
  }
}
