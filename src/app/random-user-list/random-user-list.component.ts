import { Component, OnInit } from '@angular/core';
import { RandomUserListService } from '../random-user-list.service';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.css'],
})
export class RandomUserListComponent implements OnInit {
  userList: any[] = [];

  constructor(private _randomUserListService: RandomUserListService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    
    this._randomUserListService.getUsersApi().subscribe((res: any) => {
      for (let [key, value] of Object.entries(res)) {
        this.userList.push(value);
      }    
    });
  }
}
