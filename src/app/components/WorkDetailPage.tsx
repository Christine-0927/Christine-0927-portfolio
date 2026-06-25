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
  const tools = work.tools || [];
  const hasGallery =
    work.images &&
    work.images.length > 1;
  const prevWork = idx > 0 ? works[idx - 1] : null;
  const nextWork = idx < works.length - 1 ? works[idx + 1] : null;

  if (!work) {
    return (
      <div className="pt-36 text-center min-h-screen flex flex-col items-center justify-center">
        <p style={{ fontSize: '16px', color: '#474747', marginBottom: '24px' }}>找不到此作品</p>
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
          style={{ textDecoration: 'none', color: '#8B7A8B', fontSize: '14px' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#B07BB3'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#8B7A8B'; }}
        >
          <ArrowLeft size={14} />
          回到作品集
        </Link>
      </div>

      {/* Hero Image */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mb-12">
        <ScrollReveal>
          <div
            className="relative rounded-3xl overflow-hidden mx-auto"
            style={{ aspectRatio: '4/3', maxWidth: '1200px', maxHeight: '720px', boxShadow: '0 32px 80px rgba(102,64,119,0.18)' }}
          >
            <img
              src={work.coverImage}
              alt={work.title}
              className="w-full h-full object-cover object-center"
            />
            <div
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
      <section className="max-w-6xl mx-auto px-6 lg:px-10 mb-16">
        <div className="mx-auto"style={{ maxWidth: '1200px'}}>
          <ScrollReveal>
            <h1
              className="mb-3"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: '#212121',
                lineHeight: 1.2,
              }}
            >
              {work.title}
            </h1>

            <p
              style={{
                fontSize: '20px',
                color: '#B07BB3',
                marginBottom: '24px',
              }}
            >
              {work.subtitle}
            </p>

            <p
              style={{
                fontSize: '16px',
                color: '#474747',
                lineHeight: 2,
                marginBottom: '28px',
              }}
            >
              {work.description}
            </p>

            {tools.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {tools.map(tool => (
                  <span
                    key={tool}
                    style={{
                      fontSize: '12px',
                      padding: '6px 12px',
                      borderRadius: '999px',
                      background: 'rgba(176,123,179,0.1)',
                      color: '#664077',
                      border: '1px solid rgba(176,123,179,0.15)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Case Study */}
      {work.featuredCaseStudy && (
        <section className="max-w-6xl mx-auto px-6 lg:px-10 mb-20">
          <div
            className="rounded-3xl p-8 lg:p-12"
            style={{
              background: '#fff',
              border: '1px solid rgba(176,123,179,0.12)',
              maxWidth: '1200px',
              boxShadow: '0 8px 40px rgba(102,64,119,0.08)',
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, color: '#664077', marginBottom: '24px' }}>
              專案介紹
            </h2>
      
            <p style={{ fontSize: '16px', lineHeight: 2, color: '#474747', marginBottom: '32px' }}>
              《Sweet BonBons》為畢業專題製作的 3D 動畫短片，以手足情感與人性的黑暗面為核心主題，透過玩偶作為故事媒介，打造兼具奇幻、驚悚與黑色幽默風格的動畫作品。
            </p>
      
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 style={{ color: '#B07BB3', fontSize: '14px', letterSpacing: '0.1em', marginBottom: '16px' }}>我的角色</h3>
                <ul
                  style={{
                    color: '#474747',
                    lineHeight: 2,
                    fontSize: '15px',
                  }}
                >
                  <li>• 監製（Producer）</li>
                  <li>• 3D 場景與物件設計</li>
                  <li>• 3D 建模製作</li>
                  <li>• Animation 動作調整</li>
                  <li>• 專案管理與進度控管</li>
                  <li>• 腳本與企劃書撰寫</li>
                </ul>
              </div>
      
              <div>
                <h3 style={{ color: '#B07BB3', fontSize: '14px', letterSpacing: '0.1em', marginBottom: '16px' }}>獎項與影展</h3>             
                <div style={{ color: '#474747', lineHeight: 2, fontSize: '15px' }}>
                    <p
                      style={{
                        color: '#664077',
                        fontWeight: 600,
                        marginBottom: '8px',
                      }}
                    >
                      獲獎紀錄
                    </p>
                
                    <ul style={{ marginBottom: '20px' }}>
                      <li>2023 德國紅點設計獎</li>
                      <li>2024 麥德林國際影展｜最佳學生短片</li>
                      <li>2024 索契影展｜最佳動畫片</li>
                      <li>2024 技專校院電腦動畫競賽｜佳作</li>
                    </ul>
                
                    <p
                      style={{
                        color: '#664077',
                        fontWeight: 600,
                        marginBottom: '8px',
                      }}
                    >
                      入圍放映
                    </p>
                
                    <ul>
                      <li>2023 放視大賞</li>
                      <li>2024 義大利國際動漫電玩影展</li>
                      <li>2024 西班牙奇想短片影展</li>
                      <li>2024 美國芝加哥獨立影展</li>
                      <li>2024 美國拉斯維加斯短片影展</li>
                      <li>2024 立陶宛標誌性影像影展</li>
                      <li>2024 伊斯坦堡金橋國際短片影展</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </section>
      )}
      
      {/* Gallery */}
      {hasGallery && (
        <section
          className="py-16"
          style={{
            background:
              'linear-gradient(180deg, #FAFAF8 0%, #F8F4F9 100%)'
          }}
        >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '14px', color: '#B07BB3', letterSpacing: '0.2em' }}
            >
              Gallery
            </p>
      
            <h2
              className="mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, color: '#212121' }}
            >
              <span style={{ fontWeight: 600, color: '#664077' }}>
                作品圖集
              </span>
            </h2>
          </ScrollReveal>
      
          {/* Main image */}
          <div
            className="rounded-2xl overflow-hidden mb-4 flex justify-center items-center relative"
            style={{
              background: '#F7F7F7',
              boxShadow: '0 16px 60px rgba(102,64,119,0.14)',
              ...(work.imageLayout === 'long-scroll'
                ? {}
                : work.imageLayout === 'portrait'
                ? {
                    minHeight: '700px',
                    height: '80vh',
                    maxHeight: '1200px',
                  }
                : {
                    minHeight: '500px',
                    height: '70vh',
                    maxHeight: '900px',
                  }),
            }}
          >
            <img
              src={work.images[galleryIndex]}
              alt={`${work.title} - 圖 ${galleryIndex + 1}`}
              className={
                work.imageLayout === 'long-scroll'
                  ? 'w-full h-auto'
                  : work.imageLayout === 'portrait'
                  ? 'w-full h-full object-contain'
                  : 'w-full h-full object-cover'
              }
            />
          </div>
      
          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {work.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                className="shrink-0 rounded-xl overflow-hidden"
                style={{
                  width: '100px',
                  aspectRatio: '4/3',
                  border: i === galleryIndex ? '2px solid #B07BB3' : '2px solid transparent',
                  opacity: i === galleryIndex ? 1 : 0.6,
                }}
              >
                <img
                  src={img}
                  alt={`縮圖 ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Video Showcase */}
      {work.hasVideo && (
        <section className="py-16 max-w-6xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '14px', color: '#B07BB3', letterSpacing: '0.2em' }}
            >
              Video Showcase
            </p>
            <h2
              className="mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, color: '#212121' }}
            >
              <span style={{ fontWeight: 600, color: '#664077' }}>影片展示</span>
            </h2>

            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer group"
              style={{
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, #664077, #B07BB3)',
                boxShadow: '0 16px 60px rgba(102,64,119,0.2)',
              }}
              onClick={() => {
                if (!showVideo) {
                setShowVideo(true);
                }
              }}
            >
              {showVideo ? (
                work.videoType === 'youtube' ? (
                  <iframe
                    src={`${work.videoUrl}${work.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={work.videoUrl}
                    controls
                    autoPlay
                    playsInline
                  />
                )
              ) : (
                <>
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                     
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'rgba(0,0,0,0.35)',
                    }}
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
                  <p style={{ fontSize: '14px', color: '#B07BB3', marginBottom: '2px', letterSpacing: '0.1em' }}>
                    上一個作品
                  </p>
                  <p style={{ fontSize: '16px', color: '#212121', fontWeight: 500 }}>{prevWork.title}</p>
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
                fontSize: '14px',
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
                  <p style={{ fontSize: '14px', color: '#B07BB3', marginBottom: '2px', letterSpacing: '0.1em' }}>
                    下一個作品
                  </p>
                  <p style={{ fontSize: '16px', color: '#212121', fontWeight: 500 }}>{nextWork.title}</p>
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
