import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  //custom event
  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter<void>()
  @Output() add = new EventEmitter<newTaskData>()
  enteredTitle = ""
  enteredSummary = ""
  enteredDate = ""
  private tasksService = inject(TaskService)
onClose(){
this.close.emit()
}
onSubmit(){
this.tasksService.addTask({
  title:this.enteredTitle,
  summary:this.enteredSummary,
  dueDate:this.enteredDate
},this.userId)
this.close.emit()
}

}
