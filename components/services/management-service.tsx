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
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-lime-900/20 border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 min-h-[500px]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-500 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-lime-500 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.div 
            className="p-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="h-8 w-8 text-white" />
          </motion.div>
          <div className="text-right">
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
              Sanatçı Yönetimi
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t.services.management.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
          {t.services.management.description}
        </p>

        {/* Visual Elements */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            <motion.div
              className="bg-white/80 dark:bg-black/20 rounded-2xl p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sanatçı Yönetimi</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Kariyer planlama</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 dark:bg-black/20 rounded-2xl p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Proje Koordinasyonu</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Organizasyon</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 dark:bg-black/20 rounded-2xl p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TrendingUp className="h-12 w-12 text-lime-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kariyer Gelişimi</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Büyüme stratejisi</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 dark:bg-black/20 rounded-2xl p-6 text-center shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Handshake className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sektör Bağlantıları</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Network genişletme</p>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-lg"
        >
          Danışmanlık Al
        </motion.button>
      </div>
    </motion.div>
  );
}
