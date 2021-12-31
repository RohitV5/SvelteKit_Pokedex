import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async (num) => {
	const url = `http://localhost:3000/api/pokemon`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	const loadedPokemon = data.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	pokemon.set(loadedPokemon);
};
fetchPokemon(150);

