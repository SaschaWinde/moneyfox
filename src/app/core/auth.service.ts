import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  authState: any;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  get authenticated(): boolean {
    return this.authState ? true : false;
  }

  get currentUser(): any {
    return this.user;
  }

  login(mail: string, pass: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(mail, pass);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.authState = null;
    this.user = null;
  }
}
