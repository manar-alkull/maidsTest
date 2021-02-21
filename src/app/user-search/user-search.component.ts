import { Component, OnInit } from '@angular/core';
import {UserModel} from "../user/UserModel";
import {UserService} from "../user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  users: UserModel[]=[];
  showSpinner: boolean=true;
  showNoUser: boolean=false;


  constructor(private userService:UserService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(r=>{
      this.searchIt();
    });
    this.searchIt();

  }

  searchIt(){
    this.showSpinner=true;
    const id:number= Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.get(id).subscribe(userResponse=> {
      this.users=[];
      this.users.push(userResponse.data);
      this.showSpinner=false;
    },error=>{
      this.showSpinner=false;
      this.showNoUser=true;
      this.users=[];
    },()=>{
    });
  }
}
