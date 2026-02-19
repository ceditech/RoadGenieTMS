import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rg-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skeleton-container" [style.height]="height" [style.width]="width">
      <div class="skeleton-animate"></div>
    </div>
  `,
  styles: [`
    .skeleton-container {
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
    .skeleton-animate {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
      animation: skeleton-load 1.5s infinite;
    }
    @keyframes skeleton-load {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `]
})
export class SkeletonComponent {
  @Input() height: string = '20px';
  @Input() width: string = '100%';
}
