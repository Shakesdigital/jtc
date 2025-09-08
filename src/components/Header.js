import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiHome,
  FiUsers,
  FiHeart,
  FiCalendar,
  FiVideo,
  FiMail
} from 'react-icons/fi';
import classNames from 'classnames';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      name: 'Ministries',
      href: '/ministries',
      icon: FiHeart,
    },
    {
      name: 'Sermons',
      href: '/church-service/sermons',
      icon: FiVideo,
    },
    {
      name: 'Events',
      href: '/events',
      icon: FiCalendar,
    },
    {
      name: 'About',
      href: '/about',
      icon: FiUsers,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: FiMail,
    },
  ];

  return (
    <header 
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        {
          'backdrop-blur-light shadow-lg': isScrolled,
          'bg-transparent': !isScrolled,
        }
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0"
            aria-label="Jinja Town Church Home"
          >
            <img 
              src="/JTC-Logo.jpg" 
              alt="Jinja Town Church Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    'px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105',
                    {
                      'text-church-sage-dark bg-church-yellow': location.pathname === item.href || (item.href === '/church-service/sermons' && location.pathname.startsWith('/church-service/sermons')),
                      'text-church-sage-dark hover:text-church-sage hover:bg-church-sage hover:bg-opacity-10': location.pathname !== item.href && !(item.href === '/church-service/sermons' && location.pathname.startsWith('/church-service/sermons')),
                    }
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-church-sage-dark hover:bg-church-sage hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-church-sage"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-church-sage border-opacity-20 shadow-lg"
            >
              <div className="py-4 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      'flex items-center space-x-3 px-6 py-4 mx-4 rounded-lg transition-all duration-200 font-medium',
                      {
                        'text-church-sage-dark bg-church-yellow': location.pathname === item.href || (item.href === '/church-service/sermons' && location.pathname.startsWith('/church-service/sermons')),
                        'text-church-sage-dark hover:bg-church-sage hover:bg-opacity-10': location.pathname !== item.href && !(item.href === '/church-service/sermons' && location.pathname.startsWith('/church-service/sermons')),
                      }
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;