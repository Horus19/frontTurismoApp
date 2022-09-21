import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontTurismoApp';
  
  constructor(private route: Router) {}

  logout(): void {
    location.href = environment.urlFrontAuth + 'auth/logout';
  }
}
