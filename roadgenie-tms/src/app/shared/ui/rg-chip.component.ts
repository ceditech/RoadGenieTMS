import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'rg-chip',
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
      border: 1px solid #e2e8f0;
      background: white;
      color: #64748b;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
      
      &:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
      }
      
      &:focus-visible {
        outline: 2px solid #137fec;
        outline-offset: 2px;
      }
      
      &.active {
        background: #137fec;
        color: white;
        border-color: #137fec;
        
        &:hover {
          background: #1d8cf8;
        }
      }
    }
    
    .chip-label {
      line-height: 1;
    }
  `]
})
export class RgChipComponent {
    @Input() label: string = '';
    @Input() active: boolean = false;
    @Output() clicked = new EventEmitter<void>();
}
