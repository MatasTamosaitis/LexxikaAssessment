# DocumentWebsite

did quite a lot of faffing about with docker to get it running and managed to create an image and container but no luck in connecting to the front end sadly

this is the run command

docker build -t documentwebsite -f DocumentWebsite.Server/Dockerfile .
docker run -d -p 8080:80 -p 8081:5000 --name documentwebsite-container documentwebsite



also the documentwebsiteservice.ts in there you might need to change the port number on the url when running the solution so it goes to the web api.

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
