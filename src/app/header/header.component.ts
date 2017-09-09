import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private authService: AuthService, private router: Router) {
    this.authService = authService;
    this.user = this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
