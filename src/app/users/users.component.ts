import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 
  responseUsers: ResponseUsers | undefined;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => this.responseUsers = res);
  }

}
