import { Link } from 'react-router';
import { ArrowRight, Layers, Monitor, Box, Play } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const services = [
  {
    icon: Layers,
    number: '01',
    title: '平面設計',
    subtitle: 'Graphic Design',
    desc: '從品牌識別到印刷品設計，以精準的視覺語言傳遞品牌核心價值。每一條線條、每一種色彩都是為品牌量身打造的故事。',
    items: [
      'Logo 標誌設計',
      '品牌識別系統',
      '名片 · 信封 · 信紙設計',
      '海報 · 傳單設計',
      '包裝設計',
      '展場視覺設計',
      '書籍 · 雜誌排版',
      '社群媒體視覺設計',
    ],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700&h=500&fit=crop&auto=format',
    accent: '#B07BB3',
  },
  {
    icon: Monitor,
    number: '02',
    title: 'UI/UX 設計',
    subtitle: 'UI/UX Design',
    desc: '以用戶為中心的設計思維，打造直覺流暢的數位體驗。從使用者研究到高擬真原型，每一個互動設計都追求功能與美感的完美平衡。',
    items: [
      '使用者研究與分析',
      '資訊架構規劃',
      '線框圖設計',
      '高擬真度原型',
      'App 介面設計',
      'Web 網站介面設計',
      '設計系統建立',
      '可用性測試',
    ],
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=700&h=500&fit=crop&auto=format',
    accent: '#664077',
  },
  {
    icon: Box,
    number: '03',
    title: '3D 創作',
    subtitle: '3D Creation',
    desc: '運用業界頂尖的 3D 軟體，為產品注入超越平面的視覺魅力。精密的材質模擬與燈光設計，讓每一個像素都充滿真實感與藝術性。',
    items: [
      '產品 3D 建模',
      '建築視覺化',
      '角色設計與建模',
      '材質 · 貼圖製作',
      '3D 場景渲染',
      'AR 素材製作',
      '展場 3D 視覺',
      '創意 3D 插畫',
    ],
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=700&h=500&fit=crop&auto=format',
    accent: '#B07BB3',
  },
  {
    icon: Play,
    number: '04',
    title: '動態設計',
    subtitle: 'Motion Graphics',
    desc: '讓設計在時間軸上流動，以動態敘說品牌故事。從 Logo 動態演繹到完整影片製作，每一幀都是精心設計的視覺詩篇。',
    items: [
      'Logo 動態設計',
      '品牌動態識別',
      '社群動態貼文',
      '廣告影片製作',
      '展場影像投映',
      '片頭片尾設計',
      '資訊圖表動態',
      'MV 視覺設計',
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&h=500&fit=crop&auto=format',
    accent: '#664077',
  },
];

const process = [
  { step: '01', title: '了解需求', desc: '深入溝通品牌背景、目標受眾與設計目標，確立專案方向。' },
  { step: '02', title: '創意發想', desc: '蒐集靈感素材，進行多方向概念發展與草圖探索。' },
  { step: '03', title: '設計提案', desc: '提交 2-3 個設計方向，附上詳細設計說明與視覺展示。' },
  { step: '04', title: '修改完稿', desc: '根據客戶回饋進行修改調整，直至雙方滿意為止。' },
  { step: '05', title: '交付驗收', desc: '整理完整設計檔案，提供使用說明，確保完美交接。' },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans TC', sans-serif" }} className="pt-24">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p
            className="mb-4 tracking-widest uppercase"
            style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
          >
            Services
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, color: '#212121', lineHeight: 1.15 }}
            >
              服務<span style={{ fontWeight: 700, color: '#664077' }}>項目</span>
            </h1>
            <p
              className="max-w-md"
              style={{ fontSize: '16px', color: '#5A5A5A', lineHeight: 1.85, fontWeight: 300 }}
            >
              提供四大核心設計服務，每一項目都以最高的專業標準與滿滿的創意熱情為您打造。
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="flex flex-col gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={service.number} delay={i * 60}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden transition-all duration-400 hover:-translate-y-1`}
                  style={{
                    boxShadow: '0 8px 48px rgba(102,64,119,0.1)',
                    border: '1px solid rgba(176,123,179,0.1)',
                  }}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${!isEven ? 'lg:order-last' : ''}`}
                    style={{ aspectRatio: '16/10', minHeight: '280px' }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      style={{ filter: 'grayscale(15%)' }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${service.accent}30, transparent)` }}
                    />
                    <div
                      className="absolute top-6 left-6 px-4 py-2 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    >
                      <span style={{ color: '#fff', fontSize: '12px', letterSpacing: '0.12em', fontWeight: 500 }}>
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="p-8 lg:p-12 flex flex-col justify-center"
                    style={{ background: '#fff' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ background: `${service.accent}15` }}
                    >
                      <Icon size={22} color={service.accent} />
                    </div>

                    <p style={{ fontSize: '11px', color: service.accent, letterSpacing: '0.15em', marginBottom: '8px' }}>
                      {service.subtitle}
                    </p>
                    <h2
                      className="mb-4"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#212121' }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="mb-7"
                      style={{ fontSize: '15px', color: '#5A5A5A', lineHeight: 1.9, fontWeight: 300 }}
                    >
                      {service.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: service.accent }}
                          />
                          <span style={{ fontSize: '13px', color: '#5A5A5A' }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 self-start transition-all duration-300 group"
                      style={{ textDecoration: 'none', color: service.accent, fontSize: '14px', fontWeight: 500 }}
                    >
                      詢問此服務
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(180deg, #FAFAF8 0%, #F8F4F9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
            >
              Process
            </p>
            <h2
              className="mb-16"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, color: '#212121' }}
            >
              合作<span style={{ fontWeight: 700, color: '#664077' }}>流程</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map(({ step, title, desc }, i) => (
              <ScrollReveal key={step} delay={i * 70}>
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(176,123,179,0.12)',
                    boxShadow: '0 4px 24px rgba(176,123,179,0.06)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, #B07BB3, #664077)' }}
                  >
                    <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>{step}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#212121', marginBottom: '8px' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#8B7A8B', lineHeight: 1.8 }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <p
            className="mb-4 tracking-widest uppercase"
            style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
          >
            Ready to Start
          </p>
          <h2
            className="mb-5"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 300, color: '#212121' }}
          >
            一起打造您的<span style={{ fontWeight: 700, color: '#664077' }}>品牌故事</span>
          </h2>
          <p
            className="mb-8 max-w-lg mx-auto"
            style={{ fontSize: '16px', color: '#5A5A5A', lineHeight: 1.85, fontWeight: 300 }}
          >
            對我的服務感興趣嗎？歡迎與我聯繫，讓我們一同聊聊您的品牌需求。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #B07BB3, #664077)',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            聯繫我
            <ArrowRight size={15} />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
