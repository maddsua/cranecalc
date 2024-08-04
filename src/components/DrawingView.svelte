<script lang="ts">

import { onMount } from "svelte";

import appIntl from '../data/app-intl.json';
import { intlText } from "../intl";
import { uiLanguage as lang } from "./uiState";

import ActionButton from "./form/ActionButton.svelte";

import classGroupOpts from '../data/options/class_group.json';
import climateOptss from '../data/options/climate_options.json';
import railTypeOpts from '../data/options/rail_type.json';
import type { CalculatorProps, ComputedResult } from "../calculator/functional";
import { exportRasterDrawing } from "../exporter/canvas";
import { exportVectorDrawing } from "../exporter/vector";

export let template: string;
export let data: Partial<CalculatorProps & ComputedResult> = {};

let content: string | null = null;
let errorText: string | null = null;

let tempalteDoc: Document | null = null;
let scrollRef: HTMLElement;

const renderTemplate = async () => {

	if (!tempalteDoc) {
		return;
	}

	const mergedData: Record<string, string | number | undefined> = Object.assign({}, data, {
		cls_g: data.cls_g ? classGroupOpts[data.cls_g] : undefined,
		clmt_t: data.clmt_t ? climateOptss[data.clmt_t] : undefined,
		rail_t: data.rail_t ? railTypeOpts[data.rail_t] : undefined,
	});

	const refs = Array.from(tempalteDoc.querySelectorAll('[id]')).filter(item => item.getAttribute('id')?.startsWith('__ref:'));

	for (const item of refs) {

		const idAttrib = item.getAttribute('id');
		const refID = idAttrib!.slice(idAttrib!.indexOf(':') + 1);

		const value = mergedData[refID];
		if (!value) {
			item.textContent = 'null';
			continue;
		}

		item.textContent = typeof value === 'string' ? value : value.toFixed(2);
	}

	//	fix for broken view box in some browsers
	const svgElement = tempalteDoc.querySelector('svg');
	if (svgElement?.getAttribute('width') === '100%' || svgElement?.getAttribute('height') === '100%') {
		const viewbox = svgElement.viewBox.baseVal;
		svgElement.setAttribute('width', `${viewbox.width}`);
		svgElement.setAttribute('height', `${viewbox.height}`);
	}

	content = tempalteDoc.documentElement.outerHTML;
};

$: data, renderTemplate()

onMount(async () => {

	const svgDocument = await fetch(`/templates/drawings/${template}.svg`).then(res => res.text()).catch(() => null);
	if (!svgDocument?.length) {
		errorText = 'Failed to fetch drawing templte';
		return;
	}

	try {
		tempalteDoc = new DOMParser().parseFromString(svgDocument, 'image/svg+xml');
	} catch (error) {
		errorText = 'Failed to parse template';
		console.error(`${errorText}:`, error);
		return;
	}

	await renderTemplate();

	setTimeout(() => {
		scrollRef.scrollIntoView({ behavior: 'smooth' });
	}, 10);

});

const handleSvgDownload = () => content ? exportVectorDrawing(content) : null;

const handlePngDownload = () => content ? exportRasterDrawing(content, 'png') : null;

</script>

<div class="drawing-view" bind:this={scrollRef}>

	{#if content && !errorText}

		{@html content}

		<div class="controls">

			<ActionButton disabled={!content} on:click={handlePngDownload}>
				{intlText(appIntl.drawing.actions.downloadRaster, $lang)}
			</ActionButton>

			<ActionButton disabled={!content} on:click={handleSvgDownload}>
				{intlText(appIntl.drawing.actions.downloadVector, $lang)}
			</ActionButton>

		</div>

	{:else if errorText}
		<div class="error-message">
			{errorText}
		</div>
	{/if}

</div>

<style lang="scss">

	.drawing-view {
		display: grid;
		gap: 1rem;
		background-color: white;
		padding: 0.5rem;
		color: black;
	
		:global(svg) {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	.error-message {
		color: red;
		font-weight: 600;
	}

	.controls {
		border-top: 1px solid #464646;
		display: flex;
		flex-flow: row nowrap;
		justify-content: end;
		gap: 1rem;
		padding: 0.5rem;
	}

</style>
