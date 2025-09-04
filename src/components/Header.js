import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown,
  FiHome,
  FiUsers,
  FiHeart,
  FiCalendar,
  FiVideo,
  FiMail,
  FiGift
} from 'react-icons/fi';
import classNames from 'classnames';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
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
      name: 'Ministries',
      href: '/ministries',
      icon: FiHeart,
      dropdown: [
        { name: "Children's Ministry", href: '/ministries/childrens' },
        { name: 'Youth Ministry', href: '/ministries/youth' },
        { name: 'Outreach', href: '/ministries/outreach' },
        { name: 'Worship & Music', href: '/ministries/worship' },
        { name: 'Family Groups', href: '/ministries/family-groups' },
        { name: 'Discipleship', href: '/ministries/discipleship' },
        { name: 'Bible Study', href: '/ministries/bible-study' },
      ],
    },
    {
      name: 'Church Service',
      href: '/church-service',
      icon: FiHeart,
      dropdown: [
        { name: 'Service Info', href: '/church-service' },
        { name: 'Sermons', href: '/church-service/sermons' },
      ],
    },
    {
      name: 'Events',
      href: '/events',
      icon: FiCalendar,
    },
    {
      name: 'Media',
      href: '/multimedia',
      icon: FiVideo,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: FiMail,
    },
    {
      name: 'Donate',
      href: '/donate',
      icon: FiGift,
    },
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 flex-shrink-0"
            aria-label="Jinja Town Church Home"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-church-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">JTC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-gray-900">
                Jinja Town Church
              </h1>
              <p className="text-xs md:text-sm text-gray-600 -mt-1">
                Faith • Hope • Love
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={classNames(
                        'flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                        {
                          'text-church-red bg-church-cream': activeDropdown === item.name,
                          'text-gray-700 hover:text-church-red hover:bg-gray-50': activeDropdown !== item.name,
                        }
                      )}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <FiChevronDown 
                        className={classNames(
                          'w-4 h-4 transition-transform duration-200',
                          { 'rotate-180': activeDropdown === item.name }
                        )} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-church-cream hover:text-church-red transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={classNames(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      {
                        'text-church-red bg-church-cream': location.pathname === item.href,
                        'text-gray-700 hover:text-church-red hover:bg-gray-50': location.pathname !== item.href,
                      }
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-church-red"
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
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                          aria-expanded={activeDropdown === item.name}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <FiChevronDown 
                            className={classNames(
                              'w-4 h-4 transition-transform duration-200',
                              { 'rotate-180': activeDropdown === item.name }
                            )} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-50"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block py-2 pl-12 pr-4 text-gray-600 hover:text-church-red hover:bg-white transition-colors duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={classNames(
                          'flex items-center space-x-3 px-4 py-3 transition-colors duration-200',
                          {
                            'text-church-red bg-church-cream font-medium': location.pathname === item.href,
                            'text-gray-700 hover:bg-gray-50': location.pathname !== item.href,
                          }
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
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