import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search({ placeholder }: { placeholder: string }){
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only text-black">
        Search over 1000 of handcrafted artist works
      </label>
      <input
        className="peer block w-full rounded-md border border-yellow-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-white"
        placeholder={placeholder}
        
        
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}