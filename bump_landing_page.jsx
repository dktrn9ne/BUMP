import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Smartphone, Repeat2, Star, ShieldCheck, Wallet, Rocket, Coins, Users, CheckCircle2 } from "lucide-react";

const ASSETS = {
  logo: "/assets/bump-logo.png",
  brandDeck: "/assets/bump-brand-deck.png",
  screensOne: "/assets/bump-screens-1-4.png",
  screensTwo: "/assets/bump-screens-5-8.png",
};

const features = [
  { icon: Zap, title: "Built for speed", text: "Move value, unlock perks, and launch creator drops with a mobile-first Solana flow." },
  { icon: Smartphone, title: "Seeker-first UX", text: "Wallet-native onboarding designed around fast taps, clear actions, and repeat usage." },
  { icon: Repeat2, title: "Instant momentum", text: "Pay, split, earn, and track activity from one unified creator finance dashboard." },
  { icon: Star, title: "Creator access layer", text: "Fan passes, drops, memberships, and perks built into the financial experience." },
];

const appScreens = [
  "Opening / Connect",
  "Home / Dashboard",
  "BUMP Pay",
  "Seeker Fan Pass",
  "Split Engine",
  "Activity",
  "Drops",
  "Launch Center",
];

function Badge({ children }) {
  return <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-300">{children}</span>;
}

function GradientButton({ children, dark = false }) {
  return (
    <button className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wider transition ${dark ? "border border-white/15 bg-white/5 text-white hover:bg-white/10" : "bg-gradient-to-r from-lime-300 to-cyan-300 text-black shadow-[0_0_40px_rgba(199,255,0,.25)] hover:scale-[1.02]"}`}>
      {children}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}

export default function BumpLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-[-15%] top-[-20%] h-[520px] w-[520px] rounded-full bg-lime-300/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-cyan-300/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[25%] h-[420px] w-[420px] rounded-full bg-lime-300/10 blur-[130px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img src={ASSETS.logo} alt="BUMP logo" className="h-12 w-12 rounded-2xl object-cover shadow-[0_0_30px_rgba(199,255,0,.22)]" />
          <div>
            <p className="text-xl font-black italic tracking-tight">BUMP</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-lime-300">Move faster onchain</p>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm font-bold text-white/70 md:flex">
          <a href="#screens" className="hover:text-lime-300">Screens</a>
          <a href="#features" className="hover:text-lime-300">Features</a>
          <a href="#launch" className="hover:text-lime-300">Launch</a>
        </div>
        <GradientButton>Launch App</GradientButton>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge>Solana dApp built for Seeker</Badge>
          <h1 className="mt-7 text-6xl font-black uppercase italic leading-[0.88] tracking-tight md:text-8xl">
            Move faster <span className="block bg-gradient-to-r from-lime-300 via-lime-300 to-cyan-300 bg-clip-text text-transparent">onchain.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
            BUMP is a mobile-first financial operating system for Web3 creators. Send payments, split earnings, launch drops, reward fans, and get dApp Store ready from one Seeker-native experience.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <GradientButton>Connect Seeker Wallet</GradientButton>
            <GradientButton dark>View Screens</GradientButton>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["Fast", "Mobile First", "Built on Solana"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-center">
                <CheckCircle2 className="mx-auto mb-2 h-5 w-5 text-lime-300" />
                <p className="text-xs font-black uppercase tracking-wider text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-lime-300/30 to-cyan-300/25 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl">
            <img src={ASSETS.screensOne} alt="BUMP app screenshots" className="rounded-[2rem] border border-white/10 object-cover" />
          </div>
        </motion.div>
      </section>

      <section id="features" className="relative z-10 border-y border-white/10 bg-white/[0.025] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-black/45 p-6">
              <Icon className="mb-5 h-7 w-7 text-lime-300" />
              <h3 className="text-lg font-black uppercase tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="screens" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Badge>App experience</Badge>
            <h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">Eight screens. One flow.</h2>
          </div>
          <p className="max-w-md text-white/62">From wallet connect to launch center, every screen keeps BUMP fast, clean, and creator-first.</p>
        </div>
        <div className="grid gap-6">
          <img src={ASSETS.screensOne} alt="BUMP app screens 1 through 4" className="rounded-[2rem] border border-white/10 shadow-2xl" />
          <img src={ASSETS.screensTwo} alt="BUMP app screens 5 through 8" className="rounded-[2rem] border border-white/10 shadow-2xl" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {appScreens.map((screen, i) => (
            <div key={screen} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-lime-300 font-black">0{i + 1}</p>
              <p className="mt-1 text-sm font-bold text-white/75">{screen}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <Badge>Creator economy OS</Badge>
          <h2 className="mt-5 text-4xl font-black uppercase italic">Pay. Split. Earn. Drop.</h2>
          <p className="mt-5 leading-7 text-white/65">BUMP turns Solana payments into a complete creator loop: fans support instantly, collaborators get transparent splits, drops become rewards, and every move shows up in activity.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[{ icon: Wallet, label: "BUMP Pay" }, { icon: Coins, label: "Split Engine" }, { icon: Users, label: "Fan Pass" }, { icon: ShieldCheck, label: "Launch Center" }].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/50 p-5">
                <Icon className="mb-3 h-6 w-6 text-cyan-300" />
                <p className="font-black uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-3">
          <img src={ASSETS.brandDeck} alt="BUMP brand system" className="rounded-[1.5rem] border border-white/10" />
        </div>
      </section>

      <section id="launch" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2.5rem] border border-lime-300/20 bg-gradient-to-br from-lime-300 to-cyan-300 p-[1px] shadow-[0_0_80px_rgba(199,255,0,.18)]">
          <div className="grid gap-8 rounded-[2.45rem] bg-black p-8 md:grid-cols-[1fr_.8fr] md:p-12">
            <div>
              <Rocket className="mb-6 h-10 w-10 text-lime-300" />
              <h2 className="text-4xl font-black uppercase italic md:text-6xl">Built for Seeker. Made for the future.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/67">Ship BUMP as a premium Solana Mobile dApp with wallet-native onboarding, creator payments, fan rewards, and a launch center that keeps the team focused on dApp Store readiness.</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              {["Android build", "Wallet integration", "Store assets", "Publisher portal", "Review & submit"].map((item, i) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="font-bold text-white/80">{item}</span>
                  <span className={i < 3 ? "text-lime-300" : "text-white/30"}>{i < 3 ? "Ready" : "Next"}</span>
                </div>
              ))}
              <GradientButton>Start the BUMP</GradientButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/50 md:flex-row">
          <p className="font-black text-white">BUMP</p>
          <p>Move faster onchain. Built for Seeker.</p>
        </div>
      </footer>
    </main>
  );
}
