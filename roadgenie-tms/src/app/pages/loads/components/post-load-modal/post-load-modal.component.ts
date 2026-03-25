import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-post-load-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './post-load-modal.component.html',
    styles: [`
        :host {
            display: contents;
        }
    `]
})
export class PostLoadModalComponent {
    @Input() open = false;
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
