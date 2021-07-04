import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topic: string = 'GIT INTEGRATION FOR ANGULAR PROJECT';
  viewMode: string = 'home';

  constructor(private route: Router, public authService: AuthService) {
  }
  logout() {
    this.authService.isAuthenticated = false;
    this.authService.isAdmin = null;
    localStorage.removeItem('loggedInUserEmail');
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
