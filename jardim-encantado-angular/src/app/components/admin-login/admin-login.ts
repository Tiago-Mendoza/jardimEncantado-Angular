import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  showError: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const success = this.authService.login(this.username, this.password);
    if (!success) {
      this.showError = true;
    }
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    alert('Entre em contato com o administrador para recuperar sua senha.\n\nEmail: sac@jardimencantado.com\nTelefone: (11) 4780-6302');
  }
}
