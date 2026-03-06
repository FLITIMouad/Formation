import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';
import { BehaviorSubject, lastValueFrom, Observable, take } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  students: Student[] = [];
  
  constructor(private readonly studentService: StudentService) { }
  
  async ngOnInit() {
    this.students = await lastValueFrom(this.studentService.getStudents$());
  }
}
