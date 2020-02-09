import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  public allUsers;

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.userService.listAllUsers().subscribe(allUsers =>  {
      this.allUsers = allUsers;
      console.log(this.allUsers)
    });
  }

}
