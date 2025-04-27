import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  imports: [
    HeaderComponent,
    RouterOutlet,
    MatButtonModule,
    TranslocoModule,
    FooterComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inv-portfolio-frontend';
}
