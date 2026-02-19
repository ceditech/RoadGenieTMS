import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FilterChipsComponent } from '../../../shared/ui/filter-chips/rg-chip.component';
import { StatusPillComponent } from '../../../shared/ui/status-pill/rg-stat-card.component';
import { LoadCardComponent, Load } from '../../../shared/ui/load-card/rg-load-card.component';
import { BottomNavComponent } from '../../../layout/bottom-nav/rg-bottom-nav.component';
import { BannerComponent } from '../../../shared/ui/banner/rg-fab.component';
import { SkeletonComponent } from '../../../shared/ui/skeleton/loading-skeleton.component';
import { EmptyStateComponent } from '../../../shared/ui/empty-state/empty-state.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FilterChipsComponent,
    StatusPillComponent,
    LoadCardComponent,
    BottomNavComponent,
    BannerComponent,
    SkeletonComponent,
    EmptyStateComponent,
  ],
  templateUrl: './loads-inbox.component.html',
  styleUrls: ['./loads-inbox.component.scss'],
})
export class InboxPage {
  activeTab = 'loads';
  activeFilter = 'All Loads';
  filterOptions = ['All Loads', 'Active', 'Pending', 'Flatbed', 'High RPM'];

  mockLoads: Load[] = [
    {
      id: '1', rate: 2400, rpm: 3.20,
      pickup: { city: 'Chicago', state: 'IL', date: 'Oct 24', time: '08:00 AM' },
      dropoff: { city: 'Atlanta', state: 'GA', date: 'Oct 25', time: '04:00 PM' },
      miles: 750, equipment: 'Dry Van', weight: '32k lbs', broker: 'Echo Global Logistics', status: 'BOOKED'
    },
    {
      id: '2', rate: 1850, rpm: 2.85,
      pickup: { city: 'Houston', state: 'TX', date: 'Oct 26', time: '07:00 AM' },
      dropoff: { city: 'Denver', state: 'CO', date: 'Oct 27', time: '11:00 AM' },
      miles: 650, equipment: 'Flatbed', weight: '45k lbs', broker: 'TQL Brokerage', status: 'AVAILABLE'
    }
  ];

  onTabChange(tabId: string) { this.activeTab = tabId; }
  onFilterChange(filter: string) { this.activeFilter = filter; }
  onLoadSelected(load: Load) { console.log('Load selected:', load); }
}
