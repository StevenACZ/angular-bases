import { Component } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent {
	heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
	removedHero: string = '';

	removeHero(): void {
		if (this.heroes.length > 0) {
			this.removedHero = this.heroes.pop() || '';
			console.log(this.removedHero);
		}
	}
}
