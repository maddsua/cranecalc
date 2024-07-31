<script lang="ts">

import Select from "./components/Select.svelte";
import NumberInput from "./components/NumberInput.svelte";
import InputGroup from "./components/InputGroup.svelte";
import InputGroupBorderless from "./components/InputGroupBorderless.svelte";
import LayoutSplit2 from "./components/LayoutSplit2.svelte";

const craneOptions = {
	one: "One",
	tho: "two"
};

</script>

<main>

	<form>

		<InputGroup>

			<svelte:fragment slot="header">
				Classifications
			</svelte:fragment>

			<Select options={craneOptions} name="selector">
				Crate type
			</Select>
	
			<Select options={craneOptions} name="selector">
				Classification group by ISO 4301/1
			</Select>

			<Select options={craneOptions} name="selector">
				Power type
			</Select>
	
			<Select options={craneOptions} name="selector">
				Climate option
			</Select>

			<Select options={craneOptions} name="selector">
				Rail type/size
			</Select>
	
			<Select options={craneOptions} name="selector">
				Cabin type
			</Select>
		
		</InputGroup>
	
		<InputGroup>
	
			<svelte:fragment slot="header">
				Cargo options
			</svelte:fragment>
	
			<NumberInput value={42} min={0}>
				Load capacity, T
			</NumberInput>
	
			<NumberInput value={42} min={0}>
				Crane span, m
			</NumberInput>

			<NumberInput value={42} min={0}>
				Maximum lifting range, m
			</NumberInput>
	
		</InputGroup>
	
		<InputGroup>
	
			<svelte:fragment slot="header">
				Moving speeds
			</svelte:fragment>
	
			<InputGroupBorderless>
	
				<svelte:fragment slot="header">
					Primary operation
				</svelte:fragment>
			
				<LayoutSplit2>
		
					<NumberInput value={42} min={0}>
						Rated speed, m/s
					</NumberInput>
			
					<Select options={craneOptions} name="selector">
						Operating mode
					</Select>
		
				</LayoutSplit2>
	
			</InputGroupBorderless>
	
			<InputGroupBorderless>
	
				<svelte:fragment slot="header">
					Bridge movement
				</svelte:fragment>
			
				<LayoutSplit2>
		
					<NumberInput value={42} min={0}>
						Rated speed, m/s
					</NumberInput>
			
					<Select options={craneOptions} name="selector">
						Operating mode
					</Select>
		
				</LayoutSplit2>
	
			</InputGroupBorderless>
	
			<InputGroupBorderless>
	
				<svelte:fragment slot="header">
					Trolley movement
				</svelte:fragment>
			
				<LayoutSplit2>
		
					<NumberInput value={42} min={0}>
						Rated speed, m/s
					</NumberInput>
			
					<Select options={craneOptions} name="selector">
						Operating mode
					</Select>
		
				</LayoutSplit2>
	
			</InputGroupBorderless>
	
		</InputGroup>

	</form>

</main>

<style>

	main {
		padding: 4rem 2rem;
	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr 1.5fr;
		gap: 2rem;
		width: 65rem;
		max-width: 100%;
		margin: 0 auto;
	}

</style>
