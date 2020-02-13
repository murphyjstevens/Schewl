import { Component, OnInit } from '@angular/core';

export interface Student {
  grade: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-course-grades',
  templateUrl: './course-grades.component.html',
  styleUrls: ['./course-grades.component.scss']
})
export class CourseGradesComponent implements OnInit {
  students: Student[];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.students = [
      {
        grade: 50,
        firstName: 'Johnny',
        lastName: 'Fale'
      },
      {
        grade: 100,
        firstName: 'Reita',
        lastName: 'Trihard'
      }
    ];
    this.cols = [
        { field: 'grade', header: 'Grade' },
        { field: 'firstName', header: 'First Name' },
        { field: 'lastName', header: 'Last Name' }
    ];
  }

}
