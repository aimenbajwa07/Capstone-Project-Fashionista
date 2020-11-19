import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.isAdmin = this.auth.getAdmin();
    this.auth.logout();
    this.router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});

  }
}
