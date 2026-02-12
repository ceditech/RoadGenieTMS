import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'rg-stat-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="stat-card">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value" [style.color]="color">{{ value }}</div>
    </div>
  `,
    styles: [`
    .stat-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .stat-title {
      font-size: 0.6875rem;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.2;
    }
  `]
})
export class RgStatCardComponent {
    @Input() title: string = '';
    @Input() value: string = '';
    @Input() color?: string;
}
