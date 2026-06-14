import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Building2, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Property Management', path: '/property-management' },
    { name: 'Landlords', path: '/landlords' },
    { name: 'Tenants', path: '/tenants' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-text-main">
      {/* Top Bar - High End Trust Signal */}
      <div className="bg-primary text-white/90 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white/80" />
              <span>01274 457577</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white/80" />
              <span>info@shergul.com</span>
            </span>
          </div>
          <div className="flex space-x-4">
            <Link to="/contact" className="hover:text-white transition-colors">Report Maintenance</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
               <img src="/logo.png" alt="Sher Gul Logo" className="h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1 lg:space-x-5 xl:space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary relative py-2",
                    isActive(link.path) ? "text-secondary" : "text-gray-700"
                  )}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/valuation"
                className="ml-4 bg-primary text-white hover:bg-primary-light font-semibold px-5 py-2.5 rounded-md transition-all shadow-sm flex items-center space-x-2 text-sm"
              >
                <span>Free Valuation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-primary p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-base font-medium rounded-md",
                    isActive(link.path) ? "bg-slate-50 text-secondary" : "text-gray-900 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/valuation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 w-full text-center bg-primary text-white font-bold px-4 py-3 rounded-md shadow-sm"
              >
                Get Free Rental Valuation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="space-y-6">
              <Link to="/" className="inline-block bg-white pb-2 pt-2 px-3 rounded-lg flex items-center space-x-2 max-w-max">
                 <img src="/logo.png" alt="Sher Gul Logo" className="h-14 w-auto object-contain" />
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed">
                Premium residential lettings and property management services. We remove the stress for landlords while maximizing returns.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Services</h3>
              <ul className="space-y-4">
                <li><Link to="/property-management" className="text-slate-300 hover:text-white transition-colors text-sm">Full Management</Link></li>
                <li><Link to="/landlords" className="text-slate-300 hover:text-white transition-colors text-sm">Tenant Find</Link></li>
                <li><Link to="/landlords" className="text-slate-300 hover:text-white transition-colors text-sm">Rent Collection</Link></li>
                <li><Link to="/valuation" className="text-slate-300 hover:text-white transition-colors text-sm">Property Valuation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact</Link></li>
                <li><Link to="/tenants" className="text-slate-300 hover:text-white transition-colors text-sm">Tenants</Link></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-slate-300 text-sm">
                  <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span>01274 457577</span>
                </li>
                <li className="flex items-start space-x-3 text-slate-300 text-sm">
                  <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span>info@shergul.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-primary-light flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Sher Gul Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
