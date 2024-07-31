
<button type="submit" on:click>
	<slot>
		[Title]
	</slot>
</button>

<style lang="scss">

	button {
		padding: 0.5rem 1.5rem;
		background-color: #01ff95;
		color: var(--app-bg);

		opacity: 0.9;
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 0.5rem;
		transition: all 150ms ease;

		&:hover {
			cursor: pointer;
			opacity: 1;
			background-color: #ff7c01;
			color: white;
		}
	}

</style>
