import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Grid } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ButtonsPage } from '../pages/buttons/buttons';
import { GridPage } from '../pages/grid/grid';
import { FormPage } from '../pages/form/form';
import { ApidataPage } from '../pages/apidata/apidata';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

const firebaseConfig = {
  apiKey: "AIzaSyD56VL57CXb0-Y03PEtR_aM2MJwsgkAEgw",
  authDomain: "angularcrud-71ef0.firebaseapp.com",
  databaseURL: "https://angularcrud-71ef0.firebaseio.com",
  projectId: "angularcrud-71ef0",
  storageBucket: "angularcrud-71ef0.appspot.com",
  messagingSenderId: "289576797450",
  appId: "1:289576797450:web:76df7b39c4650771"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ButtonsPage,
    GridPage,
    FormPage,
    ApidataPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ButtonsPage,
    GridPage,
    FormPage,
    ApidataPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
