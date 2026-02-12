import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'rg-bottom-nav',
    standalone: true,
    imports: [CommonModule],
    template: `
    <nav class="bottom-nav" role="navigation" aria-label="Main navigation">
      <button
        *ngFor="let tab of tabs"
        type="button"
        class="nav-tab"
        [class.active]="activeTab === tab.id"
        (click)="tabChange.emit(tab.id)"
        [attr.aria-label]="tab.label"
        [attr.aria-current]="activeTab === tab.id ? 'page' : null"
      >
        <svg class="tab-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" [innerHTML]="tab.icon"></svg>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </nav>
  `,
    styles: [`
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 64px;
      background: white;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 100;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    }
    
    .nav-tab {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px;
      background: none;
      border: none;
      cursor: pointer;
      transition: color 0.2s;
      color: #94a3b8;
      
      &:hover {
        color: #64748b;
      }
      
      &:focus-visible {
        outline: 2px solid #137fec;
        outline-offset: -2px;
      }
      
      &.active {
        color: #137fec;
      }
    }
    
    .tab-icon {
      width: 24px;
      height: 24px;
    }
    
    .tab-label {
      font-size: 0.6875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  `]
})
export class RgBottomNavComponent {
    @Input() activeTab: string = 'loads';
    @Output() tabChange = new EventEmitter<string>();

    tabs = [
        {
            id: 'loads',
            label: 'LOADS',
            icon: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>'
        },
        {
            id: 'fleet',
            label: 'FLEET',
            icon: '<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>'
        },
        {
            id: 'chat',
            label: 'CHAT',
            icon: '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>'
        },
        {
            id: 'setup',
            label: 'SETUP',
            icon: '<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>'
        }
    ];
}
