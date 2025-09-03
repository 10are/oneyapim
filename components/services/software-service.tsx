"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Files,
  Search,
  GitBranch,
  Play,
  Puzzle,
  TerminalSquare,
  ChevronRight,
  ChevronDown,
  Code2,
  Command,
  Circle,
  GitCommit,
  Cloud,
  RefreshCw,
  Settings,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

/**
 * VSCode-styled, elegant SoftwareService section
 * - Activity Bar (left), Side Bar (Explorer), Editor (tabs + code), Panel (terminal), Status Bar
 * - Smooth animations with Framer Motion
 * - Tailwind-only styling; no external CSS
 * - Fully responsive, accessible, and dark-theme friendly
 */
export default function SoftwareServiceVSCode() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0e0f13] dark:via-[#0b0c10] dark:to-[#0e0f13] shadow-2xl"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-20" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" className="fill-gray-400/20 dark:fill-slate-500/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>
      </div>

      {/* Window Title Bar */}
      <div className="relative z-10 flex items-center gap-3 px-4 sm:px-6 py-2.5 border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-100/80 dark:bg-[#1f2335]/60 backdrop-blur supports-[backdrop-filter]:bg-gray-100/60 dark:supports-[backdrop-filter]:bg-[#1f2335]/40">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <div className="mx-2 hidden sm:flex items-center gap-2 text-xs text-gray-600/80 dark:text-slate-300/80">
          <Code2 className="h-4 w-4" />
          <span className="font-medium">software-development.tsx</span>
          <span className="text-gray-400 dark:text-slate-500">—</span>
          <span className="truncate max-w-[22ch]">{t?.services?.software?.title ?? "Software"}</span>
        </div>
        {/* Command Palette */}
        <button
          className="ml-auto inline-flex items-center gap-2 text-xs text-gray-600/80 dark:text-slate-300/80 rounded-md border border-gray-300/40 dark:border-slate-600/40 px-2 py-1 hover:bg-gray-200/40 dark:hover:bg-slate-700/40 transition"
          aria-label="Command Palette"
        >
          <Command className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Komut Paleti</span>
          <kbd className="ml-1 text-[10px] text-gray-500 dark:text-slate-400">⌘K</kbd>
        </button>
      </div>

      {/* IDE Shell */}
      <div className="relative z-10 grid grid-cols-[40px_1fr] md:grid-cols-[48px_180px_1fr] lg:grid-cols-[56px_200px_1fr] xl:grid-cols-[64px_220px_1fr] min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
        {/* Activity Bar */}
        <nav aria-label="Activity Bar" className="flex flex-col items-center gap-2 md:gap-3 py-3 md:py-4 border-r border-gray-200/60 dark:border-gray-700/60 bg-gray-50/90 dark:bg-[#151823]/90">
          {[
            { icon: Files, label: "Explorer", active: true },
            { icon: Search, label: "Search" },
            { icon: GitBranch, label: "Source Control" },
            { icon: Play, label: "Run & Debug" },
            { icon: Puzzle, label: "Extensions" },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`group p-1.5 md:p-2 rounded-lg md:rounded-xl transition focus:outline-none focus:ring-2 focus:ring-cyan-500/40 ${
                active
                  ? "bg-gradient-to-b from-gray-200/60 to-gray-300/60 dark:from-slate-700/60 dark:to-slate-800/60 text-cyan-600 dark:text-cyan-300"
                  : "text-gray-500 dark:text-slate-400 hover:bg-gray-200/40 dark:hover:bg-slate-800/40 hover:text-gray-700 dark:hover:text-slate-200"
              }`}
              aria-pressed={active}
              aria-label={label}
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          ))}
        </nav>

        {/* Side Bar (Explorer) - Hidden on mobile */}
        <aside className="hidden md:flex flex-col border-r border-gray-200/60 dark:border-gray-700/60 bg-gray-100/70 dark:bg-[#0f1320]/70">
          <div className="px-3 lg:px-4 py-2 lg:py-3 text-xs font-semibold tracking-wide text-gray-600/90 dark:text-slate-300/90 border-b border-gray-200/60 dark:border-gray-700/60 flex items-center gap-2">
            <ChevronDown className="h-3 w-3 lg:h-3.5 lg:w-3.5" /> EXPLORER
          </div>

          <div className="px-2 lg:px-2.5 py-2 space-y-1.5 lg:space-y-2 text-[12px] lg:text-[13px] text-gray-600/90 dark:text-slate-300/90">
            <div className="flex items-center gap-1.5 text-gray-500/90 dark:text-slate-400/90">
              <ChevronRight className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
              <span className="uppercase tracking-wide text-[10px] lg:text-[11px]">PORTFOLIO</span>
            </div>
            <ExplorerFile name="software-development.tsx" active />
            <ExplorerFile name="language-context.ts" />
            <ExplorerFile name="use-cases.md" />
            <div className="pt-1.5 lg:pt-2">
              <div className="flex items-center gap-1.5 text-gray-500/90 dark:text-slate-400/90">
                <ChevronDown className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                <span className="uppercase tracking-wide text-[10px] lg:text-[11px]">ASSETS</span>
              </div>
              <ExplorerFile name="stack.json" />
              <ExplorerFile name="styles.css" />
            </div>
          </div>
        </aside>

        {/* Main Column */}
        <div className="flex flex-col min-w-0">
          {/* Tabs */}
          <div className="flex items-center gap-1 md:gap-2 px-2 sm:px-4 py-1.5 md:py-2 border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50/60 dark:bg-[#151a28]/60 overflow-x-auto">
            <EditorTab name="software-development.tsx" active />
            <EditorTab name="use-cases.md" />
            <EditorTab name="README.md" />
          </div>

          {/* Editor + Panel wrapper */}
          <div className="grid grid-rows-[1fr_auto] min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
            {/* Editor */}
            <div className="relative">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[12px] text-gray-500 dark:text-slate-400 border-b border-gray-200/60 dark:border-slate-700/60 overflow-x-auto">
                <span className="text-gray-400 dark:text-slate-500">src</span>
                <ChevronRight className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span>components</span>
                <ChevronRight className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span className="text-gray-700 dark:text-slate-200">software-development.tsx</span>
              </div>

              <div className="relative flex">
                {/* Gutter */}
                <ol className="select-none w-8 md:w-10 lg:w-12 xl:w-14 shrink-0 text-right text-[9px] md:text-[10px] leading-3 md:leading-5 pt-2 md:pt-3 pb-4 md:pb-8 px-1 md:px-2 bg-gray-50 dark:bg-[#0c101a] text-gray-500 dark:text-slate-600 border-r border-gray-200/60 dark:border-slate-700/60">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <li key={i} className="tabular-nums">
                      {i + 1}
                    </li>
                  ))}
                </ol>

                {/* Code Area */}
                <div className="relative w-full font-mono text-[9px] md:text-[11px] leading-3 md:leading-5 bg-white dark:bg-[#0d1117] text-gray-800 dark:text-slate-200">
                  {/* Minimap */}
                  <div className="hidden xl:block absolute top-0 right-0 h-full w-12 xl:w-16 opacity-30 bg-gradient-to-b from-gray-300/20 to-gray-400/40 dark:from-slate-700/20 dark:to-slate-900/40 pointer-events-none" />

                  <div className="px-2 md:px-3 pt-2 md:pt-3 pb-4 md:pb-6 space-y-0.5 md:space-y-0.5">
                    {/* Decorative colored bars like VSCode indent guides */}
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-sky-500/0 via-sky-500/40 to-sky-500/0" />

                    <CodeLine>
                      <span className="text-sky-400">const</span> services <span className="text-slate-400">=</span> {"{"}
                    </CodeLine>
                    <CodeLine indent>
                      <span className="text-emerald-400">webDevelopment</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-amber-300"> &quot;Modern web siteleri&quot;</span>
                      <span className="text-slate-400">,</span>
                    </CodeLine>
                    <CodeLine indent>
                      <span className="text-emerald-400">mobileApps</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-amber-300"> &quot;iOS &amp; Android uygulamaları&quot;</span>
                      <span className="text-slate-400">,</span>
                    </CodeLine>
                    <CodeLine indent>
                      <span className="text-emerald-400">customSoftware</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-amber-300"> &quot;Özel yazılım çözümleri&quot;</span>
                      <span className="text-slate-400">,</span>
                    </CodeLine>
                    <CodeLine indent>
                      <span className="text-emerald-400">eCommerce</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-amber-300"> &quot;E-ticaret platformları&quot;</span>
                    </CodeLine>
                    <CodeLine>{"};"}</CodeLine>

                    <div className="mt-4" />
                    <CodeLine>
                      <span className="text-sky-400">export</span> <span className="text-sky-400">default</span> <span className="text-fuchsia-400">function</span> <span className="text-cyan-300">SoftwareService</span>() {"{"}
                    </CodeLine>
                    <CodeLine indent>
                      <span className="text-sky-400">return</span> (
                    </CodeLine>
                    <CodeLine indent level={2}>
                      <span className="text-slate-400">&lt;</span>
                      <span className="text-emerald-400">Section</span>
                      <span className="text-slate-400"> title=</span>
                      <span className="text-amber-300">{t.services.software.title}</span>
                      <span className="text-slate-400"> /&gt;</span>
                    </CodeLine>
                    <CodeLine indent>{")"}</CodeLine>
                    <CodeLine>{"}"}</CodeLine>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel (Terminal) */}
            <div className="border-t border-gray-200/60 dark:border-slate-700/60 bg-gray-100 dark:bg-[#0a0f17]">
              <div className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1 md:py-1.5 text-[9px] md:text-[11px] text-gray-600 dark:text-slate-300 bg-gray-200/80 dark:bg-[#0f1522]/80">
                <TerminalSquare className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium">TERMINAL</span>
                <div className="ml-auto flex items-center gap-2 md:gap-3 text-gray-500 dark:text-slate-400">
                  <Cloud className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  <RefreshCw className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  <Settings className="h-3 w-3 md:h-3.5 md:w-3.5" />
                </div>
              </div>
              <div className="px-2 md:px-3 py-1.5 md:py-2 font-mono text-[9px] md:text-[11px] leading-3 md:leading-4 text-gray-700 dark:text-slate-200">
                <div className="text-emerald-600 dark:text-emerald-400">$ npm run build</div>
                <div className="text-gray-500 dark:text-slate-400">✓ Web sitesi hazır</div>
                <div className="text-emerald-600 dark:text-emerald-400">$ npm run deploy</div>
                <div className="text-gray-500 dark:text-slate-400">✓ Canlıya alındı</div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center gap-1 md:gap-3 px-2 md:px-3 py-0.5 md:py-1 text-[9px] md:text-[11px] text-gray-600 dark:text-slate-300 border-t border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-[#0b0f18]">
            <div className="flex items-center gap-1 md:gap-2">
              <GitCommit className="h-2.5 w-2.5 md:h-3 md:w-3" />
              <span className="hidden sm:inline">main</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Circle className="h-1 w-1 md:h-1.5 md:w-1.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">Live Server</span>
            </div>
            <div className="ml-auto flex items-center gap-1 md:gap-3 text-gray-500 dark:text-slate-400">
              <span className="hidden md:inline">UTF-8</span>
              <span className="hidden lg:inline">LF</span>
              <span className="hidden sm:inline">TypeScript React</span>
              <span className="hidden lg:inline">Prettier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content (marketing) layer floating on editor - responsive card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="pointer-events-auto absolute right-2 sm:right-4 lg:right-6 top-10 sm:top-12 w-[min(260px,80vw)] sm:w-[min(350px,85vw)] lg:w-[min(420px,90vw)] z-20"
      >
        <div className="rounded-lg lg:rounded-xl border border-gray-200/20 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-lg p-2.5 sm:p-3 lg:p-4 shadow-xl">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="p-1.5 sm:p-2 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-md lg:rounded-lg">
              <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-900 dark:text-white mb-0.5">
                {t.services.software.title}
              </h3>
              <span className="inline-block text-[8px] sm:text-[9px] lg:text-[10px] text-sky-600/90 dark:text-sky-300/90 bg-sky-100/60 dark:bg-sky-900/40 px-1 sm:px-1.5 py-0.5 rounded-full">
                Yazılım Geliştirme
              </span>
            </div>
          </div>

          <p className="mt-2 sm:mt-3 text-gray-700/90 dark:text-slate-200/90 leading-relaxed text-[10px] sm:text-xs lg:text-sm">
            {t.services.software.description}
          </p>

          {/* Tech chips */}
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
            {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-gray-300/50 dark:border-slate-600/50 bg-gray-100/60 dark:bg-slate-800/60 text-gray-700 dark:text-slate-200 text-[9px] sm:text-[10px]"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 sm:mt-3 w-full py-2 sm:py-2.5 lg:py-3 rounded-md lg:rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 shadow-lg text-xs sm:text-sm"
          >
            Proje Başlat
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}

function EditorTab({ name, active = false }: { name: string; active?: boolean }) {
  return (
    <button
      className={`group inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-md md:rounded-lg text-[10px] md:text-[12px] border transition ${
        active
          ? "bg-gray-200/70 dark:bg-[#1f2335]/70 border-gray-400/60 dark:border-slate-600/60 text-gray-900 dark:text-slate-100"
          : "bg-transparent border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 hover:bg-gray-200/30 dark:hover:bg-slate-700/30"
      }`}
      aria-pressed={active}
    >
      <Code2 className="h-3 w-3 md:h-3.5 md:w-3.5 text-sky-600 dark:text-sky-300" />
      <span className="truncate max-w-[12ch] md:max-w-[18ch]">{name}</span>
    </button>
  );
}

function ExplorerFile({ name, active = false }: { name: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-md cursor-default ${
        active ? "bg-gray-200/30 dark:bg-slate-700/30 text-gray-900 dark:text-slate-100" : "text-gray-600 dark:text-slate-300 hover:bg-gray-200/30 dark:hover:bg-slate-800/30"
      }`}
    >
      <Files className="h-3 w-3 md:h-3.5 md:w-3.5 text-gray-500 dark:text-slate-400" />
      <span className="truncate text-[11px] md:text-[13px]">{name}</span>
    </div>
  );
}

function CodeLine({ children, indent = false, level = 1 }: { children: React.ReactNode; indent?: boolean; level?: number }): React.JSX.Element {
  return (
    <pre
      className="relative pl-2 md:pl-4 pr-1 md:pr-2 whitespace-pre-wrap break-words [&_span]:align-middle"
      style={{ paddingLeft: indent ? `${level * 16}px` : undefined }}
    >
      {children}
    </pre>
  );
}


