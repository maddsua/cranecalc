<script lang="ts">

import { uiTheme } from "../uiState";

const toggleTheme = () => $uiTheme = $uiTheme === 'dark' ? 'light' : 'dark';

</script>

<button class="theme" class:dark={$uiTheme === 'dark'} on:click={toggleTheme}></button>

<style lang="scss">

	.theme {
		display: block;
		width: 2rem;
		height: 2rem;
		background-size: 75%;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(/ui/icon-theme-dark.svg);
		
		&.dark {
			background-image: url(/ui/icon-theme-light.svg);
		}

		&:hover {
			cursor: pointer;
		}
	}

</style>
