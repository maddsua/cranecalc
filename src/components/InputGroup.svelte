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
		border: 1px solid rgba(212, 212, 212, 0.5);
		border-radius: 0.5rem;
		background-color: var(--app-bg);
	}

	.header {
		font-size: 0.95rem;
		background-color: var(--app-bg);
		position: relative;
		top: -0.5rem;
		margin: 0 1rem;
		padding: 0 0.5rem;
		width: fit-content;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem;
		padding-top: 0.5rem;
	}

</style>
