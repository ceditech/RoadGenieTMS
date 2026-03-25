import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Load, LoadDetailsDrawerComponent } from './components/load-details-drawer/load-details-drawer.component';
import { PostLoadModalComponent } from './components/post-load-modal/post-load-modal.component';

@Component({
    selector: 'app-loads-page',
    standalone: true,
    imports: [CommonModule, FormsModule, LoadDetailsDrawerComponent, PostLoadModalComponent],
    templateUrl: './loads.page.html',
    styleUrls: ['./loads.page.scss']
})
export class LoadsPage {
    loads: Load[] = [
        {
            id: 'CH-77821-IL',
            pickup: { city: 'Chicago', state: 'IL', date: 'Oct 24', time: '08:00' },
            dropoff: { city: 'Atlanta', state: 'GA', date: 'Oct 25', time: '14:00' },
            miles: 715,
            specs: ['REEFER', '42K lbs'],
            weight: '42K lbs',
            broker: {
                name: 'C.H. Robinson',
                rating: 4.8,
                reviews: 120,
                team: 'Team Blue',
                contact: 'Sarah Jenkins',
                avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2wni4RwmH3AovAAxRRMk9GYSN0yE7QF_q8Ngh3SbIOWitaX5bcMVMTla51rG7ouPgSnvjzUmnvSCsSCzWCU9HrttyB3gRr7ZH2AnntUuANcOR79FSkLSHjTjhOrBN1DojYUMVWRLXFWbEtP9SV1zrknCemOjRxav-8hFdRl3Mqurgmb3QGofza7p6VFagnj0GYg9UyJ9OiA7o3G98MGRNOxWkEX4ZMrUb7DDynrGmLtM0pdgUKErXO90ggrT5iqgMlK6X9APXKrWv'
            },
            rate: 2850,
            rpm: 3.98,
            status: 'Available',
            driveTime: '22h 45m'
        },
        {
            id: 'TX-88291-AZ',
            pickup: { city: 'Dallas', state: 'TX', date: 'Oct 24', time: '06:00' },
            dropoff: { city: 'Phoenix', state: 'AZ', date: 'Oct 26', time: '10:00' },
            miles: 1065,
            specs: ['VAN', '18K lbs'],
            weight: '18K lbs',
            broker: { name: 'TQL Logistics', rating: 4.2, reviews: 850 },
            rate: 3200,
            rpm: 3.00,
            status: 'Booked'
        },
        {
            id: 'WA-11203-OR',
            pickup: { city: 'Seattle', state: 'WA', date: 'Oct 23', time: '09:00' },
            dropoff: { city: 'Portland', state: 'OR', date: 'Oct 23', time: '15:00' },
            miles: 174,
            specs: ['FLATBED', '35K lbs'],
            weight: '35K lbs',
            broker: { name: 'Landstar Ranger', rating: 4.5, reviews: 2100 },
            rate: 1150,
            rpm: 6.60,
            status: 'Completed'
        }
    ];

    selectedLoad: Load | null = null;
    drawerOpen = false;
    postModalOpen = false;
    searchQuery = '';
    activeTab: 'Inbox' | 'Archived' = 'Inbox';
    activeSourceFilters = ['DAT Power'];
    activeStatusFilter = 'Available';

    openDetails(load: Load) {
        this.postModalOpen = false;
        this.selectedLoad = load;
        this.drawerOpen = true;
    }

    closeDetails() {
        this.drawerOpen = false;
    }

    openPostLoad() {
        this.drawerOpen = false;
        this.postModalOpen = true;
    }

    closePostLoad() {
        this.postModalOpen = false;
    }

    toggleSourceFilter(filter: string) {
        if (this.activeSourceFilters.includes(filter)) {
            this.activeSourceFilters = this.activeSourceFilters.filter(f => f !== filter);
        } else {
            this.activeSourceFilters.push(filter);
        }
    }

    setStatusFilter(status: string) {
        this.activeStatusFilter = status;
    }

    clearFilters() {
        this.activeSourceFilters = [];
        this.activeStatusFilter = '';
        this.searchQuery = '';
    }
}
