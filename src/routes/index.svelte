<script>
	import Nav from "../components/nav.svelte";
	import { pokemon } from "../stores/pokestore";
	console.log($pokemon)
</script>
<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>
<h1> Svelte Kit Pokedex</h1>

{#each $pokemon as pokeman}
<p class="text-red-500">{pokeman.name}</p>
{/each}

