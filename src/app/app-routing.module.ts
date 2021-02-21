import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {UserSearchComponent} from "./user-search/user-search.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  {path: 'user/:id', component: UserDetailsComponent},
  {path: 'search/:id', component: UserSearchComponent},
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
