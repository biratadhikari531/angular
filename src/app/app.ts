import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from "./components/user/user";
import { DataBinding } from "./components/data-binding/data-binding";
import { SignalComponent } from "./components/signal/signal";
import {  ControlFlow } from "./components/controlflow/controlflow";
import { Attribute } from "./components/attribute/attribute";

// RouterOutlet, Admin, User, DataBinding, SignalComponent,ControlFlow 

@Component({
  selector: 'app-root',
  imports: [Attribute],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
