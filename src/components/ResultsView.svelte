<script lang="ts">
    import type { ComputedResult } from "../calc";


import TableRow from "./results/TableRow.svelte";

export let data: ComputedResult;

</script>

<div class="results-table">

	<TableRow value={data.totalMass}>
		Crane total mass, T
	</TableRow>

	<TableRow value={data.trolleyMass}>
		Trolley mass, T
	</TableRow>

	<TableRow value={data.wheelPressure}>
		Wheel pressure, kN
	</TableRow>

	<TableRow value={data.primaryMotorPower}>
		Primary motor power
	</TableRow>

	<TableRow value={data.bridgeMotorPower}>
		Bridge motor power
	</TableRow>

	<TableRow value={data.trolleyMotorPower}>
		Trolley motor power
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
