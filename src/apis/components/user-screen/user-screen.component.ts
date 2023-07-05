import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestUsersService } from 'src/apis/jsonplace/rest-user.service';

@Component({
  selector: 'app-user-screen',
  imports: [CommonModule],
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css'],
})
export class UserScreenComponent implements OnInit {
  constructor() {}
  prueba() {
    // this._restUser.getUserId(1).subscribe((x) => {
    //   console.log(x);
    // });
  }

  ngOnInit() {}
}
