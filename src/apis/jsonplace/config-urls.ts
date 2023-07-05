import { from, map, Observable, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { switchMap } from 'rxjs/operators';

export class ConfigUrls {
  readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  comunGet<U>(url: string): Observable<U> {
    return fromFetch(this.baseUrl + url).pipe(
      map((response) => {
        return response.json() as U;
      })
    );
  }

  comunActions<U>(
    url: string,
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    id?: number,
    body?: U
  ): Observable<U> {
    return fromFetch(
      this.baseUrl +
        url +
        (method === 'DELETE' || (method === 'GET' && id) ? id : ''),
      {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    ).pipe(
      switchMap((response) => {
        return fromPromise(response.json()) as Observable<U>;
      })
    );
  }
}

export enum Urls {
  users = '/users/',
  posts = '/posts/',
  comments = '/comments/',
  albums = '/albums/',
  fotos = '/fotos/',
  todos = '/todos/',
}
