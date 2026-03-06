import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'email'];
  dataSource = ELEMENT_DATA;
}

export interface students {
  id: number;
  name: string;
  birthDate: Date;
  email: string;
}

const ELEMENT_DATA: students[] = [
  { id: 1, name: 'Hydrogen', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 2, name: 'Helium', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 3, name: 'Lithium', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 4, name: 'Beryllium', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 5, name: 'Boron', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 6, name: 'Carbon', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 7, name: 'Nitrogen', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 8, name: 'Oxygen', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 9, name: 'Fluorine', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
  { id: 10, name: 'Neon', birthDate: new Date('2000-01-01'), email: 'test@email.com' },
];
