import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { works } from '../data/works';
import { ScrollReveal } from './ScrollReveal';

export function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const idx = works.findIndex(w => w.id === id);
  const work = works[idx];
  const prevWork = idx > 0 ? works[idx - 1] : null;
  const nextWork = idx < works.length - 1 ? works[idx + 1] : null;

  if (!work) {
    return (
      <div className="pt-36 text-center min-h-screen flex flex-col items-center justify-center">
        <p style={{ fontSize: '18px', color: '#8B7A8B', marginBottom: '24px' }}>找不到此作品</p>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2"
          style={{ color: '#B07BB3', textDecoration: 'none', fontSize: '14px' }}
        >
          <ArrowLeft size={14} />
          回到作品集
        </Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Noto Sans TC', sans-serif" }} className="pt-24">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 transition-colors duration-200"
          style={{ textDecoration: 'none', color: '#8B7A8B', fontSize: '13px' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#B07BB3'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#8B7A8B'; }}
        >
          <ArrowLeft size={13} />
          回到作品集
        </Link>
      </div>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <ScrollReveal>
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: '16/9', boxShadow: '0 32px 80px rgba(102,64,119,0.18)' }}
          >
            <img
              src={work.images[galleryIndex] || work.coverImage}
              alt={work.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(30,10,40,0.6) 0%, transparent 50%)' }}
            />

            {/* Category badge */}
            <div
              className="absolute top-6 left-6 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(176,123,179,0.25)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                fontSize: '12px',
                letterSpacing: '0.1em',
              }}
            >
              {work.category}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Title + Meta */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h1
                className="mb-3"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#212121', lineHeight: 1.2 }}
              >
                {work.title}
              </h1>
              <p style={{ fontSize: '18px', color: '#B07BB3', marginBottom: '20px' }}>{work.subtitle}</p>
              <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.9, fontWeight: 300 }}>
                {work.description}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100} direction="right">
            <div
              className="p-6 rounded-2xl"
              style={{
                background: '#fff',
                border: '1px solid rgba(176,123,179,0.12)',
                boxShadow: '0 4px 24px rgba(176,123,179,0.08)',
              }}
            >
              <h3 style={{ fontSize: '13px', color: '#8B7A8B', marginBottom: '16px', letterSpacing: '0.1em' }}>
                PROJECT INFO
              </h3>
              {[
                { label: '類別', value: work.category },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between py-3"
                  style={{ borderBottom: '1px solid rgba(176,123,179,0.1)' }}
                >
                  <span style={{ fontSize: '13px', color: '#8B7A8B' }}>{label}</span>
                  <span style={{ fontSize: '13px', color: '#212121', fontWeight: 500 }}>{value}</span>
                </div>
              ))}
              <div className="mt-4">
                <p style={{ fontSize: '12px', color: '#8B7A8B', marginBottom: '10px', letterSpacing: '0.08em' }}>
                  使用工具
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full"
                      style={{ background: 'rgba(176,123,179,0.1)', color: '#B07BB3', fontSize: '11px' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(180deg, #FAFAF8 0%, #F8F4F9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
            >
              Gallery
            </p>
            <h2
              className="mb-10"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, color: '#212121' }}
            >

              <span style={{ fontWeight: 400, color: '#664077' }}>作品圖集</span>
            </h2>
          </ScrollReveal>

          {/* Main large image */}
          <div
            className="relative rounded-2xl overflow-hidden mb-4"
            style={{ aspectRatio: '16/9', boxShadow: '0 16px 60px rgba(102,64,119,0.14)' }}
          >
            <img
              src={work.images[galleryIndex]}
              alt={`${work.title} - 圖 ${galleryIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Prev/Next buttons */}
            {work.images.length > 1 && (
              <>
                <button
                  onClick={() => setGalleryIndex(i => Math.max(0, i - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: galleryIndex === 0 ? 0.4 : 1,
                  }}
                  disabled={galleryIndex === 0}
                >
                  <ChevronLeft size={18} color="#664077" />
                </button>
                <button
                  onClick={() => setGalleryIndex(i => Math.min(work.images.length - 1, i + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: galleryIndex === work.images.length - 1 ? 0.4 : 1,
                  }}
                  disabled={galleryIndex === work.images.length - 1}
                >
                  <ChevronRight size={18} color="#664077" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {work.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                className="shrink-0 rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  width: '100px',
                  aspectRatio: '4/3',
                  border: i === galleryIndex ? '2px solid #B07BB3' : '2px solid transparent',
                  cursor: 'pointer',
                  background: 'none',
                  padding: 0,
                  opacity: i === galleryIndex ? 1 : 0.6,
                  transform: i === galleryIndex ? 'scale(1)' : 'scale(0.97)',
                }}
              >
                <img src={img} alt={`縮圖 ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      {work.hasVideo && (
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
            >
              Video Showcase
            </p>
            <h2
              className="mb-10"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, color: '#212121' }}
            >
              <span style={{ fontWeight: 400, color: '#664077' }}>影片展示</span>
            </h2>

            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer group"
              style={{
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, #664077, #B07BB3)',
                boxShadow: '0 16px 60px rgba(102,64,119,0.2)',
              }}
              onClick={() => setShowVideo(!showVideo)}
            >
              {!showVideo ? (
                <>
                  <iframe
                    src={work.videoUrl}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="relative flex flex-col items-center gap-4">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.4)' }}
                    >
                      <Play size={28} color="#fff" fill="#fff" style={{ marginLeft: '4px' }} />
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p style={{ color: '#fff', fontSize: '16px', opacity: 0.7 }}>
                    （影片播放器展示位置）
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section
        className="py-16 mt-8"
        style={{ borderTop: '1px solid rgba(176,123,179,0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row gap-5 justify-between">
            {prevWork ? (
              <Link
                to={`/portfolio/${prevWork.id}`}
                className="flex items-center gap-4 group flex-1"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-x-1"
                  style={{ background: 'rgba(176,123,179,0.12)' }}
                >
                  <ChevronLeft size={18} color="#B07BB3" />
                </div>
                <div>
                  <p style={{ fontSize: '11px', color: '#8B7A8B', marginBottom: '2px', letterSpacing: '0.1em' }}>
                    上一個作品
                  </p>
                  <p style={{ fontSize: '15px', color: '#212121', fontWeight: 500 }}>{prevWork.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            <Link
              to="/portfolio"
              className="flex items-center justify-center px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 self-center"
              style={{
                background: 'rgba(176,123,179,0.12)',
                color: '#664077',
                textDecoration: 'none',
                fontSize: '13px',
                whiteSpace: 'nowrap',
              }}
            >
              所有作品
            </Link>

            {nextWork ? (
              <Link
                to={`/portfolio/${nextWork.id}`}
                className="flex items-center gap-4 group flex-1 justify-end text-right"
                style={{ textDecoration: 'none' }}
              >
                <div>
                  <p style={{ fontSize: '11px', color: '#8B7A8B', marginBottom: '2px', letterSpacing: '0.1em' }}>
                    下一個作品
                  </p>
                  <p style={{ fontSize: '15px', color: '#212121', fontWeight: 500 }}>{nextWork.title}</p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                  style={{ background: 'rgba(176,123,179,0.12)' }}
                >
                  <ChevronRight size={18} color="#B07BB3" />
                </div>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </section>
    </div>
  );
}
