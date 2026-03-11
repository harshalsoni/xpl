import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Phone, Globe, User, ChevronRight } from 'lucide-react';
import { primaryNav } from '../../data/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [siteMode, setSiteMode] = useState('residential');

  return (
    <header className="sticky top-0 z-50 bg-xplore-dark-deep shadow-sm">
      {/* Top bar */}
      <div className="border-b border-white/10 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSiteMode('residential')}
              className={`px-3 py-1 no-underline transition-colors ${siteMode === 'residential' ? 'text-xplore-green font-semibold' : 'text-white/75 hover:text-white'}`}
            >
              Residential
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setSiteMode('business')}
              className={`px-3 py-1 transition-colors ${siteMode === 'business' ? 'text-xplore-green font-semibold' : 'text-white/75 hover:text-white'}`}
            >
              <Link to="/business" className="text-inherit no-underline">Business</Link>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:18665990393" className="flex items-center gap-1.5 text-white no-underline hover:text-xplore-green transition-colors">
              <span className="font-medium">Call to Get Started 1-866-599-0393</span>
            </a>
            <span className="text-white/30">|</span>
            <button className="text-white/75 hover:text-white transition-colors">
              Webmail
            </button>
            <span className="text-white/30">|</span>
            <button className="text-white/75 hover:text-white transition-colors">
              FR
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/xplore-logo.svg" alt="Xplore" className="h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {primaryNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium no-underline transition-colors ${
                    isActive ? 'text-xplore-green' : 'text-white hover:text-xplore-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/my-account"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-xplore-green hover:bg-xplore-green-dark no-underline transition-colors px-5 py-2 rounded-full"
            >
              Log in / Register
              <User size={16} />
            </Link>
            <span className="inline-flex items-center text-xplore-green">
              <ChevronRight size={20} strokeWidth={3} className="-ml-2" />
              <ChevronRight size={20} strokeWidth={3} className="-ml-3" />
            </span>
            <button className="p-2 text-white/75 hover:text-xplore-green transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-xplore-dark border-t border-white/10">
          <nav className="px-4 py-4 space-y-3">
            {primaryNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium no-underline ${
                    isActive ? 'text-xplore-green' : 'text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/my-account"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-xplore-green no-underline px-5 py-2 rounded-full mt-2"
            >
              Log in / Register <User size={16} />
            </Link>
            <a
              href="tel:18665990393"
              className="flex items-center gap-2 text-xplore-green font-medium no-underline pt-2"
            >
              <Phone size={16} /> 1-866-599-0393
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
