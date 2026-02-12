import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-empty-state',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-slate-800 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
      <div class="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mb-4">
        <span class="material-icons-round text-3xl text-slate-400">{{ icon }}</span>
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">{{ title }}</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto">{{ message }}</p>
      <ng-content></ng-content>
    </div>
  `,
    styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class EmptyStateComponent {
    @Input() icon = 'inbox';
    @Input() title = 'No data found';
    @Input() message = 'Try adjusting your filters or search terms.';
}
