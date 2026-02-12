import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Load {
    id: string;
    rate: number;
    rpm: number;
    pickup: {
        city: string;
        state: string;
        date: string;
        time: string;
    };
    dropoff: {
        city: string;
        state: string;
        date: string;
        time: string;
    };
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
    <div
      class="load-card"
      role="button"
      tabindex="0"
      (click)="selected.emit(load)"
      (keydown.enter)="selected.emit(load)"
      (keydown.space)="$event.preventDefault(); selected.emit(load)"
      [attr.aria-label]="getAriaLabel()"
    >
      <!-- Rate and RPM -->
      <div class="load-header">
        <div class="rate-info">
          <span class="rate">\${{ load.rate.toLocaleString() }}</span>
          <span class="rpm">(\${{ load.rpm.toFixed(2) }}/mi)</span>
        </div>
        <div class="status-pill" [class]="'status-' + load.status.toLowerCase()">
          {{ load.status }}
        </div>
      </div>

      <!-- Route -->
      <div class="route">
        <div class="location pickup">
          <svg class="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="3" fill="currentColor"/>
          </svg>
          <div class="location-details">
            <div class="city">{{ load.pickup.city }}, {{ load.pickup.state }}</div>
            <div class="datetime">{{ load.pickup.date }} • {{ load.pickup.time }}</div>
          </div>
        </div>

        <div class="location dropoff">
          <svg class="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
          <div class="location-details">
            <div class="city">{{ load.dropoff.city }}, {{ load.dropoff.state }}</div>
            <div class="datetime">{{ load.dropoff.date }} • {{ load.dropoff.time }}</div>
          </div>
        </div>
      </div>

      <!-- Metadata -->
      <div class="metadata">
        <div class="meta-item">
          <span class="meta-label">MILES</span>
          <span class="meta-value">{{ load.miles }} mi</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">EQUIPMENT</span>
          <span class="meta-value">{{ load.equipment }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">WEIGHT</span>
          <span class="meta-value">{{ load.weight }}</span>
        </div>
        <div class="meta-item broker">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M2 2h10v2H2V2zm0 4h10v2H2V6zm0 4h10v2H2v-2z"/>
          </svg>
          <span class="meta-value">{{ load.broker }}</span>
        </div>
      </div>

      <!-- Chevron -->
      <svg class="chevron" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 5l5 5-5 5V5z"/>
      </svg>
    </div>
  `,
    styles: [`
    .load-card {
      position: relative;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.25rem;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        border-color: #cbd5e1;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      
      &:focus-visible {
        outline: 2px solid #137fec;
        outline-offset: 2px;
        border-color: #137fec;
      }
    }
    
    .load-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    
    .rate-info {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
    }
    
    .rate {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
    }
    
    .rpm {
      font-size: 0.875rem;
      color: #64748b;
    }
    
    .status-pill {
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      
      &.status-booked {
        background: #d1fae5;
        color: #065f46;
      }
      
      &.status-available {
        background: #dbeafe;
        color: #1e40af;
      }
      
      &.status-draft {
        background: #fef3c7;
        color: #92400e;
      }
    }
    
    .route {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    
    .location {
      display: flex;
      gap: 0.75rem;
    }
    
    .location-icon {
      flex-shrink: 0;
      margin-top: 2px;
      color: #64748b;
    }
    
    .location-details {
      flex: 1;
      min-width: 0;
    }
    
    .city {
      font-size: 0.9375rem;
      font-weight: 600;
      color: #0f172a;
    }
    
    .datetime {
      font-size: 0.8125rem;
      color: #64748b;
      margin-top: 2px;
    }
    
    .metadata {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #e2e8f0;
    }
    
    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      
      &.broker {
        flex-direction: row;
        align-items: center;
        gap: 6px;
        
        svg {
          color: #94a3b8;
        }
      }
    }
    
    .meta-label {
      font-size: 0.6875rem;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .meta-value {
      font-size: 0.8125rem;
      color: #475569;
      font-weight: 500;
    }
    
    .chevron {
      position: absolute;
      right: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      color: #cbd5e1;
      transition: transform 0.2s;
    }
    
    .load-card:hover .chevron {
      transform: translateY(-50%) translateX(4px);
      color: #94a3b8;
    }
  `]
})
export class RgLoadCardComponent {
    @Input() load!: Load;
    @Output() selected = new EventEmitter<Load>();

    getAriaLabel(): string {
        return `Load from ${this.load.pickup.city}, ${this.load.pickup.state} to ${this.load.dropoff.city}, ${this.load.dropoff.state}, $${this.load.rate.toLocaleString()}, ${this.load.status}`;
    }
}
