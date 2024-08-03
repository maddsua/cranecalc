
import crane_type from '../../data/options/crane_type.json';
import class_group from '../../data/options/class_group.json';
import rail_type from '../../data/options/rail_type.json';
import climate_options from '../../data/options/climate_options.json';
import power_options from '../../data/options/power_options.json';
import cabin_type from '../../data/options/cabin_type.json';
import operating_mode from '../../data/options/operating_mode.json';

import formulas, { type FormulaPreset } from './formulas';

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
	qgl: number;

	//	crane span, value
	l: number;

	//	crane lifting height, value
	lh: number;

	//	lifting motor speed, value
	vpod: number;
	
	//	lifting motor op mode, option
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

	//	trolley mass
	gt: number;

	//	wheel pressue
	pk: number;

	//	lifting motor power
	npod: number;

	//	crane motor power
	nkr: number;

	//	trolley motor power
	ntel: number;
};

const constantMap: Record<keyof typeof class_group, FormulaPreset> = {
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

	const preset = constantMap[props.cls_g] || 'cat_a';

	const gk = formulas.gk[preset](props.l, props.qgl);
	const gt = formulas.gt[preset](props.l);
	const pk = formulas.pk(gk, gk, props.qgl);
	const npod = formulas.npod(gk, gt, 1, 1, 1);
	const nkr = formulas.nkr(props.qgl, gk, props.vkr, 1, 1, 1);
	const ntel = formulas.ntel(gt, props.qgl, props.vtel, 1, 1, 1);

	return { gk, gt, pk, npod, nkr, ntel };
};
