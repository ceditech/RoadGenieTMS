import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Load {
  id: string;
  rate: number;
  rpm: number;
  pickup: { city: string; state: string; date: string; time: string; };
  dropoff: { city: string; state: string; date: string; time: string; };
  miles: number;
  equipment: string;
  weight: string;
  broker: string;
  status: 'BOOKED' | 'AVAILABLE' | 'DRAFT';
  highRPM?: boolean;
}

@Component({
  selector: 'rg-load-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="load-card" (click)="selected.emit(load)">
      <div class="load-header">
        <div class="rate-info">
          <span class="rate">\${{ load.rate.toLocaleString() }}</span>
          <span class="rpm">(\${{ load.rpm.toFixed(2) }}/mi)</span>
        </div>
        <div class="status-pill" [class]="'status-' + load.status.toLowerCase()">
          {{ load.status }}
        </div>
      </div>
      <div class="route">
        <div class="location">
          <div class="city">{{ load.pickup.city }}, {{ load.pickup.state }}</div>
          <div class="datetime">{{ load.pickup.date }} • {{ load.pickup.time }}</div>
        </div>
        <div class="location">
          <div class="city">{{ load.dropoff.city }}, {{ load.dropoff.state }}</div>
          <div class="datetime">{{ load.dropoff.date }} • {{ load.dropoff.time }}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .load-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem;
      cursor: pointer;
      margin-bottom: 1rem;
    }
    .rate { font-size: 1.25rem; font-weight: 700; color: var(--text); }
    .rpm { font-size: 0.875rem; color: var(--muted); margin-left: 0.5rem; }
    .status-pill { float: right; padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; }
    .status-booked { background: rgba(16, 185, 129, 0.1); color: #10b981; }
    .status-available { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
    .status-draft { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
    .city { font-weight: 600; color: var(--text); }
    .datetime { font-size: 0.8125rem; color: var(--muted); }
  `]
})
export class LoadCardComponent {
  @Input() load!: Load;
  @Output() selected = new EventEmitter<Load>();
}
