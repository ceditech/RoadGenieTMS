import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-load-details-drawer',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
    template: `
    <div class="drawer-content h-full flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl">
      <header class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
        <div>
          <h2 class="text-xl font-800 tracking-tight">Load Details</h2>
          <p class="text-xs font-bold text-primary uppercase tracking-widest mt-1">ID: #LD-29481</p>
        </div>
        <button mat-icon-button (click)="close.emit()" aria-label="Close details">
          <mat-icon>close</mat-icon>
        </button>
      </header>

      <div class="flex-grow overflow-y-auto p-6 space-y-8">
        <!-- Route Section -->
        <section class="space-y-4">
          <div class="flex items-start gap-4">
            <div class="flex flex-col items-center pt-1">
              <div class="w-3 h-3 rounded-full border-2 border-primary"></div>
              <div class="w-0.5 h-12 bg-slate-200 dark:bg-slate-700 my-1"></div>
              <div class="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div class="flex-1 space-y-6">
              <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pickup</p>
                <h3 class="text-lg font-bold leading-tight">Chicago, IL 60601</h3>
                <p class="text-sm text-slate-500">Global Logistics Hub • Oct 24, 08:00 AM</p>
              </div>
              <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Dropoff</p>
                <h3 class="text-lg font-bold leading-tight">Dallas, TX 75201</h3>
                <p class="text-sm text-slate-500">Lone Star Distribution • Oct 26, 02:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        <mat-divider></mat-divider>

        <!-- Broker & Contact -->
        <section class="space-y-4">
          <h4 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">Broker Information</h4>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl flex items-center gap-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-800">CR</div>
            <div class="flex-1">
              <p class="text-base font-bold">C.H. Robinson</p>
              <p class="text-xs text-slate-500">Agent: Sarah Miller (+1 555-0123)</p>
            </div>
            <button mat-icon-button color="primary">
              <mat-icon>phone</mat-icon>
            </button>
          </div>
        </section>

        <!-- Financials -->
        <section class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
            <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total Rate</p>
            <p class="text-2xl font-800 text-primary">$2,450</p>
          </div>
          <div class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
            <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">RPM</p>
            <p class="text-2xl font-800">$2.54</p>
          </div>
        </section>

        <!-- Details -->
        <section class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-slate-500">Distance</span>
            <span class="font-bold">964 miles</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-slate-500">Equipment</span>
            <span class="font-bold">53' Reefer</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-slate-500">Weight</span>
            <span class="font-bold">42,000 lbs</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-slate-500">Commodity</span>
            <span class="font-bold">Frozen Poultry</span>
          </div>
        </section>
      </div>

      <footer class="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 space-y-3">
        <button mat-flat-button color="primary" class="w-full !h-14 !text-base !font-bold !rounded-xl shadow-lg shadow-primary/20">
          Book This Load
        </button>
        <button mat-stroked-button class="w-full !h-14 !text-base !font-bold !rounded-xl !border-slate-300 dark:!border-slate-700">
          Counter Offer
        </button>
      </footer>
    </div>
  `,
    styles: [`
    :host {
      display: block;
      height: 100%;
      width: 450px;
    }

    @media (max-width: 600px) {
      :host {
        width: 100vw;
      }
    }
  `]
})
export class LoadDetailsDrawerComponent {
    @Input() load: any;
    @Output() close = new EventEmitter<void>();
}
