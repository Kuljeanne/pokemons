import { PokemonCard } from '@/components/PokemonCard';
import { PokemonGrid } from '@/components/PokemonGrid';
import { getPokemonList } from '@/lib/pokemonAPI';

export default async function Home() {
  const pokemonList = await getPokemonList()
  return (
    <PokemonGrid pokemonList={pokemonList}/>
  );
}
