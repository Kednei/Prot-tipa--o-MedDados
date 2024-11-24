import { Routes } from '@angular/router';
import { DocumentsComponent } from './features/documents/documents.component';
import { RemindersComponent } from './features/reminders/reminders.component';

export const routes: Routes = [
  { path: 'documents', component: DocumentsComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: '', redirectTo: 'documents', pathMatch: 'full' },
  { path: '**', redirectTo: 'documents' }
];
