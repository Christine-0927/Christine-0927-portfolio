import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { logo } from '/images/christine-logo.svg';

const navLinks = [
  { to: '/about', label: '關於我' },
  { to: '/services', label: '服務項目' },
  { to: '/portfolio', label: '精選作品' },
  { to: '/contact', label: '聯絡方式' },
];

export function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(250,250,248,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(176,123,179,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/christine-logo.svg"
            alt="Christine"
            className="h-10 w-auto transition-all duration-300 group-hover:opacity-80"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-stretch gap-10 h-full">
          {navLinks.map(({ to, label }) => {
            const active = pathname === to || pathname.startsWith(to + '/');
            return (
              <Link
                key={to}
                to={to}
                className="relative flex items-center justify-center h-full"
                style={{
                  textDecoration: 'none',
                  fontSize: '14px',
                  letterSpacing: '0.06em',
                  fontWeight: active ? 500 : 400,
                  color: active ? '#B07BB3' : '#212121',
                }}
              >
                {label}
                <span
                  className="absolute left-0 bottom-0 h-[4px] w-full block origin-center transition-transform duration-300 ease-out"
                  style={{
                    background: '#B07BB3',
                    transform: active ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
          style={{ background: 'rgba(176,123,179,0.1)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="選單"
        >
          {menuOpen ? <X size={18} color="#664077" /> : <Menu size={18} color="#664077" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '320px' : '0px',
          background: 'rgba(250,250,248,0.97)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <nav className="px-6 pb-6 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="py-3 transition-colors duration-200"
                style={{
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: active ? 500 : 400,
                  color: active ? '#B07BB3' : '#212121',
                  borderBottom: '1px solid rgba(176,123,179,0.1)',
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
