import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Token } from '@shared/models/user';
import { AuthService } from './@core/services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUser: Token;

  constructor(
      private router: Router,
      private authService: AuthService
  ) {
      this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout(): void {
      this.authService.logout();
      this.router.navigate(['/auth/login']);
  }
}
