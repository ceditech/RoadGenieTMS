import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rg-status-pill',
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
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .stat-title {
      font-size: 0.6875rem;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text);
      line-height: 1.2;
    }
  `]
})
export class StatusPillComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() color?: string;
}
