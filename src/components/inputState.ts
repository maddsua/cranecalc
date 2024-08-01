import { writable } from 'svelte/store';
import type { CalculatorProps } from '../calculator/clientside';

export const inputState = writable<Partial<CalculatorProps>>({
	qgl: 40,
	l: 25,
	lh: 20,
	vtel: 2,
	vkr: 1.5,
	vpod: 0.1,
});
