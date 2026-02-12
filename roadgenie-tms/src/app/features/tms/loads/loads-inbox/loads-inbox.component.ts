import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RgChipComponent } from '../../../../shared/ui/rg-chip.component';
import { RgStatCardComponent } from '../../../../shared/ui/rg-stat-card.component';
import { RgLoadCardComponent, Load } from '../../../../shared/ui/rg-load-card.component';
import { RgBottomNavComponent } from '../../../../shared/ui/rg-bottom-nav.component';
import { RgFabComponent } from '../../../../shared/ui/rg-fab.component';
import { LoadingSkeletonComponent } from '../../../../shared/components/system-states/loading-skeleton.component';
import { EmptyStateComponent } from '../../../../shared/components/system-states/empty-state.component';

@Component({
  selector: 'app-loads-inbox',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RgChipComponent,
    RgStatCardComponent,
    RgLoadCardComponent,
    RgBottomNavComponent,
    RgFabComponent,
    LoadingSkeletonComponent,
    EmptyStateComponent,
  ],
  templateUrl: './loads-inbox.component.html',
  styleUrls: ['./loads-inbox.component.scss'],
})
export class LoadsInboxComponent {
  activeTab = 'loads';
  activeFilter = 'All Loads';

  filterOptions = ['All Loads', 'Active', 'Pending', 'Flatbed', 'High RPM'];

  mockLoads: Load[] = [
    {
      id: '1',
      rate: 2400,
      rpm: 3.20,
      pickup: {
        city: 'Chicago',
        state: 'IL',
        date: 'Oct 24',
        time: '08:00 AM'
      },
      dropoff: {
        city: 'Atlanta',
        state: 'GA',
        date: 'Oct 25',
        time: '04:00 PM'
      },
      miles: 750,
      equipment: 'Dry Van',
      weight: '32k lbs',
      broker: 'Echo Global Logistics',
      status: 'BOOKED'
    },
    {
      id: '2',
      rate: 1850,
      rpm: 2.85,
      pickup: {
        city: 'Houston',
        state: 'TX',
        date: 'Oct 26',
        time: '07:00 AM'
      },
      dropoff: {
        city: 'Denver',
        state: 'CO',
        date: 'Oct 27',
        time: '11:00 AM'
      },
      miles: 650,
      equipment: 'Flatbed',
      weight: '45k lbs',
      broker: 'TQL Brokerage',
      status: 'AVAILABLE'
    },
    {
      id: '3',
      rate: 3100,
      rpm: 3.45,
      pickup: {
        city: 'Los Angeles',
        state: 'CA',
        date: 'Oct 28',
        time: '10:00 AM'
      },
      dropoff: {
        city: 'Seattle',
        state: 'WA',
        date: 'Oct 30',
        time: '08:00 AM'
      },
      miles: 900,
      equipment: 'Reefer',
      weight: '42k lbs',
      broker: 'C.H. Robinson',
      status: 'DRAFT',
      highRPM: true
    }
  ];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  onFilterChange(filter: string) {
    this.activeFilter = filter;
    // Mock filtering logic visualization if needed
    console.log('Filter changed to:', filter);
  }

  onLoadSelected(load: Load) {
    console.log('Load selected:', load);
    alert('Load details drawer will open in Phase 2.');
  }

  onFabClick() {
    console.log('FAB clicked');
    alert('Create new load dialog');
  }

  onSearchClick() {
    console.log('Search clicked');
    alert('Search modal/input toggle');
  }
}

