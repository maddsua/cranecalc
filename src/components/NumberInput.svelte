<script lang="ts">

	export let name: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let value: number | undefined = undefined;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;

</script>

<div class="number-input">

	<label for={id}>
		<slot>
			[Label]
		</slot>
	</label>

	<input type="number" name={name} id={id} min={min} max={max} bind:value={value} />

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
		background-color: #2b2a33;
		border: 1px solid #8f8f9d;
		border-radius: 0.25rem;
	}

</style>
