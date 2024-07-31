<script lang="ts">

	export let name: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let value: number | undefined = undefined;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let step: number = 1;

	let inputRef: HTMLInputElement;

	$: inputValid = (
		typeof value === 'number' &&
		!isNaN(value) &&
		(() => inputRef?.validity?.valid)()
	);

</script>

<div class="number-input">

	<label for={id}>
		<slot>
			[Label]
		</slot>
	</label>

	<input type="number" required
		name={name}
		id={id}
		min={min}
		max={max}
		step={step}
		class:invalid={!inputValid}
		bind:value={value}
		bind:this={inputRef} />

</div>

<style lang="scss">

	.number-input {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-size: 0.85rem;
		font-weight: 300;
	}

	input {
		display: block;
		width: 100%;
		padding: 0.5rem 1rem;
		font-size: 0.95rem;
		font-weight: 300;
		background-color: var(--app-bg-alt);
		color: var(--app-text);
		border: 1px solid #8f8f9d;
		border-radius: 0.25rem;

		&.invalid {
			border-color: red;
		}
	}

</style>
