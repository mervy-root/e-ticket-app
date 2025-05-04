import { Component, OnInit } from '@angular/core';

import AOS from 'aos';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLoggedIn: boolean = false;
  ngOnInit() {
    AOS.init();
    this.authService.getIsLoggedIn().subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
