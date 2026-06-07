import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const contactDetails = [
  { icon: Phone, label: '電話', value: '+886 912 345 678', href: 'tel:+886912345678' },
  { icon: Mail, label: 'Email', value: 'christine@designstudio.tw', href: 'mailto:christine@designstudio.tw' },
  { icon: MapPin, label: '所在地', value: '台北市, 台灣', href: null },
];

function QRCodeSVG() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Top-left finder pattern */}
      <rect x="8" y="8" width="44" height="44" rx="5" fill="#664077" />
      <rect x="15" y="15" width="30" height="30" rx="3" fill="white" />
      <rect x="22" y="22" width="16" height="16" rx="2" fill="#664077" />
      {/* Top-right finder pattern */}
      <rect x="108" y="8" width="44" height="44" rx="5" fill="#664077" />
      <rect x="115" y="15" width="30" height="30" rx="3" fill="white" />
      <rect x="122" y="22" width="16" height="16" rx="2" fill="#664077" />
      {/* Bottom-left finder pattern */}
      <rect x="8" y="108" width="44" height="44" rx="5" fill="#664077" />
      <rect x="15" y="115" width="30" height="30" rx="3" fill="white" />
      <rect x="22" y="122" width="16" height="16" rx="2" fill="#664077" />
      {/* Data modules — timing & data */}
      {[62,70,78,86,94].map((x, xi) =>
        [62,70,78,86,94].map((y, yi) => {
          const pattern = [
            [1,0,1,1,0],[0,1,0,1,1],[1,1,1,0,0],[0,1,0,0,1],[1,0,1,1,0],
          ];
          return pattern[xi][yi] ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" rx="1.5" fill="#B07BB3" />
          ) : null;
        })
      )}
      {/* Bottom-right data */}
      {[108,116,124,132,140].map((x, xi) =>
        [108,116,124,132,140].map((y, yi) => {
          const p2 = [[1,1,0,1,0],[0,1,1,0,1],[1,0,1,1,0],[1,1,0,0,1],[0,0,1,0,1]];
          return p2[xi][yi] ? (
            <rect key={`br-${x}-${y}`} x={x} y={y} width="6" height="6" rx="1.5" fill="#664077" />
          ) : null;
        })
      )}
      {/* Scattered data dots */}
      {[
        [62,108],[70,116],[78,108],[86,124],[94,116],
        [62,124],[78,140],[94,132],[62,140],[86,108],
        [108,62],[116,70],[124,62],[132,86],[140,78],
        [108,78],[124,94],[140,62],[116,86],[132,70],
      ].map(([x, y]) => (
        <rect key={`d-${x}-${y}`} x={x} y={y} width="6" height="6" rx="1.5" fill="#B07BB3" opacity="0.7" />
      ))}
    </svg>
  );
}

export function ContactPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans TC', sans-serif" }} className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p
            className="mb-4 tracking-widest uppercase"
            style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
          >
            Contact
          </p>
          <h1
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, color: '#212121', lineHeight: 1.15 }}
          >
            聯絡<span style={{ fontWeight: 700, color: '#664077' }}>我</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left panel — identity + details */}
          <ScrollReveal direction="left">
            <div
              className="relative rounded-3xl overflow-hidden flex flex-col h-full"
              style={{
                background: 'linear-gradient(145deg, #664077 0%, #8B5A95 45%, #B07BB3 100%)',
                boxShadow: '0 32px 80px rgba(102,64,119,0.28)',
                minHeight: '580px',
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #F8D6D9, transparent)' }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-15"
                style={{ background: 'radial-gradient(circle, #fff, transparent)' }}
              />

              <div className="relative flex flex-col justify-between h-full p-10 lg:p-12">
                {/* Top: name + intro */}
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: '#F8D6D9' }} />
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.15em' }}>
                      AVAILABLE FOR WORK
                    </span>
                  </div>

                  <h2
                    className="mb-2"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}
                  >
                    Christine Lin
                  </h2>
                  <p
                    className="mb-6"
                    style={{ fontSize: '15px', color: 'rgba(248,214,217,0.9)', letterSpacing: '0.06em' }}
                  >
                    創意設計師 · Creative Design Studio
                  </p>
                  <p
                    style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontWeight: 300, maxWidth: '380px' }}
                  >
                    我熱衷於打造有溫度的視覺體驗，擅長品牌識別、UI/UX 設計、3D 創作與動態設計。
                    無論是品牌合作或求職機會，都非常歡迎與我聯繫。
                  </p>
                </div>

                {/* Bottom: contact details */}
                <div className="flex flex-col gap-5 mt-10">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
                      >
                        <Icon size={16} color="rgba(255,255,255,0.9)" />
                      </div>
                      <div>
                        <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: '2px' }}>
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            style={{ fontSize: '14px', color: '#fff', fontWeight: 500, textDecoration: 'none' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#F8D6D9'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* LINE */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>L</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: '2px' }}>
                        LINE ID
                      </p>
                      <p style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>@christinedesign</p>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-3 mt-2">
                    {[
                      { icon: Instagram, label: 'Instagram', href: '#' },
                      { icon: ExternalLink, label: 'Behance', href: '#' },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
                        style={{
                          background: 'rgba(255,255,255,0.12)',
                          color: 'rgba(255,255,255,0.85)',
                          textDecoration: 'none',
                          fontSize: '12px',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.22)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)';
                        }}
                      >
                        <Icon size={13} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right panel — QR code focal point */}
          <ScrollReveal direction="right" delay={120}>
            <div className="flex flex-col gap-6 h-full">
              {/* QR focal card */}
              <div
                className="flex-1 rounded-3xl flex flex-col items-center justify-center p-10 lg:p-14 relative overflow-hidden"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(176,123,179,0.15)',
                  boxShadow: '0 16px 60px rgba(176,123,179,0.1)',
                  minHeight: '380px',
                }}
              >
                {/* Subtle bg accent */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 110%, rgba(248,214,217,0.35) 0%, transparent 65%)',
                  }}
                />

                <div className="relative flex flex-col items-center">
                  <p
                    className="mb-6 tracking-widest uppercase"
                    style={{ fontSize: '10px', color: '#B07BB3', letterSpacing: '0.25em' }}
                  >
                    Scan to Connect
                  </p>

                  {/* QR frame */}
                  <div className="relative">
                    {/* Outer decorative ring */}
                    <div
                      className="absolute -inset-4 rounded-3xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(176,123,179,0.12), rgba(248,214,217,0.2))',
                        border: '1px solid rgba(176,123,179,0.18)',
                      }}
                    />
                    {/* QR card */}
                    <div
                      className="relative w-52 h-52 lg:w-60 lg:h-60 p-5 rounded-2xl"
                      style={{
                        background: '#fff',
                        boxShadow: '0 8px 40px rgba(102,64,119,0.14)',
                        border: '1px solid rgba(176,123,179,0.15)',
                      }}
                    >
                      <QRCodeSVG />
                    </div>
                  </div>

                  <p
                    className="mt-7 mb-1"
                    style={{ fontSize: '16px', fontWeight: 700, color: '#212121' }}
                  >
                    加入 LINE 聯繫我
                  </p>
                  <p style={{ fontSize: '13px', color: '#B07BB3', letterSpacing: '0.06em' }}>
                    @christinedesign
                  </p>
                </div>
              </div>

              {/* Bottom row — two small info cards */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(176,123,179,0.12)',
                    boxShadow: '0 4px 20px rgba(176,123,179,0.07)',
                  }}
                >
                  <p style={{ fontSize: '10px', color: '#8B7A8B', letterSpacing: '0.1em', marginBottom: '8px' }}>
                    回覆時間
                  </p>
                  <p style={{ fontSize: '22px', fontWeight: 700, color: '#664077', lineHeight: 1 }}>1–2</p>
                  <p style={{ fontSize: '12px', color: '#8B7A8B', marginTop: '4px' }}>個工作天內回覆</p>
                </div>
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #F8D6D9, rgba(176,123,179,0.15))',
                    border: '1px solid rgba(176,123,179,0.15)',
                    boxShadow: '0 4px 20px rgba(176,123,179,0.07)',
                  }}
                >
                  <p style={{ fontSize: '10px', color: '#8B7A8B', letterSpacing: '0.1em', marginBottom: '8px' }}>
                    接案狀態
                  </p>
                  <div className="flex items-center gap-1.5 mb-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#664077', boxShadow: '0 0 6px rgba(102,64,119,0.5)' }}
                    />
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#664077' }}>接受中</p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#8B7A8B' }}>歡迎新專案合作</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom editorial strip */}
      <section
        className="mx-4 sm:mx-8 lg:mx-10 mb-8 rounded-3xl overflow-hidden"
      >
        <div
          className="px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, #F8F4F9 0%, #F8D6D9 100%)', border: '1px solid rgba(176,123,179,0.15)' }}
        >
          <ScrollReveal direction="left">
            <div>
              <p style={{ fontSize: '13px', color: '#8B7A8B', marginBottom: '6px', letterSpacing: '0.08em' }}>
                喜歡我的作品？
              </p>
              <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 700, color: '#664077' }}>
                讓我們一起打造精彩。
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={80}>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:christine@designstudio.tw"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #B07BB3, #664077)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                <Mail size={13} />
                傳送 Email
              </a>
              <a
                href="tel:+886912345678"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: '#fff',
                  color: '#664077',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: '1px solid rgba(176,123,179,0.25)',
                }}
              >
                <Phone size={13} />
                直接通話
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
