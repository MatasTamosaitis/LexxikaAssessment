import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

export class HttpErrorHandler {
  static handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      //A client-side or network error occured. Handle it accordingly.
      console.error('An error occured');
      console.error(error);
    } else {
      // The backend returned an unsuccesful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}`);
      console.error(error);
    }
    // Return an ErrorObservable with user-facing error message

    return throwError(error);
  }
}
