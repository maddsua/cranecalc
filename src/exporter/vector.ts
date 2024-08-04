import { downloadObject } from "./downloader";

export const exportVectorDrawing = (vector: string) => {

	const blob = new Blob([vector], { type: 'image/svg+xml' });
	const url = URL.createObjectURL(blob);

	downloadObject(url, `cranecalc-drawing-export-${new Date().getTime()}.svg`);

	URL.revokeObjectURL(url);
};
