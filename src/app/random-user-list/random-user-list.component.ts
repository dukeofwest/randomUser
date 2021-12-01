import { Component, OnInit } from '@angular/core';
import { RandomUserListService } from '../random-user-list.service';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.css']
})
export class RandomUserListComponent implements OnInit {

  tableList: any = [];

  constructor(
    private _randomUserListService : RandomUserListService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._randomUserListService.getUsersApi().subscribe(
      (res) => (this.tableList = res)
    )
  }
}
