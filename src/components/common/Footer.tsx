import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/10 bg-surface/60 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ShopLite Store. Crafted with care for modern explorers.</p>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
          <span>Privacy</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" aria-hidden="true" />
          <span>Terms</span>
          <span className="h-1 w-1 rounded-full bg-slate-700" aria-hidden="true" />
          <span>Support</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
