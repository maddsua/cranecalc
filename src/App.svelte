<script lang="ts">

import Group from "./components/layout/Group.svelte";
import ResultsView from "./components/ResultsView.svelte";
import FormContent from "./components/FormContent.svelte";
import SubmitButton from "./components/form/SubmitButton.svelte";
import ErrorBlock from "./components/ErrorBlock.svelte";
import { calculate, type ComputedResult } from './calculator/clientside/index';
import { inputState } from "./components/inputState";

let computedData: ComputedResult = {};
let formRef: HTMLFormElement;
let displayError: string | null = null;

const calculatorExec = () => {

	const result = calculate($inputState as Required<typeof $inputState>);
	if (result instanceof Error) {
		displayError = `Calculation failed: ${result.message}`;
		return;
	}

	computedData = result;
};

const handleFormChange = () => {

	if (!formRef.checkValidity()) {
		return;
	}

	displayError = null;

	calculatorExec();
};

const handleSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	displayError = null;
	calculatorExec();
};

</script>

<main>

	<form on:change={handleFormChange} on:submit={handleSubmit} bind:this={formRef}>
		
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

			<SubmitButton on:click={handleFormChange}>
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
