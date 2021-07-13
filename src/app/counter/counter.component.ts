import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
	@Input() title: string = 'Contador App';
	total: number = 10;
	base: number = 5;

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
