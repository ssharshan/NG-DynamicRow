import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  persons = [{"name":"P1","age":23}];
  constructor() { }

  ngOnInit() {
  }

  addPerson(): void{
    this.persons.push({"name":"","age":0});
  }
}
