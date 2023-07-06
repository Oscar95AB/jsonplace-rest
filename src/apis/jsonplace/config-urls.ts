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
    body?: U | number
  ): Observable<U> {
    let id;

    // Controlamos que el param body sea un id o un Objeto
    if (typeof body === 'number') {
      id = body;
      body = undefined;
    } else if (method === 'PUT' && typeof body !== 'number') {
      id = (body as any)?.id;
    }
    // Creamos la Url y el body de la peticion
    const formatUrl = this.baseUrl + url + id ? id : '';
    const formatBody = body ? JSON.stringify(body) : undefined;

    return fromFetch(formatUrl, {
      method: method,
      body: formatBody,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).pipe(
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
