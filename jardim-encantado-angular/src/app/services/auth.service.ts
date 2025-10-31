import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = username.trim().toLowerCase();
    const pass = password.trim();
    
    if (user === 'admin' && pass === '123456') {
      localStorage.setItem('adminLogged', 'yes');
      this.router.navigate(['/admin-dashboard']);
      return true;
    } else if (user === 'cliente' && pass === '123456') {
      localStorage.setItem('clientLogged', 'yes');
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('adminLogged');
    localStorage.removeItem('clientLogged');
    this.router.navigate(['/']);
  }

  isAdminLoggedIn(): boolean {
    return localStorage.getItem('adminLogged') === 'yes';
  }

  isClientLoggedIn(): boolean {
    return localStorage.getItem('clientLogged') === 'yes';
  }
}

