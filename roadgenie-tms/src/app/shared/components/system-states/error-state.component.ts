import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-error-state',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col items-center justify-center p-8 text-center bg-rose-50 dark:bg-rose-900/10 rounded-xl border border-rose-200 dark:border-rose-800">
      <div class="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-4">
        <span class="material-icons-round text-3xl text-rose-500">error_outline</span>
      </div>
      <h3 class="text-lg font-bold text-rose-900 dark:text-rose-200 mb-2">{{ title }}</h3>
      <p class="text-sm text-rose-700/70 dark:text-rose-400/70 max-w-xs mx-auto mb-6">{{ message }}</p>
      <button 
        *ngIf="showRetry"
        (click)="retry.emit()"
        class="flex items-center gap-2 px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-bold transition-all active:scale-95"
      >
        <span class="material-icons-round text-lg">refresh</span>
        Retry
      </button>
    </div>
  `,
    styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ErrorStateComponent {
    @Input() title = 'Something went wrong';
    @Input() message = 'We encountered an error while loading the data. Please try again.';
    @Input() showRetry = true;
    @Output() retry = new EventEmitter<void>();
}
