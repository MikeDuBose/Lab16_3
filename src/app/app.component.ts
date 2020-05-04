import { Component } from '@angular/core';
import { Todo } from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task:string = '';
  taskId:number = 7;
  taskEdit:string = '';
  taskSearch:string = '';

  taskArray:Todo[] = [
    {
      taskId: 1,
      task: 'Crossbreed flowers in Animal Crossing', 
      beingEdited: false,
      completed: false,
    },
    {
      taskId: 2,
      task:'Catch all the rare fish in Animal Crossing', 
      beingEdited: false,
      completed: false,
    },
    {
      taskId: 3,
      task:'Pay off Mr. Nook', 
      beingEdited: false,
      completed: false,
    },
    {
      taskId: 4,
      task:'Stop playing Animal Crossing', 
      beingEdited: false,
      completed: false,
    },
    {
      taskId: 5,
      task:'Get on a SICK dev team', 
      beingEdited: false,
      completed: false,
    },
    {
      taskId: 6,
      task:'Do Lab 17-1', 
      beingEdited: false,
      completed: false,
    },
  ]
  //returns all tasks that are not completed
  remainingTasks = function():number{
      return this.taskArray.filter((tasks: { completed: any; }) => !tasks.completed).length;
  }
  //Checks to see if there is at minimum one task complete.
  minOne = function():boolean{
    return this.taskArray.filter((tasks: { completed: any; }) => tasks.completed).length > 0;
  }
  //If tasks are completed, this "filter" function filters out any tasks that have been completed.
  clearCompleted = function():void{
    this.taskArray = this.taskArray.filter((tasks: { completed: any; }) => !tasks.completed);
  }
  //Marks the task as complete
  completeTask = function():boolean{
    return true;
  }
  //Removes task at index
  removeTask = function(index:number):void{
    this.taskArray.splice(index, 1)
  }
  //Is the task being currently edited?  This helps show views based on their edited/editing status
  editingTask = function():boolean{
    return true;
  }
  //This was rough -- I couldn't figure out how to pass the string from the forms for a long time - finally figured it out
  editTask = function(t:Todo, newName:string){
    t.task = newName;
  }
  //Adds a new task to the array
  addTask = function(){
    //creates a new task with the todo params defined in the interface
    this.taskArray.push({
      taskId:this.taskId,
      task:this.task, 
      completed: false})
      this.task='';
      //increment the ID
      this.taskId++;
  }

  
}