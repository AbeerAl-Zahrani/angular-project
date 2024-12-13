import { Component, computed, EventEmitter, Input,input, Output } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent { 
  @Input({required:true}) user!:User
  @Input({required:true}) selected!:boolean
  //Input decorator.
//   @Input({required:true}) id!:string
// @Input({required:true}) avatar!:string
// @Input({required:true}) name!:string
@Output() select = new EventEmitter<string>()
//inputs with signals
//input & output are special function
// avatar = input.required<string>()
// name = input.required<string>()
// select = output<string>()
get imagePath(){
  return 'assets/users/' + this.user.avatar
}
// imagePath = computed(() => {
//     return 'assets/users/' + this.avatar()
// })
onSelectUser(){
  this.select.emit(this.user.id)
}
}


// export class UserComponent { 
//   //signal is an object that stores a value (any type of value)
//   //angular manages subscriptions to the signal to get notified about value changes
//   //when a change occurs, angular is then able to update the part of the UI that needs updating 
// public selectedUser = signal(DUMMY_USERS[randomIndex])
// //
// imagePath = computed(() => {
//     return 'assets/users/' + this.selectedUser().avatar
// })
// // get imagePath(){
// //   return 'assets/users/' + this.selectedUser().avatar
// // }
// onSelectUser(){
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//   //by using set method we change the value
//  this.selectedUser.set(DUMMY_USERS[randomIndex])
  
// }
// }