'use client';

import { Frown } from 'lucide-react';

export default function Error() {
  return (
    <div className="flex flex-col items-center pt-16">
      <Frown className="h-80 w-80 " />
      <h2 className="text-4xl text-bold pt-8">Oops, something went wrong...</h2>
    </div>
  );
}
