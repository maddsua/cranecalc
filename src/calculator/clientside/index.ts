
import crane_type from '../../data/options/crane_type.json';
import class_group from '../../data/options/class_group.json';
import rail_type from '../../data/options/rail_type.json';
import climate_options from '../../data/options/climate_options.json';
import power_options from '../../data/options/power_options.json';
import cabin_type from '../../data/options/cabin_type.json';
import operating_mode from '../../data/options/operating_mode.json';

export interface CalculatorProps {
	type: keyof typeof crane_type,
	classg: keyof typeof class_group,
	power: keyof typeof power_options,
	climate: keyof typeof climate_options,
	railType: keyof typeof rail_type,
	cabinType: keyof typeof cabin_type,
	
	capacity: number,
	span: number,
	range: number,
	
	motorPrimarySpeed: number,
	motorPrimaryMode: keyof typeof operating_mode,

	motorBridgeSpeed: number,
	motorBridgeMode: keyof typeof operating_mode,

	motorTrollSpeed: number,
	motorTrollMode: keyof typeof operating_mode,
};

export interface ComputedResult {
	totalMass?: number;
	trolleyMass?: number;
	wheelPressure?: number;
	primaryMotorPower?: number;
	bridgeMotorPower?: number;
	trolleyMotorPower?: number;
};

export const calculate = (props: CalculatorProps): ComputedResult | Error => {

	console.log(props);

	return {

	};
};
