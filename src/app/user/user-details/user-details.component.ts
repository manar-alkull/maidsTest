import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserModel} from "../UserModel";
import {UserService} from "../user.service";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:UserModel;

/*  constructor(private service:UserService,
              @Inject(MAT_DIALOG_DATA) public  data:{userId: number} ) {  }*/

  constructor(private service:UserService, private route: ActivatedRoute,public location: Location) {  }

  ngOnInit(): void {
    const id:number= Number(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe(userResponse=> {
        this.user = userResponse.data;
      }
    );
  }

}
