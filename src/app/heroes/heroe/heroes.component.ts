import { Component } from '@angular/core';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
	name: string = 'Ironman';
	age: number = 45;

	get capitalizedName() {
		return this.name.toUpperCase();
	}

	getName(): string {
		return `${this.name} - ${this.age}`;
	}
}
