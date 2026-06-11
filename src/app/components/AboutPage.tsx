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
  { title: '網頁設計 丙級', Subtitle: 'Level C Technician for Web Page Design', color: '#664077' },
  { title: '視覺傳達設計 丙級', Subtitle: 'Level C Technician for Visual Communication Design', color: '#664077' },
  { title: '印前製程－圖文組版 PC 丙級', Subtitle: 'Level C Technician for Prepress Processes – Text and Image Composition(PC)', color: '#664077' },
  { title: 'ICEP國際英語能力證書 Level 2', Subtitle: 'ICEP International Certificate of English Proficiency – Level 2', color: '#664077' },
  { title: 'CSEPT大學校院英語能力測驗 Level 1', Subtitle: 'College Student English Proficiency Test (CSEPT), Level 1', color: '#664077' },
  { title: 'BAP商務專業應用能力國際認證', Subtitle: 'Business Application Professionals (BAP) Certification', color: '#664077' },
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
            <span style={{ fontWeight: 600, color: '#664077' }}>關於我</span>
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
                邱玉欣 Christine
              </h2>
              <p
                className="mb-8"
                style={{ fontSize: '16px', color: '#B07BB3', letterSpacing: '0.08em' }}
              >
                視覺設計師 & 創意工作者 <br />
                Visual Designer & Creative Thinker
              </p>

              <p className="mb-5" style={{ fontSize: '16px', color: '#474747', lineHeight: 1.9, fontWeight: 300 }}>
                你好，我是 Christine。<br />
                熱愛設計、影像與創作，專注於視覺設計與數位媒體領域。
              </p>
              <p className="mb-5" style={{ fontSize: '16px', color: '#474747', lineHeight: 1.9, fontWeight: 300 }}>
                具備平面設計、品牌視覺、UI/UX 與 3D 視覺創作經驗，<br />           
                擅長整合資訊與視覺語言，創造兼具美感與實用性的成果。
              </p>
              <p className="mb-10" style={{ fontSize: '16px', color: '#474747', lineHeight: 1.9, fontWeight: 300 }}>
                我相信設計不只是創造美感，更是解決問題與傳遞訊息的過程。<br />
                期待透過設計，為每個品牌與專案創造獨特的價值。
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: Phone, text: '0979451327', label: '電話' },
                  { icon: Mail, text: 'c2170337@gmail.com', label: 'Email' },
                  { icon: MapPin, text: '台中市, 台灣', label: '所在地' },
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
                  src="images/about/designphoto.jpg"
                  alt="Christine 個人照"
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
              <span style={{ fontWeight: 600, color: '#664077' }}>設計技能</span>
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 40}>
                <div
                  className="px-5 py-2.5 rounded-full transition-all duration-300 cursor-default"
                  style={{
                      background: '#FFFFFF',
                      color: '#664077',
                      border: '1px solid rgba(176,123,179,0.2)',
                      fontSize: '14px',
                      fontWeight: 500,
                      boxShadow: '0 2px 12px rgba(176,123,179,0.08)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLDivElement).style.background = '#B07BB3';
                    (e.currentTarget as HTMLDivElement).style.color = '#FFFFFF';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(102,64,119,0.15)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.background = '#FFFFFF';
                    (e.currentTarget as HTMLDivElement).style.color = '#664077';
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
            <span style={{ fontWeight: 600, color: '#664077' }}>學歷與工作經歷</span>
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

      {/* Certifications */}
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
              Certifications
            </p>
            <h2
              className="mb-12"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, color: '#212121', lineHeight: 1.25 }}
            >
              <span style={{ fontWeight: 600, color: '#664077' }}>專業認證</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  className="p-6 rounded-2xl flex gap-4 transition-all duration-300 hover:-translate-y-1 h-full"
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

                  <div className="flex flex-col">
                    <div>
                      <p style={{ fontSize: '11px', color: '#B07BB3', marginBottom: '2px' }}>{cert.year}</p>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#212121', lineHeight: 1.3, marginBottom: '4px' }}>
                        {cert.title}
                      </h3>
                    </div>
                    
                    <p style={{ fontSize: '12px', color: '#B07BB3' }}>{cert.Subtitle}</p>
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
