import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AufgabenService } from './aufgaben/aufgaben.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AufgabenComponent } from './aufgaben/aufgaben.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AufgabenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AufgabenService,
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
