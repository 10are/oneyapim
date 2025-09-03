'use client';

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function ManagementService() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl 
        bg-gradient-to-br from-white via-gray-50 to-white 
        dark:from-gray-900 dark:via-gray-950 dark:to-black
        border border-gray-200 dark:border-gray-800 
        shadow-sm min-h-[400px]"
    >
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t.services.management.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t.services.management.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Sanatçı Yönetimi", text: "Kariyer planlama" },
            { icon: Target, title: "Proje Koordinasyonu", text: "Organizasyon" },
            { icon: TrendingUp, title: "Kariyer Gelişimi", text: "Büyüme stratejisi" },
            { icon: Handshake, title: "Sektör Bağlantıları", text: "Network genişletme" }
          ].map(({ icon: Icon, title, text }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-900 
                border border-gray-200 dark:border-gray-800 
                rounded-2xl p-6 text-center shadow-sm hover:shadow-md 
                transition-all"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center 
                rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white mb-4">
                <Icon className="h-7 w-7" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
