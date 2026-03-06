import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { lastValueFrom, Observable, take, takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private readonly baseApiUrl = 'https://69ab5839e051e9456fa3d3b2.mockapi.io/api/v1';

  constructor(private http: HttpClient) { }

  getStudents$(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + "/student");
  }

}
