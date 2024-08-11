import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule]
  
})
export class AppComponent {

  
  public items = ['item1', 'item2', 'item3', 'item4'];
  
  }
