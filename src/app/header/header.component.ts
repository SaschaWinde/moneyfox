import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private authService: AuthService) {
    this.authService = authService;
    this.user = this.authService.currentUser;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
