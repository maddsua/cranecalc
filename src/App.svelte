<script lang="ts">

import { onMount } from "svelte";

import Group from "./components/layout/Group.svelte";
import ResultsView from "./components/ResultsView.svelte";
import CalculatorInputs from "./components/CalculatorInputs.svelte";
import SubmitButton from "./components/form/SubmitButton.svelte";
import ErrorBlock from "./components/ErrorBlock.svelte";
import UiHeader from "./components/UiHeader.svelte";
import DrawingView from "./components/DrawingView.svelte";
import { calculate, type CalculatorProps, type ComputedResult } from './calculator/functional/index';
import { inputState } from "./components/inputState";

import appIntl from './data/app-intl.json';
import { intlText } from "./intl";
import { uiLanguage } from "./components/uiState";

let computedData: ComputedResult | null = null;
let formRef: HTMLFormElement;
let displayError: string | null = null;

let drawingData: Partial<CalculatorProps & ComputedResult> | null = null;

const handleCalcualte = () => {

	const result = calculate($inputState as Required<typeof $inputState>);
	if (result instanceof Error) {
		displayError = `Calculation failed: ${result.message}`;
		computedData = null;
		return;
	}

	computedData = result;
};

const handleRefresh = () => {

	if (!formRef.checkValidity()) {
		return;
	}

	drawingData = null;
	displayError = null;

	handleCalcualte();
};

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	displayError = null;
	handleCalcualte();
};

const handleDraw = () => {
	drawingData = Object.assign({}, computedData, $inputState);
};

onMount(() => handleRefresh());

</script>

<UiHeader />

<main>

	<form on:change={handleRefresh} on:submit={handleSubmit} bind:this={formRef}>
		
		<CalculatorInputs />

	</form>

	{#if displayError}
		<ErrorBlock>
			{displayError}
		</ErrorBlock>
	{/if}

	<Group>
	
		<svelte:fragment slot="header">
			{intlText(appIntl.results.header, $uiLanguage)}
		</svelte:fragment>

		<ResultsView data={computedData} />

	</Group>

	<Group>
	
		<svelte:fragment slot="header">
			{intlText(appIntl.controls.header, $uiLanguage)}
		</svelte:fragment>

		<div class="controls">

			<SubmitButton on:click={handleRefresh}>
				{intlText(appIntl.controls.actions.recalc, $uiLanguage)}
			</SubmitButton>

			<SubmitButton on:click={handleDraw} disabled={!!drawingData}>
				{intlText(appIntl.controls.actions.plot, $uiLanguage)}
			</SubmitButton>

			<SubmitButton disabled={true}>
				{intlText(appIntl.controls.actions.export, $uiLanguage)}
			</SubmitButton>

		</div>

	</Group>

	{#if drawingData}
		<DrawingView template="drawing.generic" data={drawingData} />
	{/if}

</main>

<style lang="scss">

	@import "./breakpoints.scss";

	main {
		display: grid;
		gap: 2rem;
		padding: 4rem 2rem;
		width: 65rem;
		max-width: 100%;
		margin: 0 auto;

		@include screen-s {
			padding: 2rem 1rem;
		}
	}

	.controls {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;
	}

</style>
