import { Mail, Phone, MapPin, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const skills = [
  'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects',
  'Figma', 'Substance Painter', 'Blender', 'Autodesk Maya',
];

const timeline = [
  {
    period: '2025 — 2026',
    role: '網頁設計師',
    company: '立大資訊網路股份有限公司',
    desc: '負責網站介面設計與 App UI 視覺規劃，參與多項產品介面優化與設計製作流程，強化跨平台一致性與使用體驗設計能力。',
    type: 'work',
  },
  {
    period: '2024 — 2025',
    role: '美工設計人員',
    company: '博菲廣告社',
    desc: '執行廣告視覺設計與版面整合，涵蓋印刷與數位輸出製作流程。透過與客戶及團隊協作，提升專案溝通效率與設計修正能力。',
    type: 'work',
  },
  {
    period: '2022 — 2023',
    role: '接案繪師',
    company: '卉製電繪工作坊',
    desc: '負責插畫與客製化設計案件，依不同需求完成風格調整與角色/物件繪製，累積多樣化商業插畫經驗與快速應變能力。',
    type: 'work',
  },
  {
    period: '2020 — 2021',
    role: '暑期實習生',
    company: '丞奕廣告公司',
    desc: '參與平面廣告、展場視覺與數位素材製作，協助設計與完稿流程。實習後延續接案合作，累積專案經驗與軟體應用熟練度。',
    type: 'work',
  },
  {
    period: '2019 — 2023',
    role: '數位媒體設計系 學士',
    company: '嶺東科技大學',
    desc: '主修 2D/3D 動畫、視覺特效與 UI/UX 設計，建立跨媒體設計基礎與專案實作能力。',
    type: 'edu',
  },
   {
    period: '2016 — 2019',
    role: '多媒體動畫科',
    company: '光華高工',
    desc: '學習2D動畫與平面設計等課程，建立扎實的設計基礎。',
    type: 'edu',
  },
];

const certifications = [
  { year: '2024', title: '金點設計獎', org: 'Taiwan Design Research Institute', color: '#B07BB3' },
  { year: '2023', title: 'iF Design Award', org: 'iF International Forum Design GmbH', color: '#664077' },
  { year: '2022', title: 'Red Dot Design Award', org: 'Design Zentrum Nordrhein Westfalen', color: '#B07BB3' },
  { year: '2022', title: '台灣最美的書 入選', org: '文化部', color: '#664077' },
  { year: '2021', title: '台灣創意設計競賽 金獎', org: 'Taiwan Design Center', color: '#B07BB3' },
  { year: '2020', title: 'Behance Featured Creator', org: 'Adobe Behance', color: '#664077' },
];

export function AboutPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans TC', sans-serif" }} className="pt-24">
      {/* Page Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p
            className="mb-4 tracking-widest uppercase"
            style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
          >
            About Me
          </p>
          <h1
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, color: '#212121', lineHeight: 1.15 }}
          >
            關於<span style={{ fontWeight: 700, color: '#664077' }}>我</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Intro + Photo */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info — left on desktop */}
          <ScrollReveal direction="left" delay={100}>
            <div>
              <h2
                className="mb-2"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#212121' }}
              >
                Christine Lin
              </h2>
              <p
                className="mb-8"
                style={{ fontSize: '15px', color: '#B07BB3', letterSpacing: '0.08em' }}
              >
                創意設計師 · Creative Design Studio
              </p>

              <p className="mb-5" style={{ fontSize: '16px', color: '#5A5A5A', lineHeight: 1.9, fontWeight: 300 }}>
                你好，我是 Christine。一位熱愛設計、相信美學力量的創意設計師。
                我的設計哲學很簡單：每一個設計都應該能夠說話，都應該有自己的溫度。
              </p>
              <p className="mb-5" style={{ fontSize: '16px', color: '#5A5A5A', lineHeight: 1.9, fontWeight: 300 }}>
                在過去五年的設計旅程中，我有幸參與了多種類型的設計專案，從小型獨立品牌到大型企業識別，
                從靜態海報到動態影片，每一次的創作都讓我對設計有了更深的理解與熱愛。
              </p>
              <p className="mb-10" style={{ fontSize: '16px', color: '#5A5A5A', lineHeight: 1.9, fontWeight: 300 }}>
                我擅長傾聽客戶的需求，並將抽象的品牌理念轉化為具體且有溫度的視覺語言。
                若您正在尋找一位能夠理解您、陪伴您一起打造品牌的設計師，我很樂意與您相遇。
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: Phone, text: '+886 912 345 678', label: '電話' },
                  { icon: Mail, text: 'christine@designstudio.tw', label: 'Email' },
                  { icon: MapPin, text: '台北市, 台灣', label: '所在地' },
                ].map(({ icon: Icon, text, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(176,123,179,0.12)' }}
                    >
                      <Icon size={15} color="#B07BB3" />
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#8B7A8B', letterSpacing: '0.06em' }}>{label}</p>
                      <p style={{ fontSize: '14px', color: '#212121', fontWeight: 500 }}>{text}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(176,123,179,0.12)' }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#B07BB3' }}>L</span>
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#8B7A8B', letterSpacing: '0.06em' }}>Line ID</p>
                    <p style={{ fontSize: '14px', color: '#212121', fontWeight: 500 }}>@christinedesign</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Photo — right on desktop */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ aspectRatio: '3/4', boxShadow: '0 32px 80px rgba(102,64,119,0.15)' }}
              >
                <img
                  src="images/about/designphoto.webp"
                  alt="Christine 設計師個人照"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -top-5 -left-5 w-40 h-40 rounded-full opacity-15"
                style={{ background: 'radial-gradient(circle, #B07BB3, transparent)' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Tag Wall */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #FAFAF8 0%, #F8F4F9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
            >
              Skills
            </p>
            <h2
              className="mb-12"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, color: '#212121', lineHeight: 1.25 }}
            >
              設計<span style={{ fontWeight: 700, color: '#664077' }}>技能</span>
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 40}>
                <div
                  className="px-5 py-2.5 rounded-full transition-all duration-300 cursor-default"
                  style={{
                    background: i % 3 === 0 ? 'linear-gradient(135deg, #B07BB3, #664077)' : i % 3 === 1 ? '#F8D6D9' : '#fff',
                    color: i % 3 === 0 ? '#fff' : i % 3 === 1 ? '#664077' : '#212121',
                    border: i % 3 === 2 ? '1px solid rgba(176,123,179,0.2)' : 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    boxShadow: '0 2px 12px rgba(176,123,179,0.12)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(102,64,119,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(176,123,179,0.12)';
                  }}
                >
                  {skill}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p
            className="mb-3 tracking-widest uppercase"
            style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
          >
            Experience & Education
          </p>
          <h2
            className="mb-16"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, color: '#212121', lineHeight: 1.25 }}
          >
            學歷與<span style={{ fontWeight: 700, color: '#664077' }}>工作經歷</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #B07BB3, rgba(176,123,179,0.1))', transform: 'translateX(-50%)' }}
          />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div
                  className={`relative flex flex-col lg:flex-row items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 lg:left-1/2 top-6 w-4 h-4 rounded-full z-10"
                    style={{
                      background: item.type === 'work' ? '#B07BB3' : '#F8D6D9',
                      border: '3px solid #fff',
                      boxShadow: '0 0 0 3px rgba(176,123,179,0.2)',
                      transform: 'translate(-50%, 0)',
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1`}
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(176,123,179,0.12)',
                      boxShadow: '0 4px 24px rgba(176,123,179,0.06)',
                    }}
                  >
                    <span
                      className="inline-block mb-3 px-3 py-1 rounded-full"
                      style={{
                        background: item.type === 'work' ? 'rgba(176,123,179,0.12)' : 'rgba(248,214,217,0.5)',
                        color: item.type === 'work' ? '#B07BB3' : '#664077',
                        fontSize: '11px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {item.type === 'work' ? '工作經歷' : '學歷'}
                    </span>
                    <p style={{ fontSize: '12px', color: '#8B7A8B', marginBottom: '4px' }}>{item.period}</p>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#212121', marginBottom: '4px' }}>
                      {item.role}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#B07BB3', marginBottom: '10px' }}>{item.company}</p>
                    <p style={{ fontSize: '14px', color: '#5A5A5A', lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #F8F4F9 0%, #FAFAF8 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="mb-3 tracking-widest uppercase"
              style={{ fontSize: '11px', color: '#B07BB3', letterSpacing: '0.25em' }}
            >
              Certifications & Awards
            </p>
            <h2
              className="mb-12"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, color: '#212121', lineHeight: 1.25 }}
            >
              獎項與<span style={{ fontWeight: 700, color: '#664077' }}>認證</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  className="p-6 rounded-2xl flex gap-4 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(176,123,179,0.12)',
                    boxShadow: '0 4px 24px rgba(176,123,179,0.06)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${cert.color}18` }}
                  >
                    <Award size={20} color={cert.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#8B7A8B', marginBottom: '2px' }}>{cert.year}</p>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', lineHeight: 1.3, marginBottom: '4px' }}>
                      {cert.title}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#8B7A8B' }}>{cert.org}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
