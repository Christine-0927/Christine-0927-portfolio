import { Link } from 'react-router';
import { Instagram, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="mt-32"
      style={{ borderTop: '1px solid rgba(176,123,179,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #B07BB3, #664077)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>C</span>
              </div>
              <span style={{ fontWeight: 500, fontSize: '15px', color: '#212121' }}>Christine Lin</span>
            </div>
            <p style={{ fontSize: '13px', color: '#8B7A8B', lineHeight: 1.7 }}>
              創意設計師 · 打造有溫度的視覺體驗
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {[
              { to: '/about', label: '關於我' },
              { to: '/services', label: '服務項目' },
              { to: '/portfolio', label: '精選作品' },
              { to: '/contact', label: '聯絡我' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ textDecoration: 'none', fontSize: '13px', color: '#8B7A8B' }}
                className="hover:text-primary transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: Instagram, label: 'Instagram', href: '#' },
              { icon: Mail, label: 'Email', href: 'mailto:christine@example.com' },
              { icon: ExternalLink, label: 'Behance', href: '#' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(176,123,179,0.12)', color: '#B07BB3' }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(176,123,179,0.1)' }}
        >
          <p style={{ fontSize: '12px', color: '#8B7A8B' }}>
            © 2024 Christine Lin. 版權所有
          </p>
          <p style={{ fontSize: '12px', color: '#8B7A8B' }}>
            設計 · 創作 · 品牌
          </p>
        </div>
      </div>
    </footer>
  );
}
