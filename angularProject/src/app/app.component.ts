import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  //import for other component inside this component
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 users = DUMMY_USERS
selectedUserId? : string
get selectedUser(){
  return  this.users.find((user)=> user.id === this.selectedUserId)!
}
 selectUser(id:string){
this.selectedUserId = id

 }
}
