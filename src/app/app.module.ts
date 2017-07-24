import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
   apiKey: "AIzaSyCPX_opwQ-UX3QrGCPtQjTp7YbK9hvvOTA",
   authDomain: "tracker-597f8.firebaseapp.com",
   databaseURL: "https://tracker-597f8.firebaseio.com",
   projectId: "tracker-597f8",
   storageBucket: "tracker-597f8.appspot.com",
   messagingSenderId: "712313948132"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKrG1uSO_lI-I-bmuaicoKbi0XPOonRgY'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
