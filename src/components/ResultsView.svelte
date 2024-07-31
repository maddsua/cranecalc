<script lang="ts">

import TableRow from "./results/TableRow.svelte";
import type { ComputedResult } from "../calculator/clientside";

import appIntl from '../data/app-intl.json';
import { intlText } from "../intl";
import { uiLanguage } from "./uiState";

export let data: ComputedResult | null;

</script>

<div class="results-table">

	<TableRow value={data?.gk.toFixed(2)}>
		{intlText(appIntl.results.fields.mass, $uiLanguage)}
	</TableRow>

	<TableRow value={data?.gt.toFixed(2)}>
		{intlText(appIntl.results.fields.trolley_mass, $uiLanguage)}
	</TableRow>

	<TableRow value={data?.pk.toFixed(2)}>
		{intlText(appIntl.results.fields.wheel_pressure, $uiLanguage)}
	</TableRow>

	<TableRow value={data?.npod.toFixed(2)}>
		{intlText(appIntl.results.fields.lifting_motor_pwr, $uiLanguage)}
	</TableRow>

	<TableRow value={data?.nkr.toFixed(2)}>
		{intlText(appIntl.results.fields.bridge_motor_pwr, $uiLanguage)}
	</TableRow>

	<TableRow value={data?.ntel.toFixed(2)}>
		{intlText(appIntl.results.fields.trolley_motor_pwr, $uiLanguage)}
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
