import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestUsersService } from './../../../apis/jsonplace/rest-user.service';

@Component({
  selector: 'app-user-screen',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css'],
})
export class UserScreenComponent implements OnInit {
  constructor(private _restUser: RestUsersService) {}

  getUser(id: number) {
    this._restUser.getUserId(id).subscribe((user) => {
      console.log('Usuario:' + id, user);
    });
  }

  getAllUsers() {
    this._restUser.getAllUsers().subscribe((users) => {
      console.log('Todos los usuarios', users);
    });
  }

  postUser() {
    const user = {
      id: 0,
      name: 'Joselito',
      username: 'El cantaor',
      email: 'joselito_cantaor@email.es',
      phone: '+34668597845',
      website: 'https://ww',
      address: {
        street: 'madrid',
        suite: 'madrid',
        city: 'madrid',
        zipcode: 'madrid',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      company: {
        bs: 'harness real-time e-markets',
        catchPhrase: 'Multi-layered client-server neural-net',
        name: 'Romaguera-Crona',
      },
    };
    this._restUser.postUser(user).subscribe((user) => {
      console.log('Usuario Creado:', user);
    });
  }

  deleteUser() {
    this._restUser.deleteUser(1).subscribe((user) => {
      console.log('Usuario Borrado', user);
    });
  }

  // Catalogo
  getUserAlbum() {
    this._restUser.getUserAlbum(1).subscribe((Albums) => {
      console.log('Album de Usuario 1', Albums);
    });
  }
  getUserTodo() {
    this._restUser.getUserTodo(1).subscribe((Albums) => {
      console.log('Todo de Usuario 1', Albums);
    });
  }
  getUserPosts() {
    this._restUser.getUserPosts(1).subscribe((Albums) => {
      console.log('POSTS de Usuario 1', Albums);
    });
  }
  getUserComments() {
    this._restUser.getUserComments(1).subscribe((Albums) => {
      console.log('COMMENTS de Usuario 1', Albums);
    });
  }

  ngOnInit() {}
}
