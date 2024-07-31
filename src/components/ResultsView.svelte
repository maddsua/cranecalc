<script lang="ts">

import type { ComputedResult } from "../calculator/clientside";

import TableRow from "./results/TableRow.svelte";

export let data: ComputedResult | null;

</script>

<div class="results-table">

	<TableRow value={data?.gk.toFixed(2)}>
		Crane total mass, T
	</TableRow>

	<TableRow value={data?.gt.toFixed(2)}>
		Trolley mass, T
	</TableRow>

	<TableRow value={data?.pk.toFixed(2)}>
		Wheel pressure, kN
	</TableRow>

	<TableRow value={data?.npod.toFixed(2)}>
		Hoising motor power, kWt
	</TableRow>

	<TableRow value={data?.nkr.toFixed(2)}>
		Crane motor power, kWt
	</TableRow>

	<TableRow value={data?.ntel.toFixed(2)}>
		Trolley motor power, kWt
	</TableRow>
	
</div>

<style lang="scss">

	.results-table {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 30rem;
	}

</style>
