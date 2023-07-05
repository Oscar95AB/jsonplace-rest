import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { switchMap } from 'rxjs/operators';

export class ConfigUrls {
  readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  /**
   * @param url obligatorio, puede ser Urls.xxx o directamente /users/1/posts
   * @param method obligatorio, acción que hacer a fakeApi
   * @param id opcional, se puede enviar en url, pero para get/delete/put se puede enviar
   * @param body opcional, el objeto a enviar en el body
   *
   * Método común que realiza las acciones de GET/POST/PUT/DELETE pasando la interfaz a la hora de usarlo y devolviendo la misma
   */
  comunActions<U>(
    url: string,
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    id?: number,
    body?: U
  ): Observable<U> {
    return fromFetch(
      this.baseUrl +
        url +
        ((method === 'DELETE' && id) || (method === 'GET' && id) ? id : ''),
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
