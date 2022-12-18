import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink: string = 'hi';
  data: any = [
    { name: 'John', age: 30, job: 'Designer', employed: true },
    { name: 'Jenny', age: 26, job: 'Engineer', employed: false },
    { name: 'Peter', age: 32, job: 'Developer', employed: true },
  ];
  headers: any = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
