import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'Adi',
        lastName: 'Ksh',
        email: 'adi@gmail.com',
        isActive: false,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Aditya',
        lastName: 'Kshettri',
        email: 'adi@gmail.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true
      }
    ];
  }

  getUsers() : User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
