import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
})
export class WorkoutListComponent {
  readonly workouts = [
    { date: 'Sáb, 17 out', distance: '6,2', duration: '34 min', pace: '5:29' },
    { date: 'Sex, 16 out', distance: '4,0', duration: '52 min', pace: '13:00' },
    { date: 'Qua, 14 out', distance: '8,2', duration: '46 min', pace: '5:36' },
  ];
}
