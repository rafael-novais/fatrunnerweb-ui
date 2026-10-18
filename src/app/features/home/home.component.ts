import { Component } from '@angular/core';
import { TrainingVolumeSummaryComponent } from '../../shared/components/training-volume-summary/training-volume-summary.component';
import { WorkoutListComponent } from '../../shared/components/workout-list/workout-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TrainingVolumeSummaryComponent, WorkoutListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
