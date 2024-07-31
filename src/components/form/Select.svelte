<script lang="ts">

export let options: Record<string, string>;
export let name: string | undefined = undefined;
export let id: string | undefined = undefined;
export let value: string | undefined = undefined;

</script>

<div class="selector">

	<label for={id}>
		<slot>
			[Label]
		</slot>
	</label>

	<select name={name} id={id} bind:value={value}>

		{#each Object.entries(options) as [key, title]}
			<option value={key}>
				{title}
			</option>
		{/each}
	
	</select>

</div>

<style lang="scss">

	.selector {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-size: 0.85rem;
		font-weight: 300;
	}

	select {
		display: block;
		width: 100%;
		padding: 0.5rem 1rem;
		font-size: 0.85rem;
		font-weight: 300;
		background-color: #2b2a33;
		border: 1px solid #8f8f9d;
		border-radius: 0.25rem;
	}

</style>
