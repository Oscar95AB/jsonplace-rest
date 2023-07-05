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
  deleteUser(id: number): Observable<DetailUser> {
    return this.comunActions<DetailUser>(Urls.users, 'DELETE', id);
  }

  // /* Catálogos de usuario */
  getUserAlbum(id: number): Observable<DetailUser> {
    return this.comunActions<DetailUser>(Urls.users + id + Urls.albums, 'GET');
  }
  getUserTodo(id: number) {
    return this.comunActions<DetailUser>(Urls.users + id + Urls.todos, 'GET');
  }
  getUserPosts(id: number) {
    return this.comunActions<DetailUser>(Urls.users + id + Urls.posts, 'GET');
  }
  getUserComments(id: number) {
    return this.comunActions<Comment[]>(Urls.users + id + Urls.posts, 'GET');
  }
}
