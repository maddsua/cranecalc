<script lang="ts">

</script>

<div class="input-group">

	<div class="header">
		<slot name="header">
			[Header]
		</slot>
	</div>

	<div class="content">
		<slot>
			[Content]
		</slot>
	</div>

</div>

<style lang="scss">

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.header {
		font-size: 1rem;
		font-weight: 500;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 0.5rem;
	}

</style>
