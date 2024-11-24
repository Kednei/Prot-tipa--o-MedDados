import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>
      <h1>Bem-vindo ao MedDados</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['h1 { text-align: center; margin-top: 20px; }']
})
export class AppComponent {}
