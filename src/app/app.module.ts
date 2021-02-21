import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { UserListComponent } from './user/user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatRippleModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatRippleModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
