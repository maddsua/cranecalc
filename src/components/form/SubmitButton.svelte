
<button type="submit" on:click>
	<slot>
		[Title]
	</slot>
</button>

<style lang="scss">

	@import "../../breakpoints.scss";

	button {
		padding: 0.5rem 1.5rem;
		background-color: var(--app-color-button-bg);
		color: var(--app-color-button-text);

		opacity: 0.9;
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 0.5rem;
		transition: all 150ms ease;

		&:hover {
			cursor: pointer;
			opacity: 1;
			background-color: var(--app-color-button-hover-bg);
			color: var(--app-color-button-hover-text);
		}
	}

</style>
