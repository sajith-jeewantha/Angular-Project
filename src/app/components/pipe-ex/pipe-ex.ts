import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MyPipe } from '../../pipes/my-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
    JsonPipe,
    MyPipe,
  ],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {

  title = 'Angular Project';
  duration = "one month and 5 DAYS";
  date: Date = new Date();

  amount: number = 123456789.987;
  percent: number = 0.256;

  namelist: string[] = ['Angular', 'React', 'Vue', 'Node']

  person = {
    name: 'Sajith Jeewantha',
    age: 65,
    city: '',
    country: 'Sri Lanka',
    skills: {
      programming: ['Angular', 'React', 'Vue', 'Node', 'Java', 'Python', 'C#', 'PHP'],
      database: ['MySQL', 'MongoDB', 'PostgreSQL', 'OracleDB']
    }
  }
}
