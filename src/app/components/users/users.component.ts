import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  loaded: boolean = false;
  showExtended: boolean = true;
  enableAdd: boolean = true;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.loaded = true;
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Invalid form');
    }
    else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }

}


