import { Component, OnInit } from '@angular/core';
import {UserModel} from "../UserModel";
import {UserService} from "../user.service";
import {PageEvent} from "@angular/material/paginator";
import {Logger} from "../../Logger";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailsComponent} from "../user-details/user-details.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserModel[]=[];
  itemsNumber: number=0;
  pageSize: number=2;
  currentPage:number=1;
  constructor(private userService:UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getByPage(1);
  }

  private getByPage(pageNumber:number) {
    this.users=[];
    this.userService.all(pageNumber,this.pageSize).subscribe(usersResponse=>{
      this.users=usersResponse.data;
      this.itemsNumber=usersResponse.total;
    });
  }

  pageChange($event: PageEvent) {
    this.pageSize=$event.pageSize;
    this.currentPage=$event.pageIndex;
    this.getByPage($event.pageIndex);
  }

  viewUser(id: number) {
    const dialogRef = this.dialog.open(UserDetailsComponent,{data:{userId:id}});
  }
}
