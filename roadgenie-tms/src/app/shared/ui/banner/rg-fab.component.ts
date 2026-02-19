import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'rg-banner',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <div class="banner" [class]="type" *ngIf="show">
      <mat-icon>{{ icon }}</mat-icon>
      <span class="message">{{ message }}</span>
      <button mat-icon-button (click)="close.emit()">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    .banner {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-radius: 8px;
      gap: 12px;
      margin-bottom: 16px;
      &.success { background: #d1fae5; color: #065f46; }
      &.error { background: #fee2e2; color: #991b1b; }
      .message { flex: 1; font-weight: 500; }
    }
  `]
})
export class BannerComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Input() icon: string = 'check_circle';
  @Input() show: boolean = true;
  @Output() close = new EventEmitter<void>();
}
