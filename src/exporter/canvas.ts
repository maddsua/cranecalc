import paperSizes from '../data/paperSizes.json';
import { downloadObject } from './downloader';

type OutputFormat = 'png' | 'jpg' | 'webp';

export const exportRasterDrawing = async (vector: string, outputFormat: OutputFormat) => {

	const canvas = document.createElement('canvas');

	canvas.width = paperSizes.dpi_100.a3.x;
	canvas.height = paperSizes.dpi_100.a3.y;

	const blob = new Blob([vector], {type:'image/svg+xml;charset=utf-8'});
	const blobURL = URL.createObjectURL(blob);

	const image = new Image();

	const imageLoaded = new Promise<void>((resolve, reject) => {
		image.onload = () => resolve();
		image.onerror = (err) => reject(err);
	});

	image.src = blobURL;

	await imageLoaded;

	const context = canvas.getContext('2d');
	if (!context) {
		throw new Error('Failed to get drawing context');
	}

	context.fillStyle = 'white';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.drawImage(image, 0, 0, canvas.width, canvas.height);

	const exportData = exportCanvas(canvas, outputFormat);
	downloadObject(exportData, `cranecalc-drawing-export-${new Date().getTime()}`, outputFormat);

	image.remove();
	URL.revokeObjectURL(blobURL);
	canvas.remove();
};

const exportCanvas = (canvas: HTMLCanvasElement, format: OutputFormat): string => {

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

	return canvas.toDataURL(exportType);
};
