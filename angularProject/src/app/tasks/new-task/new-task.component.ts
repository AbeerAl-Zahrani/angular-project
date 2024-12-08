import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  //custom event
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<newTaskData>()
  enteredTitle = ""
  enteredSummary = ""
  enteredDate = ""
onCancel(){
this.cancel.emit()
}
onSubmit(){
this.add.emit({
  title:this.enteredTitle,
  summary:this.enteredSummary,
  dueDate:this.enteredDate
})
}
}
