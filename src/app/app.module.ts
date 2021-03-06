import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserAddComponent } from './admin/user-add.component';
import { UserListComponent } from './admin/user-list.component';
import { ClientAddComponent } from './admin/client-add.component';
import { ClientListComponent } from './admin/client-list.component';
import { NumberOnlyDirective } from './directive/number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    UserAddComponent,
    UserListComponent,
    ClientAddComponent,
    ClientListComponent,
    NumberOnlyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
