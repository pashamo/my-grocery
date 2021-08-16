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
        let data;
        if (title === 'recipe') {
            data = 'RECIPE';
        } else if (title === 'shoppingList') {
            data = 'SHOPPING_LIST';
        }
        this.selected.emit(data);
    }
}