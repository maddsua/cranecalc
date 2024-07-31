
import crane_type from '../../data/options/crane_type.json';
import class_group from '../../data/options/class_group.json';
import rail_type from '../../data/options/rail_type.json';
import climate_options from '../../data/options/climate_options.json';
import power_options from '../../data/options/power_options.json';
import cabin_type from '../../data/options/cabin_type.json';
import operating_mode from '../../data/options/operating_mode.json';
import constantsSet from '../../data/constants.json';

export interface CalculatorProps {

	//	crane type, option
	kr_t: keyof typeof crane_type;
	
	//	crane class, option
	cls_g: keyof typeof class_group;
	
	//	power type, option
	pwrt_t: keyof typeof power_options;
	
	//	climate type, option
	clmt_t: keyof typeof climate_options;
	
	//	crane rail type, option
	rail_t: keyof typeof rail_type;
	
	//	cabin type, option
	cabin_t: keyof typeof cabin_type;
	
	//	load capacity, value
	gql: number;

	//	crane span, value
	l: number;

	//	crane lifitng range, value
	lr: number;

	//	hoisting motor speed, value
	vpod: number;
	
	//	hoisting motor op mode, option
	pod_mod: keyof typeof operating_mode;
	
	//	crane motor speed, value
	vkr: number;
	
	//	crane motor op mode, option
	kr_mod: keyof typeof operating_mode;
	
	//	trolley motor speed, value
	vtel: number;

	//	trolley motor op mode, option
	tel_mod: keyof typeof operating_mode;
};

export interface ComputedResult {
	
	//	crane total mass
	gk: number;

	//	trolely mass
	gt: number;

	//	wheel pressue
	pk: number;

	//	hoisting motor power
	npod: number;

	//	crane motor power
	nkr: number;

	//	trolley motor power
	ntel: number;
};

const constantMap: Record<keyof typeof class_group, keyof typeof constantsSet> = {
	'a1': 'cat_a',
	'a2': 'cat_a',
	'a3': 'cat_a',
	'a4': 'cat_b',
	'a5': 'cat_b',
	'a6': 'cat_c',
	'a7': 'cat_c',
	'a8': 'cat_c',
};

export const calculate = (props: CalculatorProps): ComputedResult | Error => {

	const k1 = 1;
	const k2 = 1;
	const k3 = 1;

	const cs = constantsSet[constantMap[props.cls_g] || 'cat_c'];

	const gk = ((cs.b1 + cs.b2 * props.gql) + (cs.b3 * props.l + cs.b4 * Math.pow(props.gql, 2))) +
		((cs.b5 * props.gql * props.l) + (cs.b6 * Math.pow(props.l, 2))) +
		(cs.b7 * (Math.pow(props.gql, 3)) + (cs.b8 * Math.pow(props.gql, 2)) * props.l) +
		(cs.b9 * props.gql * Math.pow(props.l, 2) + cs.b10 * Math.pow(props.l, 3));

	const gt = (cs.c1 * props.gql) + cs.c2;

	const pk = 10 * (((gk - gt - 2) / 4) + 1.3 + ((gt + props.gql) * 0.425));

	const npod = (props.gql * 10 * props.vpod * k1 * k2 * k3) / 0.9;

	const nkr = (0.6 * ((props.gql + gk) * (0.16 + (1.2 * 0.15)) * props.vkr * k1 * k2 * k3)) / (0.9 * 1.6);

	const ntel = ((gt + props.gql) * 10 * props.vtel * 0.016 * k1 * k2 * k3) / 0.9;

	return { gk, gt, pk, npod, nkr, ntel };
};
