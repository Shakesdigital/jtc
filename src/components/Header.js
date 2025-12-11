import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiHome,
  FiUsers,
  FiVideo,
  FiMail,
  FiBook
} from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: FiHome,
    },
    {
      name: 'About',
      href: '/about',
      icon: FiUsers,
    },
    {
      name: 'Sermons',
      href: '/church-service/sermons',
      icon: FiVideo,
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FiBook,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: FiMail,
    },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
      role="banner"
    >
      <nav className="container-custom" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28 relative">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0 z-10"
            aria-label="Arise Jinja Town Church Home"
          >
            <img
              src="/logo.png"
              alt="Arise Jinja Town Church Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href || (item.href === '/church-service/sermons' && location.pathname.startsWith('/church-service/sermons'));
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-church-sage focus:ring-offset-2 ${
                      isActive
                        ? 'text-church-sage-dark bg-church-yellow'
                        : 'text-church-sage-dark hover:text-church-sage hover:bg-church-sage hover:bg-opacity-10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg text-church-sage-dark hover:bg-church-sage hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-church-sage focus:ring-offset-2 z-10 min-h-[44px] min-w-[44px]"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-church-sage border-opacity-20 shadow-lg"
              role="menu"
            >
              <div className="py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.href || (item.href === '/church-service/sermons' && location.pathname.startsWith('/church-service/sermons'));
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-6 py-4 mx-4 rounded-lg transition-all duration-200 font-medium min-h-[48px] focus:outline-none focus:ring-2 focus:ring-church-sage focus:ring-offset-2 ${
                        isActive
                          ? 'text-church-sage-dark bg-church-yellow'
                          : 'text-church-sage-dark hover:bg-church-sage hover:bg-opacity-10'
                      }`}
                      role="menuitem"
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;