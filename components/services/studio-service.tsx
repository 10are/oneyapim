'use client';

import { motion } from 'framer-motion';
import { Play, Pause, StopCircle, Mic, Scissors, Save, Volume2 } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function StudioServicePanel() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl lg:rounded-3xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-xl min-h-[280px] md:min-h-[500px] lg:min-h-[600px] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center space-x-1.5 md:space-x-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
          {t.services.studio.title}
        </span>
        <div />
      </div>

      {/* Info Text */}
      <div className="px-3 md:px-6 py-2 md:py-4 border-b border-gray-200 dark:border-gray-700 hidden md:block">
        <h3 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
          Prodüksiyon Paneli
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
          {t.services.studio.description} – Bu panel üzerinden kayıt yapabilir, kesme/düzenleme
          işlemleri gerçekleştirebilir, miksaj ve mastering kontrollerini yönetebilirsiniz.
        </p>
      </div>

      {/* Track Section - Hidden on Mobile */}
      <div className="flex-1 p-2 md:p-4 overflow-auto space-y-1 md:space-y-4 hidden md:block">
        {["Vokal", "Müzik", "Efekt"].map((track, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1.5 md:p-3">
            <div className="flex items-center justify-between mb-1 md:mb-2">
              <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">{track}</span>
              <button className="text-[10px] md:text-xs text-purple-500 hover:underline">Mute</button>
            </div>
            {/* Waveform Placeholder */}
            <div className="relative h-8 md:h-16 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full w-0.5 md:w-1 bg-purple-500"
                animate={{ x: [0, 200, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-0 flex items-center space-x-0.5 md:space-x-1 px-1 md:px-2">
                {[...Array(40)].map((_, j) => {
                  // Sabit değerler kullanarak hydration hatasını önle
                  const heights = [25, 45, 35, 60, 20, 50, 40, 30, 55, 15, 65, 25, 45, 35, 50, 20, 40, 30, 55, 25, 45, 35, 60, 20, 50, 40, 30, 55, 15, 65, 25, 45, 35, 50, 20, 40, 30, 55, 25, 45];
                  return (
                    <div
                      key={j}
                      className="w-0.5 md:w-1 rounded-sm bg-purple-400/50 dark:bg-purple-300/50"
                      style={{ height: `${heights[j]}%` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Timeline Section */}
      <div className="flex-1 p-3 md:hidden">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
          Sahne Zaman Çizelgesi
        </h3>
        <div className="space-y-3">
          <TimelineItem time="16:00" title="Sahne Kurulumu" status="Tamamlandı" />
          <TimelineItem time="17:30" title="Ses & Işık Testi" status="Devam Ediyor" />
          <TimelineItem time="19:00" title="Kapı Açılışı" status="Hazırlanıyor" />
          <TimelineItem time="20:30" title="Konser" status="Planlandı" />
        </div>
      </div>

      {/* Controls - Hidden on Mobile */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-1.5 md:p-4 bg-gray-50 dark:bg-gray-800 hidden md:block">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-red-500 text-white"><Mic className="h-5 w-5" /></button>
            <button className="p-2 rounded-full bg-purple-500 text-white"><Play className="h-5 w-5" /></button>
            <button className="p-2 rounded-full bg-yellow-500 text-white"><Pause className="h-5 w-5" /></button>
            <button className="p-2 rounded-full bg-gray-700 text-white"><StopCircle className="h-5 w-5" /></button>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-blue-500 text-white"><Scissors className="h-5 w-5" /></button>
            <button className="p-2 rounded-full bg-green-500 text-white"><Save className="h-5 w-5" /></button>
            <button className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white"><Volume2 className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItem({ time, title, status }: { time: string; title: string; status: string }) {
  return (
    <div className="flex items-center gap-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="text-xs font-mono text-gray-500 dark:text-gray-400 w-12">{time}</div>
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white">{title}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Ana sahne</div>
      </div>
      <div className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
        {status}
      </div>
    </div>
  );
}
