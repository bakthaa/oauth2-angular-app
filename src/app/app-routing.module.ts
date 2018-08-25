import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppGuard } from './app.guard';
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './admin/admin.component';
import { UserAddComponent } from './admin/user-add.component';
import { UserListComponent } from './admin/user-list.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AppGuard],
  //   children: [
  //     { path: '', component: UserListComponent , outlet: 'user'},
  //     // { path: '', component: UserListComponent , outlet: 'client'},
  //     { path: 'list', component: UserListComponent, outlet: 'user' },
  //     { path: 'add', component: UserAddComponent, outlet: 'user'}
  // ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
