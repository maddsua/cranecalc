
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
