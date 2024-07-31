<script lang="ts">

import { inputState } from "./inputState";

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

</script>

<div class="form-content">

	<Group>

		<svelte:fragment slot="header">
			Classifications
		</svelte:fragment>

		<Select options={crane_type} name="type" bind:value={$inputState.kr_t}>
			Crane type
		</Select>

		<Select options={class_group} name="classg" bind:value={$inputState.cls_g}>
			Classification group by ISO 4301/1
		</Select>

		<Select options={power_options} name="power" bind:value={$inputState.pwrt_t}>
			Power type
		</Select>

		<Select options={climate_options} name="climate" bind:value={$inputState.clmt_t}>
			Climate option
		</Select>

		<Select options={rail_type} name="rail_type" bind:value={$inputState.rail_t}>
			Rail type/size
		</Select>

		<Select options={cabin_type} name="cabin_type" bind:value={$inputState.cabin_t}>
			Cabin type
		</Select>

	</Group>

	<Group>

		<svelte:fragment slot="header">
			Cargo options
		</svelte:fragment>

		<NumberInput min={1} step={0.01} name="capacity" bind:value={$inputState.gql}>
			Load capacity, T
		</NumberInput>

		<NumberInput min={1} step={0.01} name="span" bind:value={$inputState.l}>
			Crane span, m
		</NumberInput>

		<NumberInput min={1} step={0.01} name="range" bind:value={$inputState.lr}>
			Maximum lifting range, m
		</NumberInput>

	</Group>

	<Group>

		<svelte:fragment slot="header">
			Moving speeds
		</svelte:fragment>

		<GroupBorderless>

			<svelte:fragment slot="header">
				Primary operation
			</svelte:fragment>
		
			<Columns2>
	
				<NumberInput min={0.01} step={0.01} name="motor_primary_speed" bind:value={$inputState.vpod}>
					Rated speed, m/s
				</NumberInput>
		
				<Select options={operating_mode} name="motor_primary_mode" bind:value={$inputState.pod_mod}>
					Operating mode
				</Select>
	
			</Columns2>

		</GroupBorderless>

		<GroupBorderless>

			<svelte:fragment slot="header">
				Bridge movement
			</svelte:fragment>
		
			<Columns2>
	
				<NumberInput min={0.01} step={0.01} name="motor_bridge_speed" bind:value={$inputState.vkr}>
					Rated speed, m/s
				</NumberInput>
		
				<Select options={operating_mode} name="motor_bridge_mode"  bind:value={$inputState.kr_mod}>
					Operating mode
				</Select>
	
			</Columns2>

		</GroupBorderless>

		<GroupBorderless>

			<svelte:fragment slot="header">
				Trolley movement
			</svelte:fragment>
		
			<Columns2>
	
				<NumberInput min={0.01} step={0.01} name="motor_troll_speed" bind:value={$inputState.vtel}>
					Rated speed, m/s
				</NumberInput>
		
				<Select options={operating_mode} name="motor_troll_mode" bind:value={$inputState.tel_mod}>
					Operating mode
				</Select>
	
			</Columns2>

		</GroupBorderless>

	</Group>

</div>

<style lang="scss">

	.form-content {
		display: grid;
		grid-template-columns: 1fr 1fr 1.5fr;
		gap: 2rem;
	}

</style>
