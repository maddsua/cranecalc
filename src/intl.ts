
export const locales = {
	uk: 'Укр',
	en: "Eng"
};

export const intlText = (data: Record<string, string>, lang: string): string => {

	if (data[lang]) {
		return data[lang];
	}

	return Object.entries(data).at(0)?.at(1) || '[no content]';
};

export const intlOptions = (data: Record<string, Record<string, string>>, lang: string): Record<string, string> => {

	const result: Record<string, string> = {};

	for (const key in data) {
		result[key] = intlText(data[key], lang);
	}

	return result;
};
