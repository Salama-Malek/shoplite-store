import { ListBulletIcon } from '@heroicons/react/24/outline';
import { memo } from 'react';

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

type SortMenuProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

const options: { label: string; value: SortOption }[] = [
  { label: 'Price · Low to High', value: 'price-asc' },
  { label: 'Price · High to Low', value: 'price-desc' },
  { label: 'Name · A to Z', value: 'name-asc' },
  { label: 'Name · Z to A', value: 'name-desc' },
];

const SortMenuComponent = ({ value, onChange }: SortMenuProps) => {
  return (
    <label className="relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-xs text-slate-300 shadow-inner shadow-black/30">
      <ListBulletIcon className="h-4 w-4 text-accent" aria-hidden="true" />
      <span className="hidden sm:inline">Sort</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as SortOption)}
        className="appearance-none bg-transparent pr-6 text-sm font-medium text-white focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-slate-900">
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
        ⇅
      </span>
    </label>
  );
};

const SortMenu = memo(SortMenuComponent);

export default SortMenu;
