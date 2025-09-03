'use client';

import { useLanguage } from '@/contexts/language-context';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Calendar, Code, Users, Mic, 
  Target, Eye, Award, CheckCircle, Star,
  Mail, Phone, MapPin, Send, Github, Linkedin, Twitter,
  Globe, Rocket, Shield, Cpu, Database, Cloud, Music, Video, Headphones
} from 'lucide-react';
import OrganizationService from '@/components/services/organization-service';
import SoftwareService from '@/components/services/software-service';
import { ManagementService } from '@/components/services/management-service';
import { StudioService } from '@/components/services/studio-service';
import { useState, useRef } from 'react';
import React from 'react';

export default function HomePage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  const services = [
    {
      icon: Calendar,
      title: t.services.organization.title,
      description: t.services.organization.description,
      features: ['Tiyatro Etkinlikleri', 'Konser Organizasyonu', 'Stand-up Gösterileri', 'Sahne Yönetimi'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Code,
      title: t.services.software.title,
      description: t.services.software.description,
      features: ['Web Siteleri', 'Mobil Uygulamalar', 'Özel Yazılım', 'E-ticaret'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: t.services.management.title,
      description: t.services.management.description,
      features: ['Sanatçı Yönetimi', 'Kariyer Planlama', 'Proje Koordinasyonu', 'Sektör Bağlantıları'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Mic,
      title: t.services.studio.title,
      description: t.services.studio.description,
      features: ['Ses Kayıt', 'Video Prodüksiyon', 'Post-Prodüksiyon', 'Mixing & Mastering'],
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const stats = [
    { number: '100+', label: 'Etkinlik', icon: Calendar },
    { number: '50+', label: 'Yazılım Projesi', icon: Code },
    { number: '30+', label: 'Sanatçı', icon: Users },
    { number: '5+', label: 'Yıllık Deneyim', icon: Award }
  ];

  const technologies = [
    { name: 'React', icon: Cpu },
    { name: 'Next.js', icon: Globe },
    { name: 'Node.js', icon: Database },
    { name: 'TypeScript', icon: Code },
    { name: 'Pro Tools', icon: Music },
    { name: 'Adobe Premiere', icon: Video }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-slate-900 text-gray-900 dark:text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-slate-900" />
        <motion.div 
          style={{ y, rotate }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200/10 dark:from-slate-800/10 via-transparent to-transparent"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%231f2937%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="mb-6">
                  <img
                    src="/logooneyapim.jpg"
                    alt="OneYapim Logo"
                    className="w-24 h-24 rounded-lg shadow-2xl"
                  />
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <motion.span 
                  className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 dark:from-white dark:via-gray-200 dark:to-slate-200 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {t.hero.title}
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light"
              >
                {t.hero.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                {t.hero.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-slate-600 to-slate-700 dark:from-blue-600 dark:to-cyan-600 rounded-full shadow-2xl hover:shadow-slate-500/25 dark:hover:shadow-blue-500/25 transition-all duration-300 border border-white/10"
                >
                  <span className="relative z-10">{t.hero.cta}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 dark:from-blue-700 dark:to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white border-2 border-slate-400 dark:border-blue-400 rounded-full hover:bg-slate-100 dark:hover:bg-blue-400/10 transition-all duration-300"
                >
                  <span>{t.navigation.contact}</span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Creative Studio"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-transparent rounded-2xl"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-slate-400/20 to-gray-400/20 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-gray-400/20 to-zinc-400/20 dark:from-gray-500/20 dark:to-slate-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-neutral-400/15 to-stone-400/15 dark:from-purple-500/15 dark:to-pink-500/15 rounded-full blur-lg"
        />
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t.services.title}
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>



          {/* Services Stack */}
          <div className="space-y-16">
            <OrganizationService />
            <SoftwareService />
            <ManagementService />
            <StudioService />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {t.about.title}
                </motion.span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t.about.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t.about.mission}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t.about.missionText}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-xl">
                    <Eye className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {t.about.vision}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t.about.visionText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Creative Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">İletişim Bilgileri</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {t.contact.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                  <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                    <Mail className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 dark:text-white font-medium text-lg">E-posta</div>
                    <div className="text-gray-600 dark:text-gray-300">info@oneyapim.com</div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                  <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                    <Phone className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 dark:text-white font-medium text-lg">Telefon</div>
                    <div className="text-gray-600 dark:text-gray-300">+90 (212) 123 45 67</div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                  <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl">
                    <MapPin className="h-8 w-8 text-orange-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 dark:text-white font-medium text-lg">Adres</div>
                    <div className="text-gray-600 dark:text-gray-300">İstanbul, Türkiye</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Sosyal Medya</h4>
                <div className="flex justify-center space-x-6">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="p-4 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all"
                  >
                    <Github className="h-8 w-8 text-gray-700 dark:text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="p-4 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all"
                  >
                    <Linkedin className="h-8 w-8 text-gray-700 dark:text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="p-4 bg-gray-50/50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all"
                  >
                    <Twitter className="h-8 w-8 text-gray-700 dark:text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
