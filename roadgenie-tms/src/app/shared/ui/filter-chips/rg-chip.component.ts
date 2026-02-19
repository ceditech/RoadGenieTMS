import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rg-filter-chips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="chip"
      [class.active]="active"
      (click)="clicked.emit()"
      [attr.aria-pressed]="active"
    >
      <span class="chip-label">{{ label }}</span>
    </button>
  `,
  styles: [`
    .chip {
      display: inline-flex;
      align-items: center;
      height: 32px;
      padding: 0 16px;
      border-radius: 16px;
      border: 1px solid var(--border);
      background: var(--surface);
      color: var(--muted);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
      
      &:hover {
        background: rgba(var(--primary-rgb), 0.05);
        border-color: var(--primary);
      }
      
      &.active {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
      }
    }
    
    .chip-label { line-height: 1; }
  `]
})
export class FilterChipsComponent {
  @Input() label: string = '';
  @Input() active: boolean = false;
  @Output() clicked = new EventEmitter<void>();
}
