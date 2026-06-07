import { JsonPipe } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  imports: [JsonPipe, FormsModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
  courseName = signal('Angular Fundamentals');
  courseDuration = signal<string>("2 months");
  cityList = signal<string[]>(['Bangalore', 'Chennai', 'Hyderabad', 'Pune']);
  stateList: Signal<string[]> = signal<string[]>(['Karnataka', 'Tamil Nadu', 'Telangana', 'Maharashtra']);
  studentObj: Signal<any> = signal<any>({
    name: 'John Doe',
    age: 25,
    course: 'Angular Fundamentals'
  });


  fName = signal("");
  lName = signal("");
  mName = signal("");
  // fullName = signal<string>(`${this.fName()} ${this.lName()} ${this.mName()}`);


  fullName = computed(() => `${this.fName()} ${this.lName()} ${this.mName()}`);

  empobj: WritableSignal<any> = signal<any>({
    name: 'Jane Smith',
    age: 30,
    department: 'Engineering'
  });
  cityname: string = "";
  constructor() {
    effect(() => {
      console.log('Course Name:', this.courseName());
      console.log('Course Duration:', this.courseDuration());
      console.log('City List:', this.cityList());
      console.log('State List:', this.stateList());
      console.log('first Name:', this.fName());
      console.log('last Name:', this.lName());
      console.log('middle Name:', this.mName());
    });
    const course_name = this.courseName();
    const course_duration = this.courseDuration();
    const cities = this.cityList();
    const states = this.stateList();
  }

  changeCourseName() {
    this.courseName.set('Angular Advanced');
  }


  changeCityList() {
    this.cityList.update(old => [...old, 'Delhi']);
  }


  addCity() {
    this.cityList.update((old: string[]) => [...old, this.cityname]);
  }

  cahanegEmpId(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.empobj.update((emp: any) => ({ ...emp, empId: value }));

  }


  chnageFormValue(jeyName: string, evenet: any) {
    const value = evenet.target.value;
    this.empobj.update((emp: any) => ({ ...emp, [jeyName]: value }));
  }

  updateFName(event: any) {
    this.fName.set(event.target.value);
  }
  updateLName(event: any) {
    this.lName.set(event.target.value);
  }
  updateMName(event: any) {
    this.mName.set(event.target.value);
  }
}

