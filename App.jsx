import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, PackageCheck, PhoneCall, Mail, Globe2, IndianRupee, Factory, Truck, Award, CheckCircle2, Sparkles } from "lucide-react";

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const [grade, setGrade] = React.useState('AR');
  const visible = React.useMemo(() => {
    return PRODUCTS.filter(p => filter === 'all' ? true : p.group === filter);
  }, [filter]);
  const activeFilterLabel = React.useMemo(() => (FILTERS.find(f=>f.key===filter)?.label || 'All'), [filter]);

  const openSpecs = (key) => { setActive(key); setOpen(true); if(key==='agno3') setGrade('AR'); };
  const closeSpecs = () => { setOpen(false); setActive(null); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-neutral-50 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(236,72,153,0.18),rgba(2,6,23,0.9))]" />
        <div className="absolute -top-24 -left-24 h-[680px] w-[680px] rounded-full blur-3xl opacity-35 bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/25 to-cyan-400/25" />
        <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-cyan-400/25 via-sky-400/20 to-emerald-300/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03))]" />
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#home" className="group inline-flex items-center gap-3">
            <motion.div
              initial={{ rotate: -8, scale: 0.92 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#cfd6dc] via-white to-[#b3e5fc] text-neutral-900 shadow-lg ring-1 ring-white/50 group-hover:scale-105"
              title="Silverfy"
            >
              <span className="font-extrabold tracking-widest">Ag</span>
            </motion.div>
            <div className="leading-tight">
              <span className="block text-xl font-bold tracking-tight">Silverfy</span>
              <span className="block text-xs text-neutral-300">For all your Silver Chemical Needs</span>
            </div>
          </a>
          <div className="hidden gap-6 md:flex">
            <a href="#products" className="navlink">Products</a>
            <a href="#industries" className="navlink">Industries</a>
            <a href="#why" className="navlink">Why Us</a>
            <a href="#contact" className="btn-primary shine">Get Quote</a>
          </div>
        </div>
      </nav>

      <header id="home" className="mx-auto max-w-7xl px-4 pt-14 pb-12 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Premium <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300">Silver Chemicals</span> for Modern Manufacturing
            </motion.h1>
            <p className="mt-4 max-w-prose text-neutral-300">
              Manufacturer‑backed sourcing of AgNO₃, Ag₂CO₃, Ag₂O and specialty halides with full COA/MSDS & batch traceability. India & global shipping with DGFT/Customs support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary shine h-11 inline-flex items-center justify-center group">
                Request Pricing
              </a>
              <a href="#products" className="btn-ghost glass h-11 inline-flex items-center justify-center">View Products</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 p-6 shadow-2xl gradient-border">
            <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl transition group-hover:scale-110" />
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-50">Batch Snapshot</h3>
                <p className="text-xs text-neutral-300">Sample COA overview</p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/10 bg-neutral-900/40 p-4 glass">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 p-3"><p className="text-xs text-neutral-400">Compound</p><p className="mt-1 font-medium text-neutral-100">Silver Nitrate (AgNO₃)</p></div>
                <div className="rounded-lg border border-white/10 p-3"><p className="text-xs text-neutral-400">Assay</p><p className="mt-1 font-medium text-neutral-100">&gt;= 99.90%</p></div>
                <div className="rounded-lg border border-white/10 p-3"><p className="text-xs text-neutral-400">Chloride (Cl)</p><p className="mt-1 font-medium text-neutral-100">NMT 0.0005%</p></div>
                <div className="rounded-lg border border-white/10 p-3"><p className="text-xs text-neutral-400">Iron (Fe)</p><p className="mt-1 font-medium text-neutral-100">NMT 0.0003%</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section id="products" className="mx-auto max-w-7xl px-4 py-12">
        <SectionTitle kicker="Catalogue" title="Silver Product Range" subtitle="LR/AR/GR/ACS grades available with documentation." />
        <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-neutral-900/40 p-3 glass">
          <span className="mr-2 inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 text-sm font-semibold">
            <span className="font-extrabold tracking-widest">Silver</span>
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-neutral-900 ring-1 ring-white/40">Ag</span>
          </span>
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} className={`px-3 py-1.5 rounded-xl text-sm transition border ${filter===f.key ? 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-neutral-900 border-transparent' : 'border-white/15 text-neutral-100 hover:bg-white/5'}`}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-3 text-sm text-neutral-300">{visible.length} result{visible.length!==1?'s':''} — showing {activeFilterLabel}</div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(p => (
            <ProductCard key={p.key} onSpecs={()=>openSpecs(p.key)} name={p.name} desc={p.desc} badges={p.badges} />
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="inline-flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-neutral-900 ring-1 ring-white/40">
              <span className="text-sm font-extrabold">Ag</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Silverfy</p>
              <p className="text-xs text-neutral-400">For all your Silver Chemical Needs</p>
            </div>
          </div>
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Silverfy. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .btn-primary{ display:inline-flex; align-items:center; border-radius:1rem; padding:.5rem 1.25rem; font-weight:700; color:#0b0b0b;
          background: linear-gradient(90deg,#f472b6,#8b5cf6,#22d3ee); box-shadow:0 12px 28px rgba(139,92,246,.35); }
        .btn-ghost{ display:inline-flex; align-items:center; border-radius:1rem; padding:.5rem 1rem; font-weight:600; color:rgba(255,255,255,.92);
          border:1px solid rgba(255,255,255,.2); }
        .navlink{ color:rgba(229,231,235,.9); }
        .input{ width:100%; border-radius:1rem; border:1px solid rgba(255,255,255,.1); background:rgba(10,10,10,.4); padding:.5rem .75rem; color:#f5f5f5; }
        .glass{ background:rgba(255,255,255,.06); backdrop-filter: blur(12px); border:1px solid rgba(255,255,255,.10); }
        .gradient-border{ position: relative; }
        .gradient-border:before{ content:""; position:absolute; inset:-1px; z-index:-1; border-radius:1.5rem;
          background:linear-gradient(135deg, rgba(244,114,182,.5), rgba(139,92,246,.5), rgba(34,211,238,.5)); filter:blur(8px); opacity:.85; }
      `}</style>

      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true" onClick={closeSpecs}>
          <div className="max-w-2xl w-full rounded-2xl border border-white/10 bg-neutral-950/95 p-6 shadow-2xl" onClick={(e)=>e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">{SPECS[active]?.title} — Specifications</h3>
              <button onClick={closeSpecs} className="btn-ghost">Close</button>
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/10">
                {SPECS[active]?.rows.map(([k,v],i)=> (
                  <tr key={i} className="hover:bg-white/5">
                    <td className="px-3 py-2 text-neutral-300 w-1/2">{k}</td>
                    <td className="px-3 py-2 text-neutral-100">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-neutral-400">Values sourced from latest COA. Detailed COA/MSDS available on request.</p>
          </div>
        </div>
      )}
    </div>
  );
}

const PRODUCTS = [
  { key:'agno3', group:'nitrate', name:'Silver Nitrate (AgNO₃)', desc:'AR ≥99.90%, LR ≥98.50%. Chloride NMT 0.0005%.', badges:['AR/LR','≥99.9%','COA'] },
  { key:'ag2so4', group:'sulphate', name:'Silver Sulphate (Ag₂SO₄)', desc:'AR/LR. Assay ≥99.5% (AR), ≥98.5% (LR). Cl NMT 0.002%.', badges:['AR/LR','≥99.5%','COA'] },
  { key:'ag2o', group:'oxide', name:'Silver Oxide (Ag₂O)', desc:'Ag₂O ≥99.00%. Ag (metal) 92.1–93.5%. Low halides/heavies.', badges:['LR','≥99.0% Ag₂O','MSDS'] },
  { key:'agcl', group:'chloride', name:'Silver Chloride (AgCl)', desc:'>99.5% chemical purity. TMI <500 ppm; Fe/Cu <10 ppm.', badges:['>99.5%','Low metals','COA'] },
  { key:'agbr', group:'bromide', name:'Silver Bromide (AgBr)', desc:'Assay ≥99.0%. Yellow to yellow‑green solid.', badges:['≥99.0%','COA'] },
  { key:'agi', group:'iodide', name:'Silver Iodide (AgI)', desc:'≥99.5% purity. Chloride NMT 0.0005%.', badges:['≥99.5%','Low Cl','COA'] },
  { key:'ag2co3', group:'carbonate', name:'Silver Carbonate (Ag₂CO₃)', desc:'High‑purity carbonate for catalysts and synthesis.', badges:['GR/LR','COA'] },
  { key:'agcn', group:'cyanide', name:'Silver Cyanide (AgCN)', desc:'Electroplating grade on request.', badges:['Spec on PO','MSDS'] },
  { key:'kagcn2', group:'cyanide', name:'Silver Potassium Cyanide (KAg(CN)₂)', desc:'Ag 53.5–54.5%; insolubles NMT 0.1%.', badges:['Plating','COA'] },
];

const FILTERS = [
  { key:'all', label:'All' },
  { key:'sulphate', label:'Sulphate' },
  { key:'chloride', label:'Chloride' },
  { key:'nitrate', label:'Nitrate' },
  { key:'carbonate', label:'Carbonate' },
  { key:'cyanide', label:'Cyanide' },
  { key:'oxide', label:'Oxide' },
  { key:'bromide', label:'Bromide' },
  { key:'iodide', label:'Iodide' },
];

function SectionTitle({ kicker, title, subtitle }){
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-widest text-neutral-300">{kicker}</p>
      <h2 className="mt-1 text-3xl font-bold tracking-tight text-neutral-50">{title}</h2>
      <p className="mt-2 text-neutral-300">{subtitle}</p>
    </div>
  );
}

function ProductCard({ name, desc, badges, onSpecs }){
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-5 transition hover:shadow-2xl hover:shadow-fuchsia-500/10 glass">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-50">{name}</h3>
          <p className="mt-1 text-sm text-neutral-300">{desc}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur grid place-items-center transition group-hover:scale-110">
          <span className="h-5 w-5 block">📦</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {badges.map((b, i) => (
          <span key={i} className="rounded-full border border-white/10 px-2 py-1 text-xs text-neutral-200/90">{b}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a href="#contact" className="inline-block text-sm font-semibold text-neutral-100 underline-offset-4 hover:underline">Get a quote →</a>
        {onSpecs && (
          <button onClick={onSpecs} className="btn-ghost text-sm">View specs</button>
        )}
      </div>
    </div>
  );
}
