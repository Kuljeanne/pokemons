import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className='flex flex-col items-center pt-16'>
      <Loader className="h-80 w-80 animate-spin" />
      <h2 className="text-4xl text-bold pt-8">Loading...</h2>
    </div>
  );
}
