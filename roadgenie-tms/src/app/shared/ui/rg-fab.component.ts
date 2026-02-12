import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'rg-fab',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button
      type="button"
      class="fab"
      (click)="clicked.emit()"
      aria-label="Add new load"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </button>
  `,
    styles: [`
    .fab {
      position: fixed;
      bottom: 48px;
      left: 50%;
      transform: translateX(-50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #137fec;
      border: none;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 16px rgba(19, 127, 236, 0.4);
      transition: all 0.2s;
      z-index: 101;
      
      &:hover {
        background: #1d8cf8;
        transform: translateX(-50%) scale(1.05);
        box-shadow: 0 12px 24px rgba(19, 127, 236, 0.5);
      }
      
      &:active {
        transform: translateX(-50%) scale(0.95);
      }
      
      &:focus-visible {
        outline: 3px solid rgba(19, 127, 236, 0.5);
        outline-offset: 2px;
      }
    }
  `]
})
export class RgFabComponent {
    @Output() clicked = new EventEmitter<void>();
}
