const SkeletonCard = () => (
  <div className="animate-pulse overflow-hidden rounded-3xl border border-white/10 bg-surface/50 p-6 shadow-lg shadow-black/20">
    <div className="mb-5 h-48 w-full rounded-2xl bg-white/5" />
    <div className="mb-2 h-4 w-3/4 rounded-full bg-white/5" />
    <div className="mb-6 h-4 w-1/3 rounded-full bg-white/5" />
    <div className="h-10 w-full rounded-full bg-white/5" />
  </div>
);

export default SkeletonCard;
