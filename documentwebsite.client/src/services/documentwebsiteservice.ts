import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpErrorHandler } from "./HttpErrorHandler";

interface DocumentFile {
  fileName: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentWebsiteService
{

  constructor(private http: HttpClient) {
  }

  validateUser(email: string, password: string) {

    return this.http.post('https://localhost:32775/api/account/getaccount', { email, password })
      .pipe(catchError(HttpErrorHandler.handleError));
  }

  getDocuments(): Observable<DocumentFile[]> {
    return this.http.get<DocumentFile[]>('https://localhost:32775/api/document/getdocuments');
  }

  updateDocument(fileName: string, content: string): Observable<any> {
    return this.http.post('https://localhost:32775/api/document/updatedocuments', { fileName, content });
  }

  createDocument(fileName: string, content: string): Observable<any> {
    return this.http.post('https://localhost:32775/api/document/createDocument', { fileName, content });
  }

  deleteDocument(fileName: string): Observable<any> {
    return this.http.delete(`https://localhost:32775/api/document/deleteDocument/${fileName}`);
  }
}
