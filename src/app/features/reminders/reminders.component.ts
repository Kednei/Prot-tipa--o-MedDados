import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent {
  reminders = [
    { id: 1, text: 'Tomar remédio', date: '2024-11-24' },
    { id: 2, text: 'Consulta médica', date: '2024-11-30' }
  ];

  addReminder() {
    const newReminder = { id: this.reminders.length + 1, text: 'Novo Lembrete', date: '2024-12-01' };
    this.reminders.push(newReminder);
  }
}
