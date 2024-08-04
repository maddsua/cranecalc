
export const downloadObject = (data: string, name: string, ext?: string) => {

	if (!data.length) {
		throw new Error('Cannot download empty data url');
	}

	const link = document.createElement('a');
	link.download = [name, ext].filter(item => item?.length).join('.');
	link.href = data;
	link.target = '_blank';

	link.click();
	link.remove();
};
