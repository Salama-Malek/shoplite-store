import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBarComponent = ({ value, onChange }: SearchBarProps) => {
  return (
    <label className="group relative flex w-full max-w-xl items-center">
      <MagnifyingGlassIcon className="pointer-events-none absolute left-4 h-5 w-5 text-slate-400 transition group-focus-within:text-accent" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products..."
        className="w-full rounded-full border border-white/10 bg-surface/80 px-12 py-3 text-sm text-slate-100 shadow-inner shadow-black/30 backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-accent/60"
      />
      <span className="pointer-events-none absolute right-4 text-xs uppercase tracking-[0.3em] text-slate-500 transition group-focus-within:text-accent">
        Cmd / Ctrl + K
      </span>
    </label>
  );
};

const SearchBar = memo(SearchBarComponent);

export default SearchBar;
