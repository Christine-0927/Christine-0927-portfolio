import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const services = [
  {
    number: '01',
    title: '平面設計',
    subtitle: 'Graphic Design',
    desc: '透過視覺設計整理訊息與建立品牌識別，從品牌形象到行銷宣傳素材，打造兼具美感與溝通力的設計成果。',
    items: [
      '品牌識別設計',
      'Logo 標誌設計',
      '海報與宣傳物設計',
      '廣告與社群媒體視覺',
      '名片與企業識別物',
      '印刷與行銷素材設計',
    ],
    image: '/images/services/Graphic Design.webp',
    accent: '#B07BB3',
  },
  {
    number: '02',
    title: 'UI/UX 設計',
    subtitle: 'UI/UX Design',
    desc: '以使用者需求為核心，規劃清晰的資訊架構與介面體驗，打造兼顧美感與易用性的數位產品。',
    items: [
      '網站介面設計',
      'App 介面設計',
      '資訊架構規劃',
      '使用者流程設計',
      '互動原型製作',
      '響應式網頁設計（RWD）',
    ],
    image: '/images/services/UIUX Design.webp',
    accent: '#B07BB3',
  },
  {
    number: '03',
    title: '3D 創作',
    subtitle: '3D Creation',
    desc: '透過 3D 建模與視覺表現，將概念轉化為更具立體感與吸引力的設計內容，提升品牌與作品的視覺層次。',
    items: [
      '產品與物件建模',
      '角色與場景建模',
      '材質與貼圖製作',
      '燈光與渲染設定',
      '3D 視覺設計',
      '情境模擬與展示',
    ],
    image:'/images/services/3D Creation.webp',
    accent: '#B07BB3',
  },
  {
    number: '04',
    title: '動態設計',
    subtitle: 'Motion Graphics',
    desc: '結合動畫與影像剪輯，讓資訊與品牌故事以更生動的方式呈現，提升內容的吸引力與傳達效果。',
    items: [
      '2D 動態圖像設計',
      '品牌動態視覺',
      '文字動畫設計',
      '影片剪輯與後製',
      '轉場與視覺特效',
      '宣傳影片製作',
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&h=500&fit=crop&auto=format',
    accent: '#B07BB3',
  },
];

const process = [
  { step: '01', title: '需求討論', desc: '了解專案需求、目標與期望方向，建立合作共識。' },
  { step: '02', title: '規劃發想', desc: '整理資訊與設計方向，探索適合的視覺表現方式。' },
  { step: '03', title: '設計製作', desc: '依據規劃內容進行設計，逐步將想法轉化為具體成果。' },
  { step: '04', title: '調整優化', desc: '根據回饋進行修改與細節調整，讓設計更加完善。' },
  { step: '05', title: '交付完成', desc: '提供最終設計檔案與相關資料，完成專案交付。' },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans TC', sans-serif" }} className="pt-24">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p
            className="mb-4 tracking-widest uppercase"
            style={{ fontSize: '14px', color: '#B07BB3', letterSpacing: '0.2em' }}
          >
            Services
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: '#212121', lineHeight: 1.25 }}
            >
              <span style={{ fontWeight: 600, color: '#664077' }}>服務項目</span>
            </h1>
            <p
              className="max-w-md"
              style={{ fontSize: '16px', color: '#474747', lineHeight: 1.85, fontWeight: 400 }}
            >
              涵蓋平面設計、UI/UX 設計、3D 創作與動態設計，透過不同的設計形式，將想法轉化為美感與實用性兼具的設計成果。
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="flex flex-col gap-8">
          {services.map((service, i) => {
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
                    style={{ background: '#F8F8F8'}}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"                      
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="p-8 lg:p-12 flex flex-col justify-center"
                    style={{ background: '#fff' }}
                  >                    
                    <p style={{ fontSize: '14px', color: service.accent, letterSpacing: '0.15em', marginBottom: '8px' }}>
                      {service.subtitle}
                    </p>
                    <h2
                      className="mb-4"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 600, color: '#212121' }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="mb-7"
                      style={{ fontSize: '16px', color: '#474747', lineHeight: 1.9, fontWeight: 400 }}
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
                          <span style={{ fontSize: '14px', color: '#474747' }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 self-start transition-all duration-300 group"
                      style={{ textDecoration: 'none', color: service.accent, fontSize: '14px', fontWeight: 500 }}
                    >
                      詢問此服務
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
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
        className="py-20"
        style={{ background: 'rgba(250, 250, 248, 1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '14px', color: '#B07BB3', letterSpacing: '0.2em' }}
            >
              Process
            </p>
            <h2
              className="mb-16"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, color: '#212121', lineHeight: 1.25 }}
            >
              <span style={{ fontWeight: 600, color: '#664077' }}>合作流程</span>
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
                    style={{
                      fontSize: '36px',
                      fontWeight: 900,
                      color: 'rgba(176,123,179,0.18)',
                      lineHeight: 1,
                      marginBottom: '16px',
                    }}
                  >
                    {step}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '8px' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#474747', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
