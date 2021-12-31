<script>
	import PokemanCard from "../components/pokemanCard.svelte";
	import { pokemon } from "../stores/pokestore";
	console.log($pokemon);
	let searchTerm="";
	let filteredPokeman
</script>
<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase"> Svelte Kit Pokedex</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} type="text" placeholder="Search Pokemon">
<div class="py-4 grid gap-4 md:grid-cols-2 grids-col-1">
{#each $pokemon as pokeman}
	<PokemanCard pokeman={pokeman}></PokemanCard>
{/each}
</div>

