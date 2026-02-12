import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { LoadingSkeletonComponent } from '../../../../shared/components/system-states/loading-skeleton.component';
import { EmptyStateComponent } from '../../../../shared/components/system-states/empty-state.component';

@Component({
    selector: 'app-loads-inbox',
    standalone: true,
    imports: [
        CommonModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        LoadingSkeletonComponent,
        EmptyStateComponent
    ],
    template: `
    <div class="loads-container">
      <header class="mb-6">
        <h1 class="text-2xl font-800 tracking-tight">Load Inbox</h1>
      </header>

      <!-- Search & Filters -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="relative flex-grow">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <mat-icon>search</mat-icon>
          </span>
          <input 
            type="text"
            class="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border-none rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary shadow-sm text-sm outline-none"
            placeholder="Search pickup, city, or broker..."
          />
        </div>
        <button mat-stroked-button class="md:w-auto h-12 rounded-xl">
          <mat-icon>filter_list</mat-icon>
          Filters
        </button>
      </div>

      <!-- Tabs -->
      <mat-tab-group class="custom-tabs" mat-stretch-tabs="false">
        <mat-tab label="NEW (12)">
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
            <ng-container *ngFor="let load of mockLoads">
              <div class="load-card bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary transition-colors cursor-pointer" (click)="openDetails(load)">
                <div class="p-4">
                  <div class="flex justify-between items-start mb-3">
                    <div class="flex items-center space-x-2">
                      <div class="broker-icon bg-primary/10 text-primary">{{ load.brokerShort }}</div>
                      <span class="text-sm font-bold text-slate-700 dark:text-slate-200">{{ load.brokerName }}</span>
                    </div>
                    <span class="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      {{ load.matchLevel }}
                    </span>
                  </div>

                  <div class="flex items-start space-x-4 mb-4">
                    <div class="route-line pt-1">
                      <div class="dot outline"></div>
                      <div class="line"></div>
                      <div class="dot solid"></div>
                    </div>
                    <div class="flex-1 space-y-3">
                      <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Pickup</p>
                        <p class="text-base font-bold leading-tight">{{ load.pickupCity }} <span class="text-slate-400 font-medium">{{ load.pickupZip }}</span></p>
                        <p class="text-xs text-slate-500">{{ load.pickupDate }} • {{ load.pickupTime }}</p>
                      </div>
                      <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Dropoff</p>
                        <p class="text-base font-bold leading-tight">{{ load.dropoffCity }} <span class="text-slate-400 font-medium">{{ load.dropoffZip }}</span></p>
                        <p class="text-xs text-slate-500">{{ load.dropoffDate }} • {{ load.dropoffTime }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-4 gap-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 mb-4">
                    <div class="text-center">
                      <p class="text-[10px] text-slate-500 font-medium uppercase">Rate</p>
                      <p class="text-sm font-bold text-primary">{{ load.rate | currency:'USD':'symbol':'1.0-0' }}</p>
                    </div>
                    <div class="text-center border-l border-slate-200 dark:border-slate-700">
                      <p class="text-[10px] text-slate-500 font-medium uppercase">RPM</p>
                      <p class="text-sm font-bold">{{ load.rpm | currency:'USD' }}</p>
                    </div>
                    <div class="text-center border-l border-slate-200 dark:border-slate-700">
                      <p class="text-[10px] text-slate-500 font-medium uppercase">Miles</p>
                      <p class="text-sm font-bold">{{ load.miles }}</p>
                    </div>
                    <div class="text-center border-l border-slate-200 dark:border-slate-700">
                      <p class="text-[10px] text-slate-500 font-medium uppercase">Equip</p>
                      <p class="text-[11px] font-bold leading-tight">{{ load.equipment }}</p>
                    </div>
                  </div>

                  <div class="flex gap-2">
                    <button mat-flat-button color="primary" class="flex-1 !h-12 !rounded-lg text-sm font-bold">Assign</button>
                    <button mat-stroked-button class="flex-1 !h-12 !rounded-lg text-sm font-bold">Negotiate</button>
                    <button class="w-12 h-12 bg-slate-100 dark:bg-slate-900 text-slate-400 flex items-center justify-center rounded-lg active:scale-95 transition-transform hover:bg-rose-50 hover:text-rose-500">
                      <mat-icon>close</mat-icon>
                    </button>
                  </div>
                </div>
              </div>
            </ng-container>
          </div>
        </mat-tab>
        <mat-tab label="NEGOTIATING (4)">
          <div class="p-8">
            <app-empty-state 
              icon="compare_arrows" 
              title="No active negotiations" 
              message="You haven't started any price negotiations yet.">
            </app-empty-state>
          </div>
        </mat-tab>
        <mat-tab label="ASSIGNED"></mat-tab>
        <mat-tab label="BOOKED"></mat-tab>
        <mat-tab label="SKIPPED"></mat-tab>
      </mat-tab-group>
    </div>
  `,
    styles: [`
    .loads-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .custom-tabs ::ng-deep .mat-mdc-tab-header {
      --mdc-tab-indicator-active-indicator-color: var(--primary);
      --mat-tab-header-active-label-text-color: var(--primary);
      margin-bottom: 1rem;
    }

    .broker-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.75rem;
    }

    .route-line {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .dot.outline {
      border: 2px solid var(--primary);
    }

    .dot.solid {
      background-color: var(--primary);
    }

    .line {
      width: 2px;
      height: 32px;
      background-color: var(--border);
      margin: 2px 0;
    }

    .load-card {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .load-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(var(--text-rgb), 0.05);
    }
  `]
})
export class LoadsInboxComponent {
    mockLoads = [
        {
            brokerName: 'C.H. Robinson',
            brokerShort: 'CR',
            matchLevel: 'High Match',
            pickupCity: 'Chicago, IL',
            pickupZip: '60601',
            pickupDate: 'Oct 24',
            pickupTime: '08:00 AM',
            dropoffCity: 'Dallas, TX',
            dropoffZip: '75201',
            dropoffDate: 'Oct 26',
            dropoffTime: '02:00 PM',
            rate: 2450,
            rpm: 2.54,
            miles: 964,
            equipment: "53' REEF"
        },
        {
            brokerName: 'J.B. Hunt',
            brokerShort: 'JB',
            matchLevel: 'New Load',
            pickupCity: 'Nashville, TN',
            pickupZip: '37201',
            pickupDate: 'Oct 24',
            pickupTime: '11:30 AM',
            dropoffCity: 'Atlanta, GA',
            dropoffZip: '30301',
            dropoffDate: 'Oct 25',
            dropoffTime: '07:00 AM',
            rate: 1100,
            rpm: 4.42,
            miles: 249,
            equipment: "53' VAN"
        }
    ];

    openDetails(load: any) {
        console.log('Opening details for:', load);
        // In a real app, this would open the drawer
    }
}
