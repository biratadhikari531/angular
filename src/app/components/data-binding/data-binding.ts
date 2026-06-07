import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // string ,number, boolean, date, array, object
  // courseName: string = "Angular 20 Hindi";
  courseName = signal<String>("Angular 20 Hindi") ;
  isActive: boolean = true;
  currentDate: Date = new Date();
  rollNo: number = 123;
  minTestLength: number = 5;
  spanClassName: string = "secondary";
  constructor() {
    console.log(this.courseName)
    // this.courseName = "dddddddd"
    // console.log(this.courseName)

    setTimeout(() => {
      this.courseName.set( "dfbvsdfbsfbdfbdfbdfbdf");
      this.courseName.update((value) => value + " - Updated");
      console.log(this.courseName)
    }, 10000);
  }

  onButtonClick() {
    console.log("Button clicked!");
    alert("Button clicked!");             
  }

  onOptionChange(event: Event) {
  // const selectElement = event.target as HTMLSelectElement;
  console.log((event.target as HTMLSelectElement).value);
        alert("Option changed!");
  }
}
