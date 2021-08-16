import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: ['']
})

export class HeaderComponent {
    @Output() selected = new EventEmitter<string>();
    collapsed = true;

    onSelect(title: string) {
        let data = title === 'recipe' ? 'RECIPE' : 'SHOPPING_LIST';
        this.selected.emit(data);
    }
}