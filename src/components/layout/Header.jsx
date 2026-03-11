import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, Phone, Globe, User } from 'lucide-react';
import { primaryNav } from '../../data/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [siteMode, setSiteMode] = useState('residential');

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-xplore-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSiteMode('residential')}
              className={`hover:underline ${siteMode === 'residential' ? 'font-semibold' : 'opacity-75'}`}
            >
              Residential
            </button>
            <button
              onClick={() => setSiteMode('business')}
              className={`hover:underline ${siteMode === 'business' ? 'font-semibold' : 'opacity-75'}`}
            >
              <Link to="/business" className="text-white no-underline">Business</Link>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:18665252705" className="flex items-center gap-1 text-white no-underline hover:underline">
              <Phone size={14} />
              Call to Get Started 1-866-525-2705
            </a>
            <button className="flex items-center gap-1 opacity-75 hover:opacity-100">
              <Globe size={14} /> FR
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/xplore-logo.svg" alt="Xplore" className="h-8" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {primaryNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium no-underline transition-colors ${
                    isActive ? 'text-xplore-green' : 'text-xplore-dark hover:text-xplore-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-xplore-gray hover:text-xplore-green transition-colors">
              <Search size={20} />
            </button>
            <Link
              to="/my-account"
              className="flex items-center gap-1 text-sm text-xplore-gray hover:text-xplore-green no-underline transition-colors"
            >
              <User size={18} /> Log in
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-xplore-dark"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            {primaryNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium no-underline ${
                    isActive ? 'text-xplore-green' : 'text-xplore-dark'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/my-account"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-xplore-dark no-underline"
            >
              Log in / Register
            </Link>
            <a
              href="tel:18665252705"
              className="flex items-center gap-2 text-xplore-green font-medium no-underline"
            >
              <Phone size={16} /> 1-866-525-2705
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
