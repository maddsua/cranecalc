<script lang="ts">

import Select from "./form/Select.svelte";
import NumberInput from "./form/NumberInput.svelte";
import Group from "./layout/Group.svelte";
import GroupBorderless from "./layout/GroupBorderless.svelte";
import Columns2 from "./layout/Columns2.svelte";

import crane_type from '../data/options/crane_type.json';
import class_group from '../data/options/class_group.json';
import rail_type from '../data/options/rail_type.json';
import climate_options from '../data/options/climate_options.json';
import power_options from '../data/options/power_options.json';
import cabin_type from '../data/options/cabin_type.json';
import operating_mode from '../data/options/operating_mode.json';

import inputLinits from '../data/limits.json';

import appIntl from '../data/app-intl.json';
import { intlText } from "../intl";
import { uiLanguage } from "./uiState";

import { inputState } from "./inputState";

</script>

<div class="form-content">

	<Group>

		<svelte:fragment slot="header">
			{intlText(appIntl.forms.groups.class.header, $uiLanguage)}
		</svelte:fragment>

		<Select options={crane_type} name="type" bind:value={$inputState.kr_t}>
			{intlText(appIntl.forms.groups.class.labels.type, $uiLanguage)}
		</Select>

		<Select options={class_group} name="classg" bind:value={$inputState.cls_g}>
			{intlText(appIntl.forms.groups.class.labels.class, $uiLanguage)}
		</Select>

		<Select options={power_options} name="power" bind:value={$inputState.pwrt_t}>
			{intlText(appIntl.forms.groups.class.labels.power, $uiLanguage)}
		</Select>

		<Select options={climate_options} name="climate" bind:value={$inputState.clmt_t}>
			{intlText(appIntl.forms.groups.class.labels.climate, $uiLanguage)}
		</Select>

		<Select options={rail_type} name="rail_type" bind:value={$inputState.rail_t}>
			{intlText(appIntl.forms.groups.class.labels.railtype, $uiLanguage)}
		</Select>

		<Select options={cabin_type} name="cabin_type" bind:value={$inputState.cabin_t}>
			{intlText(appIntl.forms.groups.class.labels.cabin, $uiLanguage)}
		</Select>

	</Group>

	<Group>

		<svelte:fragment slot="header">
			{intlText(appIntl.forms.groups.cargo.header, $uiLanguage)}
		</svelte:fragment>

		<NumberInput min={inputLinits.capacity.min} max={inputLinits.capacity.max} step={0.01} name="capacity" bind:value={$inputState.qgl}>
			{intlText(appIntl.forms.groups.cargo.labels.capacity, $uiLanguage)}
		</NumberInput>

		<NumberInput min={inputLinits.span.min} max={inputLinits.span.max} step={0.01} name="span" bind:value={$inputState.l}>
			{intlText(appIntl.forms.groups.cargo.labels.span, $uiLanguage)}
		</NumberInput>

		<NumberInput min={1} step={0.01} name="height" bind:value={$inputState.lh}>
			{intlText(appIntl.forms.groups.cargo.labels.height, $uiLanguage)}
		</NumberInput>

	</Group>

	<Group>

		<svelte:fragment slot="header">
			{intlText(appIntl.forms.groups.speeds.header, $uiLanguage)}
		</svelte:fragment>

		<GroupBorderless>

			<svelte:fragment slot="header">
				{intlText(appIntl.forms.groups.speeds.labels.lifting, $uiLanguage)}
			</svelte:fragment>
		
			<Columns2>
	
				<NumberInput min={0.01} step={0.01} name="motor_primary_speed" bind:value={$inputState.vpod}>
					{intlText(appIntl.forms.groups.speeds.shared.speed, $uiLanguage)}
				</NumberInput>
		
				<Select options={operating_mode} name="motor_primary_mode" bind:value={$inputState.pod_mod}>
					{intlText(appIntl.forms.groups.speeds.shared.opmode, $uiLanguage)}
				</Select>
	
			</Columns2>

		</GroupBorderless>

		<GroupBorderless>

			<svelte:fragment slot="header">
				{intlText(appIntl.forms.groups.speeds.labels.bridge, $uiLanguage)}
			</svelte:fragment>
		
			<Columns2>
	
				<NumberInput min={0.01} step={0.01} name="motor_bridge_speed" bind:value={$inputState.vkr}>
					{intlText(appIntl.forms.groups.speeds.shared.speed, $uiLanguage)}
				</NumberInput>
		
				<Select options={operating_mode} name="motor_bridge_mode"  bind:value={$inputState.kr_mod}>
					{intlText(appIntl.forms.groups.speeds.shared.opmode, $uiLanguage)}
				</Select>
	
			</Columns2>

		</GroupBorderless>

		<GroupBorderless>

			<svelte:fragment slot="header">
				{intlText(appIntl.forms.groups.speeds.labels.trolley, $uiLanguage)}
			</svelte:fragment>
		
			<Columns2>
	
				<NumberInput min={0.01} step={0.01} name="motor_troll_speed" bind:value={$inputState.vtel}>
					{intlText(appIntl.forms.groups.speeds.shared.speed, $uiLanguage)}
				</NumberInput>
		
				<Select options={operating_mode} name="motor_troll_mode" bind:value={$inputState.tel_mod}>
					{intlText(appIntl.forms.groups.speeds.shared.opmode, $uiLanguage)}
				</Select>
	
			</Columns2>

		</GroupBorderless>

	</Group>

</div>

<style lang="scss">

	@import "../breakpoints.scss";

	.form-content {
		display: grid;
		grid-template-columns: 1fr 1fr 1.5fr;
		gap: 2rem;

		@include screen-m {
			grid-template-columns: 1fr 1fr;
			gap: 2rem 1rem;
		}

		@include screen-s {
			grid-template-columns: 100%;
			gap: 2rem;
		}
	}

</style>
