import { writable } from 'svelte/store';
import type { CalculatorProps } from '../calculator/clientside';

export const inputState = writable<Partial<CalculatorProps>>({
	capacity: 40,
	span: 25,
	range: 20,
	motorTrollSpeed: 2,
	motorBridgeSpeed: 1.5,
	motorPrimarySpeed: 1,
});
