import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  documents = [
    { id: 1, name: 'Exame de Sangue', category: 'Exame' },
    { id: 2, name: 'Raio-X Pulmonar', category: 'Imagem' }
  ];

  addDocument() {
    const newDoc = { id: this.documents.length + 1, name: 'Novo Documento', category: 'Outros' };
    this.documents.push(newDoc);
  }

  deleteDocument(id: number) {
    this.documents = this.documents.filter(doc => doc.id !== id);
  }
}
