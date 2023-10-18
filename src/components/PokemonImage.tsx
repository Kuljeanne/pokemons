'use client';
import Image from 'next/image';

interface PokemonImageProps {
  name: string;
  src: string;
}

export function PokemonImage({ name, src }: PokemonImageProps) {
  return (
    <Image
      src={src}
      alt={'Picture of' + name}
      priority
      fill
      style={{ objectFit: 'contain' }}
      className="transition-opacity opacity-0 duuration-[2s]"
      onLoadingComplete={image => image.classList.remove('opacity-0')}
    />
  );
}
