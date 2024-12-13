import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { CardComponent } from "../shared/card/card.component";
import { SharedModule } from "../shared/shared.module";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations:[TasksComponent,NewTaskComponent,TaskComponent],
    exports:[TasksComponent],
    imports:[SharedModule,DatePipe,FormsModule]
})
export class TasksModule{}