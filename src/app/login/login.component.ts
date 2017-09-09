import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, AngularFireDatabase]
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  item: FirebaseObjectObservable<any>;
  db: AngularFireDatabase;

  constructor(private authService: AuthService, db: AngularFireDatabase, private router: Router) {
    this.authService = authService;
    this.user = this.authService.currentUser;
    this.db = db;
  }

  login(mail: string, pass: string): void {
    this.authService.login(mail, pass)
      .then(success => {
        this.item = this.db.object(`/user/${success.uid}`);
        this.router.navigate(['/aufgaben']);
      })
      .catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
