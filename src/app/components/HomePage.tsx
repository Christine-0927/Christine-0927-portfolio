import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { works } from '../data/works';

const services = [
  {
    number: '01',
    title: '平面設計',
    desc: '品牌識別、海報設計、印刷品設計，以視覺語言傳遞品牌靈魂。',
  },
  {
    number: '02',
    title: 'UI/UX 設計',
    desc: '直覺、溫暖的數位介面設計，讓每次互動都成為美好體驗。',
  },
  {
    number: '03',
    title: '3D 創作',
    desc: '精密建模與渲染，賦予產品超越現實的視覺魅力。',
  },
  {
    number: '04',
    title: '動態設計',
    desc: '讓品牌在時間維度中呼吸，以動態敘說品牌故事。',
  },
];

function FeaturedWorksCarousel() {
  const CARDS_PER_PAGE_DESKTOP = 3;
  const totalPages = Math.ceil(works.length / CARDS_PER_PAGE_DESKTOP);
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const visibleWorks = works.slice(
    page * CARDS_PER_PAGE_DESKTOP,
    page * CARDS_PER_PAGE_DESKTOP + CARDS_PER_PAGE_DESKTOP,
  );

  return (
    <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
      {/* Header */}
      <ScrollReveal>
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
            >
              Featured Works
            </p>
            <h2
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 300, color: '#212121', lineHeight: 1.25 }}
            >
              精選<span style={{ fontWeight: 700, color: '#664077' }}>作品集</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <span style={{ fontSize: '13px', color: '#8B7A8B', marginRight: '4px' }}>
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: canPrev ? '#fff' : '#F4EEF5',
                border: `1px solid ${canPrev ? 'rgba(176,123,179,0.3)' : 'rgba(176,123,179,0.1)'}`,
                boxShadow: canPrev ? '0 4px 16px rgba(176,123,179,0.15)' : 'none',
                cursor: canPrev ? 'pointer' : 'not-allowed',
                transform: canPrev ? undefined : undefined,
              }}
              onMouseEnter={e => { if (canPrev) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
            >
              <ChevronLeft size={18} color={canPrev ? '#664077' : '#C0A8C2'} />
            </button>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={!canNext}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: canNext ? 'linear-gradient(135deg, #B07BB3, #664077)' : '#F4EEF5',
                border: `1px solid ${canNext ? 'transparent' : 'rgba(176,123,179,0.1)'}`,
                boxShadow: canNext ? '0 4px 16px rgba(102,64,119,0.25)' : 'none',
                cursor: canNext ? 'pointer' : 'not-allowed',
              }}
              onMouseEnter={e => { if (canNext) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
            >
              <ChevronRight size={18} color={canNext ? '#fff' : '#C0A8C2'} />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Carousel track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500"
          style={{ willChange: 'opacity', opacity: 1 }}
        >
          {visibleWorks.map((work, i) => (
            <div
              key={work.id}
              style={{
                opacity: 0,
                animation: `fadeSlideIn 0.5s ease forwards`,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <Link
                to={`/portfolio/${work.id}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-400"
                style={{
                  textDecoration: 'none',
                  background: '#fff',
                  border: '1px solid rgba(176,123,179,0.1)',
                  boxShadow: '0 4px 28px rgba(102,64,119,0.08)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 20px 60px rgba(102,64,119,0.16)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 28px rgba(102,64,119,0.08)';
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'grayscale(35%)', transition: 'transform 0.7s ease, filter 0.5s ease' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(35%)'; }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(102,64,119,0.25)', backdropFilter: 'blur(2px)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
                    >
                      <ArrowUpRight size={18} color="#664077" />
                    </div>
                  </div>
                  {/* Category */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '10px',
                      color: '#664077',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                    }}
                  >
                    {work.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#212121', marginBottom: '4px', lineHeight: 1.4 }}>
                    {work.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#8B7A8B', marginBottom: '12px' }}>
                    {work.year} · {work.client}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(176,123,179,0.1)', color: '#B07BB3', fontSize: '10px' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className="transition-all duration-300"
            style={{
              width: i === page ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === page ? 'linear-gradient(90deg, #B07BB3, #664077)' : 'rgba(176,123,179,0.25)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label={`第 ${i + 1} 頁`}
          />
        ))}
      </div>

      {/* CTA button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            textDecoration: 'none',
            background: '#fff',
            border: '1px solid rgba(176,123,179,0.3)',
            color: '#664077',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            boxShadow: '0 4px 20px rgba(176,123,179,0.12)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #B07BB3, #664077)';
            (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = '#fff';
            (e.currentTarget as HTMLAnchorElement).style.color = '#664077';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(176,123,179,0.3)';
          }}
        >
          查看更多作品
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div style={{ fontFamily: "'Noto Sans TC', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&h=1200&fit=crop&auto=format"
            alt="創意設計工作室"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(250,250,248,0.97) 0%, rgba(250,250,248,0.85) 50%, rgba(250,250,248,0.3) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-36">
          <div className="max-w-2xl">
            <ScrollReveal delay={100}>
              <p
                className="mb-5 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
              >
                Creative Design Studio
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1
                className="mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                  fontWeight: 300,
                  color: '#212121',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                打造有溫度的
                <br />
                <span style={{ fontWeight: 700, color: '#664077' }}>視覺體驗</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <p
                className="mb-10 max-w-lg"
                style={{ fontSize: '17px', color: '#5A5A5A', lineHeight: 1.85, fontWeight: 300 }}
              >
                我是 Christine，一位專注於品牌識別、UI/UX、3D 創作與動態設計的創意設計師，
                以細膩的美學視角為品牌注入獨特的視覺靈魂。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={440}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #B07BB3, #664077)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                  }}
                >
                  查看作品集
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(176,123,179,0.12)',
                    color: '#664077',
                    textDecoration: 'none',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                  }}
                >
                  了解更多
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <ScrollReveal delay={560}>
            <div
              className="mt-20 inline-flex gap-10 px-8 py-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(176,123,179,0.15)' }}
            >
              {[
                { num: '5+', label: '年設計經驗' },
                { num: '80+', label: '完成專案' },
                { num: '30+', label: '品牌客戶' },
                { num: '12', label: '設計獎項' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div style={{ fontSize: '22px', fontWeight: 700, color: '#664077' }}>{num}</div>
                  <div style={{ fontSize: '11px', color: '#8B7A8B', marginTop: '2px', letterSpacing: '0.04em' }}>{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-64 h-64 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #B07BB3, transparent)' }}
              />
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: '4/5', boxShadow: '0 32px 80px rgba(102,64,119,0.18)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop&auto=format"
                  alt="Christine 設計師"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tag */}
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #B07BB3, #664077)',
                  color: '#fff',
                  boxShadow: '0 16px 40px rgba(102,64,119,0.28)',
                }}
              >
                <p style={{ fontSize: '11px', opacity: 0.85, letterSpacing: '0.08em' }}>CREATIVE DESIGNER</p>
                <p style={{ fontSize: '16px', fontWeight: 700, marginTop: '2px' }}>Christine Lin</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div>
              <p
                className="mb-4 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
              >
                About Me
              </p>
              <h2
                className="mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 300, color: '#212121', lineHeight: 1.25 }}
              >
                用設計連結<br />
                <span style={{ fontWeight: 700, color: '#664077' }}>情感與品牌</span>
              </h2>
              <p
                className="mb-5"
                style={{ fontSize: '16px', color: '#5A5A5A', lineHeight: 1.9, fontWeight: 300 }}
              >
                我相信每一個設計都是一個故事的開始。擁有超過五年的專業設計經驗，我擅長將複雜的品牌理念轉化為簡潔、有力且令人難忘的視覺語言。
              </p>
              <p
                className="mb-8"
                style={{ fontSize: '16px', color: '#5A5A5A', lineHeight: 1.9, fontWeight: 300 }}
              >
                從平面設計到數位介面，從靜態品牌到動態創作，每一個細節都承載著我對美學的熱愛與對品質的堅持。
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 transition-all duration-300 group"
                style={{ textDecoration: 'none', color: '#664077', fontSize: '14px', fontWeight: 500 }}
              >
                深入了解
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(180deg, #FAFAF8 0%, #F8F4F9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p
                className="mb-3 tracking-widest uppercase"
                style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
              >
                Services
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h2
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 300, color: '#212121', lineHeight: 1.25 }}
                >
                  我的<span style={{ fontWeight: 700, color: '#664077' }}>服務項目</span>
                </h2>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 transition-colors duration-200 group shrink-0"
                  style={{ textDecoration: 'none', color: '#B07BB3', fontSize: '14px' }}
                >
                  查看全部
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ number, title, desc }, i) => (
              <ScrollReveal key={number} delay={i * 80}>
                <div
                  className="group p-7 rounded-2xl transition-all duration-400 cursor-default h-full flex flex-col"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(176,123,179,0.12)',
                    boxShadow: '0 4px 24px rgba(176,123,179,0.06)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(102,64,119,0.14)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(176,123,179,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(176,123,179,0.06)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(176,123,179,0.12)';
                  }}
                >
                  <span
                    className="block mb-5"
                    style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.15em', fontWeight: 500 }}
                  >
                    {number}
                  </span>
                  <h3
                    className="mb-3"
                    style={{ fontSize: '18px', fontWeight: 700, color: '#212121' }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#8B7A8B', lineHeight: 1.8, fontWeight: 300 }}>
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Carousel */}
      <FeaturedWorksCarousel />

      {/* CTA Banner */}
      <section className="mx-4 sm:mx-8 lg:mx-10 mb-8 rounded-3xl overflow-hidden">
        <div
          className="relative py-20 px-8 text-center"
          style={{
            background: 'linear-gradient(135deg, #664077 0%, #B07BB3 60%, #F8D6D9 100%)',
          }}
        >
          <ScrollReveal>
            <p
              className="mb-4 tracking-widest uppercase"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.25em' }}
            >
              Let's Work Together
            </p>
            <h2
              className="mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}
            >
              準備好開啟您的<br />品牌設計之旅了嗎？
            </h2>
            <p
              className="mb-10 max-w-xl mx-auto"
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 300 }}
            >
              無論是全新品牌打造、設計翻新，或是數位介面優化，<br className="hidden sm:block" />
              我都很樂意與您一同創造精彩。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: '#fff',
                color: '#664077',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 700,
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              }}
            >
              立即聯繫
              <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
