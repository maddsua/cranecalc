<div class="columns-2">
	<slot>
		[Content]
	</slot>
</div>

<style lang="scss">

	.columns-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

</style>
