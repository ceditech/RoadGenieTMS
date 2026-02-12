import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loading-skeleton',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div [class]="cssClass" [style.width]="width" [style.height]="height">
      <div class="skeleton-shimmer"></div>
    </div>
  `,
    styles: [`
    :host {
      display: inline-block;
      width: 100%;
    }
    
    .skeleton-shimmer {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(var(--text-rgb), 0.05) 0%,
        rgba(var(--text-rgb), 0.1) 50%,
        rgba(var(--text-rgb), 0.05) 100%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite linear;
      border-radius: inherit;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class LoadingSkeletonComponent {
    @Input() width = '100%';
    @Input() height = '1rem';
    @Input() cssClass = 'rounded-md';
}
