import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const contactDetails = [
  { icon: Phone, label: '電話', value: '0979 451 327', href: 'tel:+886979451327' },
  { icon: Mail, label: 'Email', value: 'c2170337@gmail.com', href: 'mailto:c2170337@gmail.com' },
  { icon: MapPin, label: '所在地', value: '台中市, 台灣', href: null },
];

function QRCodeSVG() {
  return (
    <a
      href="https://line.me/ti/p/j1QGNTJhgg"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <img
        src="/images/contact/line-qrcode.jpg"
        alt="加入 LINE"
        className="w-full h-full object-contain rounded-xl transition-transform duration-300 hover:scale-105"
      />
    </a>
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
            style={{ fontSize: '14px', color: '#B07BB3', letterSpacing: '0.2em' }}
          >
            Contact
          </p>
          <h1
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: '#212121', lineHeight: 1.25 }}
          >
            <span style={{ fontWeight: 600, color: '#664077' }}>聯絡我</span>
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
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, color: '#fff', letterSpacing: '0.06em',lineHeight: 1.25 }}
                  >
                    邱玉欣  Christine
                  </h2>
                  <p
                    className="mb-6"
                    style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.06em' }}
                  >
                    視覺設計師 & 創意工作者 <br />
                    Visual Designer & Creative Thinker
                  </p>
                  <p
                    style={{ fontSize: '16px', color: 'rgba(255,255,255,1)', lineHeight: 1.9, fontWeight: 400, maxWidth: '380px' }}
                  >
                    專注於平面設計、品牌視覺、UI/UX 與 3D 視覺創作，期待透過設計傳遞想法與價值。無論是專案合作、品牌需求或工作機會，都歡迎與我聊聊。
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

                <div className="relative flex flex-col items-center">
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
                      className="relative w-64 h-64 lg:w-72 lg:h-72 p-6 rounded-2xl"
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
                    style={{ fontSize: '16px', fontWeight: 400, color: '#B07BB3' }}
                  >
                    點擊加入 LINE 聯繫我
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
    </div>
  );
}
