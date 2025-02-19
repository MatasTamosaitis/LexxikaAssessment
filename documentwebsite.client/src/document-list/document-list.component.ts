import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentWebsiteService } from '../services/documentwebsiteservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DocumentFile {
  fileName: string;
  content: string;
}

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  standalone: true,
  styleUrls: ['./document-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class DocumentListComponent implements OnInit {
  documents: DocumentFile[] = [];
  selectedDocument: DocumentFile | null = null;
  newFileName: string = '';
  newFileContent: string = '';

  constructor(private documentService: DocumentWebsiteService) { }

  ngOnInit() {
    this.fetchDocuments();
  }

  fetchDocuments() {
    this.documentService.getDocuments().subscribe(fileContents => {
      this.documents = fileContents;
    });
  }


  createNewFile() {
    if (!this.newFileName.trim()) {
      alert('Please enter a file name');
      return;
    }

    this.documentService.createDocument(this.newFileName, this.newFileContent).subscribe(
      response => {
        alert('File created successfully!');
        this.fetchDocuments(); // Refresh file list
      },
      error => {
        alert('Error creating file: ' + error.error);
      }
    );
  }


  selectDocument(doc: DocumentFile) {
    this.selectedDocument = { ...doc };
  }


  deleteFile(fileName: string) {
    if (confirm(`Are you sure you want to delete ${fileName}?`)) {
      this.documentService.deleteDocument(fileName).subscribe(
        response => {
          alert('File deleted successfully!');
          this.fetchDocuments();
        },
        error => {
          alert('Error deleting file: ' + error.error);
        }
      );
    }
  }

  saveChanges() {
    if (!this.selectedDocument) return;

    this.documentService.updateDocument(this.selectedDocument.fileName, this.selectedDocument.content)
      .subscribe(response => {
        alert('File updated successfully!');
        this.selectedDocument = null;
        this.fetchDocuments();
      }, error => {
        alert('Failed to update file');
      });
  }
}
