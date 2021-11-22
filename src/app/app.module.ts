import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';

import { ActivityComponent } from './activity/activity.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() { }

  message: string;

  receiveMessage($event) {
    this.message = $event
  }
}
