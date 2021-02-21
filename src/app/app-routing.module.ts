import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  {path: 'user/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
