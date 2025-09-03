'use client';

import { motion } from 'framer-motion';
import { Mic, Video, Headphones, Volume2, Music, Radio } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function StudioService() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-purple-900 to-black dark:from-black dark:via-purple-900 dark:to-gray-900 border border-purple-700 dark:border-purple-600 min-h-[600px]"
    >
      {/* Studio Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M40%2040c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20zm0%200c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20-8.954-20-20-20-20%208.954-20%2020z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      {/* Sound Waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-1/4 w-1 h-32 bg-purple-400 rounded-full"
          animate={{ 
            height: [32, 64, 32, 48, 32],
            opacity: [0.3, 0.8, 0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-1 h-24 bg-pink-400 rounded-full"
          animate={{ 
            height: [24, 48, 24, 40, 24],
            opacity: [0.3, 0.8, 0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-1 h-40 bg-blue-400 rounded-full"
          animate={{ 
            height: [40, 80, 40, 60, 40],
            opacity: [0.3, 0.8, 0.3, 0.6, 0.3]
          }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-1 h-28 bg-green-400 rounded-full"
          animate={{ 
            height: [28, 56, 28, 44, 28],
            opacity: [0.3, 0.8, 0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-1 h-36 bg-yellow-400 rounded-full"
          animate={{ 
            height: [36, 72, 36, 52, 36],
            opacity: [0.3, 0.8, 0.3, 0.6, 0.3]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
        />
      </div>

      <div className="p-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mic className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {t.services.studio.title}
                </h3>
                <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                  Prodüksiyon Stüdyosu
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {t.services.studio.description}
            </p>

            {/* Studio Features */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Stüdyo Özellikleri:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-purple-600">
                  <Mic className="h-5 w-5 text-purple-400" />
                  <div>
                    <span className="text-white font-medium">Profesyonel Ses Kayıt</span>
                    <p className="text-gray-400 text-sm">Yüksek kaliteli mikrofonlar ve ses izolasyonu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-pink-600">
                  <Video className="h-5 w-5 text-pink-400" />
                  <div>
                    <span className="text-white font-medium">Video Prodüksiyon</span>
                    <p className="text-gray-400 text-sm">4K kameralar ve profesyonel ışıklandırma</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-blue-600">
                  <Headphones className="h-5 w-5 text-blue-400" />
                  <div>
                    <span className="text-white font-medium">Post-Prodüksiyon</span>
                    <p className="text-gray-400 text-sm">Adobe Premiere, After Effects ile düzenleme</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-green-600">
                  <Volume2 className="h-5 w-5 text-green-400" />
                  <div>
                    <span className="text-white font-medium">Mixing & Mastering</span>
                    <p className="text-gray-400 text-sm">Pro Tools ile profesyonel ses işleme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Studio Image */}
          <div className="relative">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Music Studio"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Studio Equipment Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-purple-600">
                  <div className="flex items-center space-x-2 mb-2">
                    <Volume2 className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-400 font-semibold text-sm">Mixing Console</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-xs">Vokal</span>
                      <div className="flex space-x-1">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-4 bg-purple-400 rounded-sm"
                            animate={{ 
                              height: [4, Math.random() * 12 + 4, 4],
                              opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: i * 0.1 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-xs">Müzik</span>
                      <div className="flex space-x-1">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-4 bg-pink-400 rounded-sm"
                            animate={{ 
                              height: [4, Math.random() * 12 + 4, 4],
                              opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{ 
                              duration: 1.8, 
                              repeat: Infinity, 
                              delay: i * 0.1 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 text-purple-400 opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Music className="h-8 w-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-pink-400 opacity-30"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Radio className="h-6 w-6" />
      </motion.div>
    </motion.div>
  );
}
