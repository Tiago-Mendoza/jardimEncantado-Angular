import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    alert('Obrigado por se inscrever!');
  }
}
