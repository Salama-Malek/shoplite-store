import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <label className="group relative flex w-full max-w-md items-center">
      <MagnifyingGlassIcon className="pointer-events-none absolute left-4 h-5 w-5 text-slate-400 transition group-focus-within:text-accent" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products..."
        className="w-full rounded-full bg-surface px-12 py-3 text-sm text-slate-100 shadow-inner shadow-black/20 transition focus:outline-none focus:ring-2 focus:ring-accent/60"
      />
    </label>
  );
};

export default SearchBar;
