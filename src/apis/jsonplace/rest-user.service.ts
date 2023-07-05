import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigUrls, Urls } from './config-urls';
import { DetailUser, User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class RestUsersService extends ConfigUrls {
  constructor() {
    super();
  }

  getAllUsers(): Observable<User[]> {
    return this.comunActions<User[]>(Urls.users, 'GET');
  }

  getUserId(id: number): Observable<DetailUser> {
    return this.comunActions<DetailUser>(Urls.users, 'GET', id);
  }

  postUser(user: DetailUser): Observable<DetailUser> {
    return this.comunActions<DetailUser>(Urls.users, 'POST', 0, user);
  }

  /*
  {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
  */

  // /* Catálogos de usuario */
  getUserAlbum(id: number): Observable<DetailUser> {
    return this.comunActions<DetailUser>(Urls.users + id + Urls.albums, 'GET');
  }
  // getUserTodo(id: number) {
  //   return this.comunGet<DetailUser>(Urls.users + id + Urls.todos);
  // }
  // getUserPòsts(id: number) {
  //   return this.comunGet<DetailUser>(Urls.users + id + Urls.posts);
  // }
  // getUserComments(id: number) {
  //   return this.comunGet<Comment[]>(Urls.users + id + Urls.posts);
  // }
}
