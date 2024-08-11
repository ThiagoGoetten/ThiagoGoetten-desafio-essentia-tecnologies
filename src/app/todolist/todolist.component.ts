import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  standalone: true,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  public tarefas="";
  public items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];

addTarefa() {

  this.items.push(this.tarefas);

}
}
