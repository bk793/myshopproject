import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-welcome', // ✅ Matches routing setup
  templateUrl: './welcome.component.html',
  imports: [CommonModule, RouterModule]
})
export class WelcomeComponent {
}
