import { categories } from '../data/products';

type CategoryFilterProps = {
  value: (typeof categories)[number];
  onChange: (value: (typeof categories)[number]) => void;
};

const CategoryFilter = ({ value, onChange }: CategoryFilterProps) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as (typeof categories)[number])}
      className="rounded-full border border-slate-700 bg-surface px-5 py-3 text-sm text-slate-200 shadow-inner shadow-black/20 transition focus:outline-none focus:ring-2 focus:ring-accent/60"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
