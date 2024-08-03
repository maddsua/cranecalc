<script lang="ts">

export let disabled: boolean = false;

</script>

<button type="button" disabled={disabled} on:click>
	<slot>
		[Title]
	</slot>
</button>

<style lang="scss">

	button {
		padding: 0.25rem 0.5rem;
		background-color: #0086f3;
		color: white;
		opacity: 0.9;
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 0.5rem;
		transition: all 150ms ease;

		&:hover {
			cursor: pointer;
			opacity: 1;
		}

		&:disabled {
			filter: saturate(0);
			opacity: 0.5 !important;
			cursor: not-allowed !important;
		}
	}

</style>
