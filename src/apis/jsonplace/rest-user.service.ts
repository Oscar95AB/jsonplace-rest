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
    user = { ...user, id: 0 };
    return this.comunActions<DetailUser>(Urls.users, 'POST', user);
  }
  putUser(user: DetailUser): Observable<DetailUser> {
    return this.comunActions<DetailUser>(Urls.users, 'PUT', user);
  }
  deleteUser(id: number): Observable<DetailUser> {
    return this.comunActions<DetailUser>(Urls.users, 'DELETE', id);
  }

  /* Catálogos de usuario */
  
  getUserAlbum(userId: number): Observable<DetailUser> {
    const url = Urls.users + userId + Urls.albums;
    return this.comunActions<DetailUser>(url, 'GET');
  }
  getUserTodo(userId: number) {
    const url = Urls.users + userId + Urls.todos;
    return this.comunActions<DetailUser>(url, 'GET');
  }
  getUserPosts(userId: number) {
    const url = Urls.users + userId + Urls.posts;
    return this.comunActions<DetailUser>(url, 'GET');
  }
  getUserComments(userId: number) {
    const url = Urls.users + userId + Urls.comments
    return this.comunActions<Comment[]>(url, 'GET');
  }
}
