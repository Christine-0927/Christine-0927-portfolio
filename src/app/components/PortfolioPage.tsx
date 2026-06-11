import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { works, categories, type WorkCategory } from '../data/works';

export function PortfolioPage() {
  const [active, setActive] = useState<WorkCategory | 'all'>('all');

  const filtered = active === 'all' ? works : works.filter(w => w.category === active);

  return (
    <div style={{ fontFamily: "'Noto Sans TC', sans-serif" }} className="pt-24">
      {/* Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p
            className="mb-4 tracking-widest uppercase"
            style={{ fontSize: '12px', color: '#B07BB3', letterSpacing: '0.2em' }}
          >
            Portfolio
          </p>
          <h1
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: '#212121', lineHeight: 1.25 }}
          >
            <span style={{ fontWeight: 600, color: '#664077' }}>精選作品集</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <ScrollReveal>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive('all')}
              className="px-5 py-2 rounded-full transition-all duration-300"
              style={{
                background: active === 'all' ? 'linear-gradient(135deg, #B07BB3, #664077)' : 'rgba(176,123,179,0.1)',
                color: active === 'all' ? '#fff' : '#664077',
                fontSize: '16px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
            >
              全部作品
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full transition-all duration-300"
                style={{
                  background: active === cat ? 'linear-gradient(135deg, #B07BB3, #664077)' : 'rgba(176,123,179,0.1)',
                  color: active === cat ? '#fff' : '#664077',
                  fontSize: '16px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Work Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work, i) => (
            <ScrollReveal key={work.id} delay={i * 50}>
              <Link
                to={`/portfolio/${work.id}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-400"
                style={{
                  textDecoration: 'none',
                  background: '#fff',
                  border: '1px solid rgba(176,123,179,0.1)',
                  boxShadow: '0 4px 24px rgba(102,64,119,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 20px 60px rgba(102,64,119,0.16)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(102,64,119,0.07)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(102,64,119,0.3)', backdropFilter: 'blur(2px)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: '#fff' }}
                    >
                      <ArrowUpRight size={20} color="#664077" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '16px',
                      color: '#664077',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {work.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3
                    style={{ fontSize: '18px', fontWeight: 400, color: '#212121', marginBottom: '4px', lineHeight: 1.5, textAlign: 'center'}}
                  >
                    {work.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: '#474747', fontSize: '16px' }}>此分類目前沒有作品</p>
          </div>
        )}
      </section>
    </div>
  );
}
