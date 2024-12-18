import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { type newTaskData } from "./task/task.model";
@Injectable({providedIn:"root"})
export class TaskService{
private tasks = dummyTasks

constructor (){
    const tasks = localStorage.getItem("tasks")
    if(tasks){
        this.tasks = JSON.parse(tasks)
    }
}
 getAllUserTasks(userId:string){
     return this.tasks.filter((task) => task.userId === userId)
}
removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
   this.saveTasks()

}
addTask(taskData:newTaskData,userId:string){
 this.tasks.unshift({
       id:new Date().getTime().toString(),
       userId:userId,
       title:taskData.title,
       summary:taskData.summary,
       dueDate:taskData.dueDate
    })
 
    // this.saveTasks()
}
 private saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(this.tasks))
 }
}