import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MotoristasModule} from './motoristas/motoristas.module';


import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import { AgmCoreModule } from '@agm/core';






@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, MotoristasModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }
