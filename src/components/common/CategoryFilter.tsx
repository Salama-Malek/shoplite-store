import { memo } from 'react';
import { categories } from '../../data/products';

type CategoryFilterProps = {
  value: (typeof categories)[number];
  onChange: (value: (typeof categories)[number]) => void;
};

const CategoryFilterComponent = ({ value, onChange }: CategoryFilterProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-2 py-2 text-xs text-slate-300 shadow-inner shadow-black/30">
      {categories.map((category) => {
        const isActive = category === value;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full px-3 py-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
              isActive
                ? 'bg-accent/90 text-slate-900 shadow-glow'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

const CategoryFilter = memo(CategoryFilterComponent);

export default CategoryFilter;
