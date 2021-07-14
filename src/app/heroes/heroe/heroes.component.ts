import { Component } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss'],
})
export class HeroComponent {
	name: string = 'Ironman';
	age: number = 45;

	get capitalizedName() {
		return this.name.toUpperCase();
	}

	getName(): string {
		return `${this.name} - ${this.age}`;
	}

	changeName(name: string): void {
		this.name = name;
	}

	changeAge(age: number): void {
		this.age = age;
	}
}
