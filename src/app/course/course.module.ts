import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

import { CourseComponent } from './course.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { CourseGradesComponent } from './course-grades/course-grades.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    DataViewModule,
    TabViewModule,
    TableModule
  ],
  declarations: [
    CourseComponent,
    CourseOverviewComponent,
    CourseGradesComponent
  ]
})
export class CourseModule { }
