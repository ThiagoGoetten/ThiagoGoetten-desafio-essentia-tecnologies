import { Component } from '@angular/core';
import { TarefasComponent } from "../tarefas/tarefas.component";

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TarefasComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

}
