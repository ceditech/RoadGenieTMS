import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'rg-empty-state',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="empty-state">
      <mat-icon class="icon">{{ icon }}</mat-icon>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  `,
  styles: [`
    .empty-state {
      padding: 48px;
      text-align: center;
      color: var(--muted);
      .icon { font-size: 48px; width: 48px; height: 48px; margin-bottom: 16px; }
      h3 { color: var(--text); margin-bottom: 8px; }
    }
  `]
})
export class EmptyStateComponent {
  @Input() icon: string = 'inbox';
  @Input() title: string = 'No Data Found';
  @Input() message: string = 'Start by adding some information.';
}
