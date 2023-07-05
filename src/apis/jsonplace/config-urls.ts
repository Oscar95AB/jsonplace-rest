import { map, Observable, of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

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
  ) {
    return fromFetch(this.baseUrl + url + (method === 'DELETE'?id:''), {
      method: method,
      body: body?JSON.stringify(body):undefined,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).pipe(
      map((response) => {
        return response.json() as U;
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
