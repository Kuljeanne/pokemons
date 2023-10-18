const POKEMON_API = 'https://pokeapi.co/api/v2/';
export type Pokemon = {
  name: string;
  url: string;
};
// get Pokemon List

export async function getPokemonList(): Promise<Pokemon[]> {
  const res = await fetch(POKEMON_API + 'pokemon?limit=150&offset=0');
  const data = await res.json();

  return data.results;
}

// get Pokemon

export async function getPokemon(name: string) {
  const res = await fetch(POKEMON_API + `pokemon/${name}`);
  const data = await res.json();

  return data;
}
