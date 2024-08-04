import paperSizes from '../data/paperSizes.json';
import { downloadObject } from './downloader';

type OutputFormat = 'png' | 'jpg' | 'webp';

export const exportRasterDrawing = async (vector: string, outputFormat: OutputFormat) => {

	const canvas = document.createElement('canvas');

	const { x: sizeX, y: sizeY } = paperSizes.dpi_400;

	canvas.width = sizeX;
	canvas.height = sizeY;

	const blob = new Blob([vector], { type: 'image/svg+xml;charset=utf-8' });
	const blobURL = URL.createObjectURL(blob);

	const image = new Image();

	const imageLoaded = new Promise<void>((resolve, reject) => {
		image.onload = () => resolve();
		image.onerror = (err) => reject(err);
	});

	image.src = blobURL;

	await imageLoaded;

	const context = canvas.getContext('2d', { alpha: true });
	if (!context) {
		throw new Error('Failed to get drawing context');
	}

	context.fillStyle = 'white';
	context.fillRect(0, 0, sizeX, sizeY);
	context.drawImage(image, 0, 0, sizeX, sizeY);

	const exportDataUrl = await exportCanvas(canvas, outputFormat);
	downloadObject(exportDataUrl, `cranecalc-drawing-export-${new Date().getTime()}`, outputFormat);

	image.remove();
	URL.revokeObjectURL(blobURL);
	URL.revokeObjectURL(exportDataUrl);
	canvas.remove();
};

const exportCanvas = async (canvas: HTMLCanvasElement, format: OutputFormat): Promise<string> => {

	let exportType: string | undefined = undefined;

	switch (format) {

		case 'jpg': {
			exportType = 'image/jpg';
		} break;

		case 'webp': {
			exportType = 'image/webp';
		} break;

		default: break;
	}

	//	using .toBlob() + URL.createObjectURL, as recommended by MDN:
	//	https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

	const exportBlob = await new Promise<Blob>((resolve, reject) =>
		canvas.toBlob((blob) => blob ? resolve(blob) : reject('Empty canvas blob'), exportType));

	return URL.createObjectURL(exportBlob);
};
