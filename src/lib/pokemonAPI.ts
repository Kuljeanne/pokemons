const POKEMON_API = 'https://pokeapi.co/api/v2/';
export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonInfo = {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};
// get Pokemon List

export async function getPokemonList(): Promise<Pokemon[]> {
  const res = await fetch(POKEMON_API + 'pokemon?limit=150&offset=0');
  const data = await res.json();

  return data.results;
}

// get PokemonInfo

export async function getPokemon(name: string): Promise<PokemonInfo> {
  const res = await fetch(POKEMON_API + `pokemon/${name}`);
  const data = await res.json();

  return data;
}
