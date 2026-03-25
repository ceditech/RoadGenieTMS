import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Load {
    id: string;
    pickup: { city: string; state: string; date: string; time: string };
    dropoff: { city: string; state: string; date: string; time: string };
    miles: number;
    specs: string[];
    weight: string;
    broker: { name: string; rating: number; reviews: number; team?: string; contact?: string; avatar?: string };
    rate: number;
    rpm: number;
    status: 'Available' | 'Booked' | 'Completed';
    driveTime?: string;
}

@Component({
    selector: 'app-load-details-drawer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './load-details-drawer.component.html',
    styles: [`
        :host {
            display: contents;
        }
    `]
})
export class LoadDetailsDrawerComponent {
    @Input() open = false;
    @Input() load: Load | null = null;
    @Output() close = new EventEmitter<void>();

    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
        if (this.open) {
            this.onClose();
        }
    }

    onClose() {
        this.close.emit();
    }
}
