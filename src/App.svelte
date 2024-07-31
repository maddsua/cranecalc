<script lang="ts">

import { onMount } from "svelte";

import Group from "./components/layout/Group.svelte";
import ResultsView from "./components/ResultsView.svelte";
import FormContent from "./components/FormContent.svelte";
import SubmitButton from "./components/form/SubmitButton.svelte";
import ErrorBlock from "./components/ErrorBlock.svelte";
import { calculate, type ComputedResult } from './calculator/clientside/index';
import { inputState } from "./components/inputState";

let computedData: ComputedResult | null = null;
let formRef: HTMLFormElement;
let displayError: string | null = null;

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

	displayError = null;

	handleCalcualte();
};

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	displayError = null;
	handleCalcualte();
};

onMount(() => handleRefresh());

</script>

<main>

	<form on:change={handleRefresh} on:submit={handleSubmit} bind:this={formRef}>
		
		<FormContent />

	</form>

	{#if displayError}
		<ErrorBlock>
			{displayError}
		</ErrorBlock>
	{/if}

	<Group>
	
		<svelte:fragment slot="header">
			Computed results
		</svelte:fragment>

		<ResultsView data={computedData} />

	</Group>

	<Group>
	
		<svelte:fragment slot="header">
			Controls
		</svelte:fragment>

		<div class="controls">

			<SubmitButton on:click={handleRefresh}>
				Recalculate
			</SubmitButton>

			<SubmitButton>
				Plot
			</SubmitButton>

			<SubmitButton>
				Export
			</SubmitButton>

		</div>

	</Group>

</main>

<style lang="scss">

	main {
		display: grid;
		gap: 2rem;
		padding: 4rem 2rem;
		width: 65rem;
		max-width: 100%;
		margin: 0 auto;
	}

	.controls {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;
	}

</style>
