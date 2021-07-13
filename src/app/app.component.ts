import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string = 'Contador App';
	total: number = 10;

	counter(number: number, option: '+' | '-' | '*' | '/'): void {
		switch (option) {
			case '+':
				this.total += number;
				break;
			case '-':
				this.total -= number;
				break;
			case '*':
				this.total *= number;
				break;
			case '/':
				this.total /= number;
				break;
			default:
				break;
		}
	}
}
