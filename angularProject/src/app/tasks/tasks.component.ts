import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from "../dummy-tasks"
import { NewTaskComponent } from "./new-task/new-task.component";
import { type newTaskData } from "./task/task.model";
import { TaskService } from "./tasks.service";
@Component({
    selector:"app-tasks",
    standalone:true,
    templateUrl:"./tasks.component.html",
    styleUrl:"./tasks.component.css",
    imports:[TaskComponent,NewTaskComponent]
})

export class TasksComponent{
@Input({required:true}) userId!:string
@Input({required:true}) name!:string
isAddingTask = false
tasks = dummyTasks

constructor (private taskService : TaskService){

}
get selectedUserTasks(){
return this.taskService.getAllUserTasks(this.userId)
}

  onStartAddTask(){
    this.isAddingTask = true


  }
  onCloseAddTask(){
    this.isAddingTask = false
  }
  onAddTask(taskData:newTaskData){
     this.tasks.unshift({
        id:new Date().getTime().toString(),
        userId:this.userId,
        title:taskData.title,
        summary:taskData.summary,
        dueDate:taskData.dueDate
     })
     this.isAddingTask = false

  }
}