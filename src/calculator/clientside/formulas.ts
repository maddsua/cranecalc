
export type FormulaPreset = 'cat_a' | 'cat_b' | 'cat_c';

/**
 * Trolley motor power
 * @param gt - Trolley mass, T
 * @param gk - Crane mass, T
 * @param qgl - Rated load capacity, T
 * @param vtel - Trolley speed, m/s
 * @param vkr - Bridge speed, m/s
 * @param vpod - Lifting speed, m/s
 * @param l - Bridge span, m
 * @param k1 - Correction constaint 1
 * @param k2 - Correction constaint 2
 * @param k3 - Correction constaint 3
 */
const formulaSet = {

	gk: {

		cat_a: (l: number, qgl: number) =>
			25.07574 - 2.11566 * l - 0.59932 * qgl + 0.11677 * l**2 + 0.03906 * l * qgl + 0.05020 * qgl**2 - 
			0.00141 * l**3 - 0.00039 * l**2 * qgl - 0.00006 * l * qgl**2 - 0.00064 * qgl**3,

		cat_b: (l: number, qgl: number) =>
			17.93732 - 0.57469 * l - 0.54205 * qgl + 0.03347 * l**2 + 0.03501 * l * qgl + 0.05168 * qgl**2 - 
			0.00004 * l**3 - 0.00026 * l**2 * qgl - 0.00013 * l * qgl**2 - 0.00066 * qgl**3,
		
		cat_c: (l: number, qgl: number) =>
			10.92655 + 0.73223 * l - 0.49426 * qgl - 0.03526 * l**2 + 0.04196 * l * qgl + 0.04879 * qgl**2 + 
			0.00109 * l**3 - 0.00026 * l**2 * qgl - 0.00029 * l * qgl**2 - 0.00059 * qgl**3,
	},

	gt: {

		cat_a: (qgl: number) =>
			-1.9930722 + 9.2128426 * (1 - Math.exp(-0.1052043 * qgl)),

		cat_b: (qgl: number) =>
			-1.3624646 + 8.1975492 * (1 - Math.exp(-0.1222201 * qgl)),
		
		cat_c: (qgl: number) =>
			-5.6862023 + 12.2748028 * (1 - Math.exp(-0.2633511 * qgl)),
	},

	pk: (gk: number, gt: number, qgl: number) =>
		10 * (((gk - gt - 2) / 4) + 1.3 + ((gt + qgl) * 0.425)),

	npod: (qgl: number, vpod: number, k1: number, k2: number, k3: number) =>
		((qgl * 10 * vpod * k1 * k2 * k3) / 0.9),

	nkr: (qgl: number, gk: number, vkr: number, k1: number, k2: number, k3: number) =>
		(0.6 * ((qgl + gk) * (0.16 + (1.2 * 0.15)) * vkr * k1 * k2 * k3)) / (0.9 * 1.6),

	ntel: (gt: number, qgl: number, vtel: number, k1: number, k2: number, k3: number) =>
		((gt + qgl) * 10 * vtel * 0.016 * k1 * k2 * k3) / 0.9,
};

export default formulaSet;
