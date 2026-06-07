import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {


  constructor() {
    // property initialization
    console.log('admin component created');
  }
  ngAfterViewInit(): void {
    console.log("view init")
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // api call
    // subscription
    console.log("ng init")
  }

  ngOnDestroy(): void {
    // cleanup
    console.log("ng destroy")
  }
}
