'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  Theater,
  Music,
  Mic2,
  Star,
  Users,
  MapPin,
  Ticket,
  ShieldCheck,
  Clock3,
  Volume2,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  QrCode,
  ChevronRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

/**
 * OrganizationService – Backstage Kontrol Paneli
 * VSCode kalitesinde, sahne/etkinlik temalı, modern ve şık bir düzen.
 * - Üstte neon sahne ışıkları ve başlık barı
 * - Solda Event Nav (kategori ikonları)
 * - Orta: Zaman Çizelgesi + Görevler + Metrikler (Bilet, Kapasite…)
 * - Altta check-in/terminal benzeri panel
 */
export default function OrganizationServicePanel() {
  const { t } = useLanguage();

  const salesData = [
    { day: 'Pzt', sold: 120 },
    { day: 'Sal', sold: 180 },
    { day: 'Çar', sold: 150 },
    { day: 'Per', sold: 220 },
    { day: 'Cum', sold: 260 },
    { day: 'Cts', sold: 300 },
    { day: 'Paz', sold: 210 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-purple-300/50 dark:border-purple-600/50 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#18081f] dark:via-[#1a0e22] dark:to-[#2a0f17] shadow-2xl"
    >
      {/* Neon stage lights */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-fuchsia-300 dark:bg-fuchsia-500 blur-[100px] opacity-20 dark:opacity-30" />
        <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-amber-300 dark:bg-amber-400 blur-[120px] opacity-15 dark:opacity-25" />
        <div className="absolute bottom-[-4rem] left-1/3 h-72 w-72 rounded-full bg-red-300 dark:bg-red-500 blur-[120px] opacity-10 dark:opacity-20" />
      </div>

      {/* Title bar */}
      <div className="relative z-10 flex items-center gap-3 px-5 sm:px-6 py-3 border-b border-purple-300/40 dark:border-purple-700/40 bg-purple-100/30 dark:bg-black/30 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <div className="flex items-center gap-2 text-purple-800/90 dark:text-slate-200/90 text-sm">
          <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-300" />
          <span className="font-semibold">{t?.services?.organization?.title ?? 'Etkinlik Organizasyonu'}</span>
          <span className="text-purple-500 dark:text-slate-500">—</span>
          <span className="truncate max-w-[22ch] text-purple-600/80 dark:text-slate-300/80">{t?.services?.organization?.description ?? 'Planlama, prodüksiyon ve yönetim'}</span>
        </div>
        <button className="ml-auto text-xs text-purple-700/90 dark:text-slate-300/90 rounded-md border border-purple-300/20 dark:border-white/10 px-2 py-1 hover:bg-purple-200/50 dark:hover:bg-white/5 transition">Yeni Etkinlik</button>
      </div>

      {/* Shell */}
      <div className="relative z-10 grid grid-cols-[64px_1fr] xl:grid-cols-[80px_1fr] min-h-[680px]">
        {/* Left rail */}
        <nav className="flex flex-col items-center gap-5 py-4 border-r border-purple-300/40 dark:border-purple-700/40 bg-purple-100/30 dark:bg-black/30">
          {[
            { icon: Calendar, label: 'Takvim', active: true },
            { icon: Theater, label: 'Tiyatro' },
            { icon: Music, label: 'Konser' },
            { icon: Mic2, label: 'Stand-up' },
            { icon: Users, label: 'Ekip' },
            { icon: ShieldCheck, label: 'Güvenlik' },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`group p-2.5 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40 ${
                active
                  ? 'bg-gradient-to-b from-purple-300/40 to-purple-400/40 dark:from-purple-700/40 dark:to-purple-900/40 text-fuchsia-600 dark:text-fuchsia-300'
                  : 'text-purple-600 dark:text-slate-400 hover:bg-purple-200/30 dark:hover:bg-purple-900/20 hover:text-purple-800 dark:hover:text-slate-200'
              }`}
              aria-pressed={active}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </nav>

        {/* Main column */}
        <div className="flex flex-col min-w-0">
          {/* Breadcrumbs / filters */}
          <div className="flex items-center gap-2 px-4 py-2 text-[12px] text-purple-600/80 dark:text-slate-300/80 border-b border-purple-300/40 dark:border-purple-700/40 bg-purple-50/20 dark:bg-black/20">
            <span className="text-purple-500 dark:text-slate-500">Etkinlikler</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-purple-700 dark:text-slate-200">Haftalık Plan</span>
            <div className="ml-auto flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>Bu Hafta</span>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-3 gap-6 p-5">
            {/* Timeline card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-2 rounded-2xl border border-purple-200/20 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock3 className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                <h4 className="text-purple-800 dark:text-slate-100 font-semibold">Sahne Zaman Çizelgesi</h4>
              </div>
              <div className="space-y-4">
                <TimelineItem time="16:00" title="Sahne Kurulumu" icon={Lightbulb} status="Tamamlandı" color="text-emerald-400" />
                <TimelineItem time="17:30" title="Ses & Işık Testi" icon={Volume2} status="Devam Ediyor" color="text-amber-400" pulse />
                <TimelineItem time="19:00" title="Kapı Açılışı" icon={Users} status="Hazırlanıyor" color="text-sky-300" />
                <TimelineItem time="20:30" title="Konser" icon={Music} status="Planlandı" color="text-fuchsia-300" />
              </div>
            </motion.div>

            {/* Metrics card - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-2xl border border-purple-200/20 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5 hidden md:block"
            >
              <div className="flex items-center gap-2 mb-4">
                <Ticket className="h-5 w-5 text-fuchsia-600 dark:text-fuchsia-300" />
                <h4 className="text-purple-800 dark:text-slate-100 font-semibold">Bilet Satışı</h4>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} barCategoryGap={6}>
                    <XAxis dataKey="day" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} width={28} />
                    <Tooltip
                      contentStyle={{ background: 'rgba(17, 24, 39, 0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
                      labelStyle={{ color: '#E5E7EB' }}
                      itemStyle={{ color: '#E879F9' }}
                    />
                    <Bar dataKey="sold" radius={[8, 8, 8, 8]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs text-purple-600 dark:text-slate-300">
                <Metric label="Toplam" value="1.440" />
                <Metric label="Doluluk" value="%85" />
                <Metric label="Kalan" value="260" />
              </div>
            </motion.div>

            {/* Cards row - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="lg:col-span-3 grid md:grid-cols-3 gap-6 hidden md:grid"
            >
              <InfoCard
                title="Mekan"
                icon={MapPin}
                accent="from-fuchsia-500/30 to-purple-500/20"
                items={[
                  { k: 'Salon', v: 'Atlas Arena' },
                  { k: 'Adres', v: 'İstiklal Cd. 123' },
                  { k: 'Kapasite', v: '1.700' },
                ]}
              />
              <InfoCard
                title="Güvenlik"
                icon={ShieldCheck}
                accent="from-emerald-500/30 to-teal-500/20"
                items={[
                  { k: 'Personel', v: '24/24 hazır' },
                  { k: 'Acil Çıkış', v: 'Kontrol edildi' },
                  { k: 'Sağlık', v: '2 ambulans' },
                ]}
              />
              <InfoCard
                title="VIP"
                icon={Star}
                accent="from-amber-500/30 to-orange-500/20"
                items={[
                  { k: 'Konuklar', v: '12' },
                  { k: 'Lounge', v: 'Hazır' },
                  { k: 'Transfer', v: 'Planlandı' },
                ]}
              />
            </motion.div>
          </div>

          {/* Bottom panel: Check-in / Terminal */}
          <div className="border-t border-purple-300/40 dark:border-purple-700/40 bg-purple-100/30 dark:bg-black/30">
            <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[12px] text-purple-700 dark:text-slate-300">
              <QrCode className="h-3 w-3 md:h-4 md:w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="font-medium">CHECK-IN PANELİ</span>
              <div className="ml-auto flex items-center gap-2 md:gap-4 text-purple-600 dark:text-slate-400">
                <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-amber-600 dark:text-amber-300" />
                <span className="hidden md:inline">Giriş yoğunluğu bekleniyor (19:00)</span>
                <span className="md:hidden">Yoğunluk (19:00)</span>
              </div>
            </div>
            <div className="px-3 md:px-4 py-2 md:py-3 font-mono text-[10px] md:text-[12.5px] leading-4 md:leading-6 text-purple-800 dark:text-slate-200">
              <div className="text-emerald-600 dark:text-emerald-400"># QR okutuldu → Sıra 10234</div>
              <div className="text-purple-600 dark:text-slate-400 hidden md:block">✓ Erkenden gelenler için ayrı hat açıldı</div>
              <div className="text-emerald-600 dark:text-emerald-400"># QR okutuldu → Sıra 10235</div>
              <div className="text-purple-600 dark:text-slate-400 hidden md:block">✓ Güvenlik kontrolü hızlı</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function TimelineItem({ time, title, icon: Icon, status, color, pulse }: { time: string; title: string; icon: any; status: string; color?: string; pulse?: boolean }) {
  return (
    <div className="grid grid-cols-[72px_1fr_auto] items-center gap-3">
      <div className="text-purple-500 dark:text-slate-400 text-sm tabular-nums">{time}</div>
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 ${color ?? 'text-purple-600 dark:text-slate-300'}`} />
        <div>
          <div className="text-purple-800 dark:text-slate-100 font-medium">{title}</div>
          <div className="text-purple-500 dark:text-slate-400 text-xs">Ana sahne</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className={`px-2 py-0.5 rounded-full border border-purple-200/20 dark:border-white/10 bg-purple-100/50 dark:bg-white/5 ${pulse ? 'animate-pulse' : ''}`}>{status}</span>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-purple-200/20 dark:border-white/10 bg-purple-100/50 dark:bg-white/5 p-2">
      <div className="text-[10px] text-purple-500 dark:text-slate-400">{label}</div>
      <div className="text-sm font-semibold text-purple-800 dark:text-slate-100">{value}</div>
    </div>
  );
}

function InfoCard({ title, icon: Icon, accent, items }: { title: string; icon: any; accent: string; items: { k: string; v: string }[] }) {
  return (
    <div className="rounded-2xl border border-purple-200/20 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5 relative overflow-hidden">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} aria-hidden />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="h-5 w-5 text-purple-600 dark:text-white" />
          <h5 className="text-purple-800 dark:text-slate-100 font-semibold">{title}</h5>
        </div>
        <ul className="space-y-1.5 text-sm">
          {items.map((it) => (
            <li key={it.k} className="flex items-center justify-between">
              <span className="text-purple-600/90 dark:text-slate-300/90">{it.k}</span>
              <span className="text-purple-800 dark:text-slate-100 font-medium">{it.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
