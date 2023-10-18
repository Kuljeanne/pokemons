import { PokemonImage } from '@/components/PokemonImage';
import { Progress } from '@/components/ui/progress';
import { getPokemon } from '@/lib/pokemonAPI';

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObj = await getPokemon(pokemonName);

  console.log(pokemonObj);

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toLocaleUpperCase() + pokemonName.slice(1)}
      </h1>
      <div
        className="m-5"
        style={{ position: 'relative', width: '300px', height: '300px' }}
      >
        <PokemonImage
          src={pokemonObj.sprites.other['official-artwork'].front_default}
          name={pokemonName}
        />
      </div>
      <h3>Weight: {pokemonObj.weight}</h3>
      <div className="flex-col">
        {pokemonObj.stats.map((stat, idx: number) => {
          const statName = stat.stat.name;
          const statValue = stat.base_stat;
          return (
            <div
              className="flex items-stretch"
              style={{ width: '500px' }}
              key={idx}
            >
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress
                className="w-2/4 m-auto"
                value={statValue}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
