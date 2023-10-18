import Link from 'next/link';

interface PokemonProps {
  name: string;
}

export function PokemonCard({ name }: PokemonProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors hover:border-gray-300 dark:border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + 'Card'}
    >
      <h2 className={`text-2xl font-semibold`}>{name}</h2>
    </Link>
  );
}
