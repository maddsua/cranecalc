<script lang="ts">
	
export let value: string | number | boolean | null | undefined;

</script>

<div class="table-row">

	<div class="title">
		<slot>
			[Title]
		</slot>
	</div>

	<div class="value">
		{value ?? 'N/A'}
	</div>

</div>

<style lang="scss">

	.table-row {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 2rem;
		font-size: 1rem;
	}

	.title {
		font-weight: 600;
	}

	.value {
		opacity: 0.9;
	}

</style>
