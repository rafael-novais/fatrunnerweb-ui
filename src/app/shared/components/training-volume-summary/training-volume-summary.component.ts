import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-training-volume-summary',
  standalone: true,
  templateUrl: './training-volume-summary.component.html',
  styleUrl: './training-volume-summary.component.css',
})
export class TrainingVolumeSummaryComponent {
  @ViewChild('slides') private slides?: ElementRef<HTMLElement>;
  readonly page = signal(0);

  readonly summaries = [
    { label: 'Esta semana', value: '18,4', goal: 'Meta: 25 km · faltam 6,6 km', progress: 74 },
    { label: 'Este mês', value: '48,2', goal: 'Meta: 100 km · faltam 52,8 km', progress: 47 },
    { label: 'Este ano', value: '807,2', goal: 'Meta: 1.200 km · faltam 392,8 km', progress: 67 },
  ];

  get summary() {
    return this.summaries[this.page()];
  }

  onScroll(): void {
    const element = this.slides?.nativeElement;
    if (!element) return;
    this.page.set(Math.max(0, Math.min(2, Math.round(element.scrollLeft / element.clientWidth))));
  }
}
