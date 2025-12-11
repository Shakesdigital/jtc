import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Events', href: '/events' },
    { name: 'Sermons', href: '/church-service/sermons' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'All Resources', href: '/resources' },
    { name: 'All Article Reads', href: '/articles' },
    { name: 'All Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sermons', href: '/church-service/sermons' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://facebook.com/jinjatownchurch', bgColor: 'hover:bg-[#1877F2]', textColor: 'hover:text-white' },
    { name: 'X', icon: FaXTwitter, href: 'https://x.com/jinjatownchurch', bgColor: 'hover:bg-black', textColor: 'hover:text-white' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com/jinjatownchurch', bgColor: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]', textColor: 'hover:text-white' },
    { name: 'YouTube', icon: FiYoutube, href: 'https://youtube.com/jinjatownchurch', bgColor: 'hover:bg-[#FF0000]', textColor: 'hover:text-white' },
  ];

  const contactInfo = [
    {
      icon: FiMapPin,
      text: 'Bendith School a left turn off Kiira road to Arton Street, and right off Wilson Avenue to Arton street',
      href: 'https://maps.google.com/?q=Bendith+School+Arton+Street+Jinja+Uganda'
    },
    {
      icon: FiPhone,
      text: 'Pr. Richard: +31627997562',
      href: 'tel:+31627997562'
    },
    {
      icon: FiMail,
      text: 'info@ariseafricajinja.org',
      href: 'mailto:info@ariseafricajinja.org'
    }
  ];

  const serviceSchedule = [
    { day: 'Sunday', time: '9:00 AM - Fellowship', service: 'Prayer & Fellowship' },
    { day: 'Sunday', time: '10:00 AM - 12:30 PM', service: 'Main Service' },
    { day: 'Tuesday', time: '5:30 PM - 6:30 PM', service: 'Prayer Meeting' },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#3a3a3a' }} role="contentinfo">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="pt-12 sm:pt-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Church Info */}
            <div className="space-y-6 text-center sm:text-left">
              <div>
                <Link to="/" className="flex justify-center sm:justify-start mb-6" aria-label="Return to home">
                  <img
                    src="/images/jtc-logo-enhanced.png"
                    alt="Arise Jinja Town Church Logo"
                    className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain rounded-3xl shadow-lg"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Logo failed to load:', e.target.src);
                      e.target.src = '/JTC-Logo.jpg';
                    }}
                  />
                </Link>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex justify-center sm:justify-start gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.bgColor} ${social.textColor} hover:scale-110 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-church-yellow focus:ring-offset-2 focus:ring-offset-gray-700`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name} className="flex justify-center sm:justify-start">
                    <Link
                      to={link.href}
                      className="text-sm sm:text-base text-gray-300 hover:text-church-yellow transition-colors duration-200 inline-flex items-center group min-h-[40px] focus:outline-none focus:text-church-yellow"
                    >
                      <span className="w-2 h-2 bg-church-yellow rounded-full mr-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200" aria-hidden="true"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name} className="flex justify-center sm:justify-start">
                    <Link
                      to={link.href}
                      className="text-sm sm:text-base text-gray-300 hover:text-church-yellow transition-colors duration-200 inline-flex items-center group min-h-[40px] focus:outline-none focus:text-church-yellow"
                    >
                      <span className="w-2 h-2 bg-church-yellow rounded-full mr-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200" aria-hidden="true"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Schedule */}
            <div className="space-y-6 text-center sm:text-left">
              {/* Contact Info */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-6">Contact Us</h4>
                <ul className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <li key={index} className="flex justify-center sm:justify-start">
                      <a
                        href={contact.href}
                        className="inline-flex items-start space-x-3 text-gray-300 hover:text-church-yellow transition-colors duration-200 group min-h-[48px] focus:outline-none focus:text-church-yellow"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 text-church-yellow group-hover:scale-110 group-focus:scale-110 transition-transform duration-200 flex-shrink-0" aria-hidden="true" />
                        <span className="text-xs sm:text-sm text-left max-w-[200px] sm:max-w-none">{contact.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Schedule */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start">
                  <FiClock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-church-yellow" aria-hidden="true" />
                  Service Schedule
                </h4>
                <ul className="space-y-3">
                  {serviceSchedule.map((schedule, index) => (
                    <li key={index} className="text-xs sm:text-sm">
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="font-medium text-church-yellow text-sm sm:text-base">{schedule.day}</span>
                      </div>
                      <div className="text-gray-300">{schedule.time}</div>
                      <div className="text-gray-400 text-xs">{schedule.service}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-600">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 gap-4">
            <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm text-center lg:text-left order-1 lg:order-1">
              <span>© {currentYear} Arise Jinja Town Church. All rights reserved.</span>
            </div>

            {/* Partnership Banners */}
            <div className="order-3 lg:order-2 flex flex-col sm:flex-row items-center gap-3">
              <span className="text-gray-400 font-medium text-xs sm:text-sm whitespace-nowrap">In Partnership with</span>
              
              {/* Four12 Global */}
              <a
                href="https://four12global.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block focus:outline-none focus:ring-2 focus:ring-church-yellow focus:ring-offset-2 focus:ring-offset-gray-700 rounded-full"
                aria-label="Visit Four12 Global website"
              >
                <div className="bg-white rounded-full px-3 sm:px-4 md:px-6 py-2 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/four12-logo.webp"
                      alt="Four12 Global"
                      className="h-5 sm:h-6 md:h-8 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
                      loading="lazy"
                      onError={(e) => {
                        console.error('Four12 logo failed to load:', e.target.src);
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'inline';
                      }}
                    />
                    <span
                      className="text-xs sm:text-sm font-bold text-red-600 group-hover:text-red-800 transition-colors duration-200"
                      style={{display: 'none'}}
                    >
                      Four12 Global
                    </span>
                  </div>
                </div>
              </a>

              {/* Arise Africa International */}
              <a
                href="https://www.facebook.com/ariseafricaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block focus:outline-none focus:ring-2 focus:ring-church-yellow focus:ring-offset-2 focus:ring-offset-gray-700 rounded-full"
                aria-label="Visit Arise Africa International Facebook page"
              >
                <div className="bg-white rounded-full px-3 sm:px-4 md:px-6 py-2 shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/Arise Africa international.jpg"
                      alt="Arise Africa International"
                      className="h-5 sm:h-6 md:h-8 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
                      loading="lazy"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-1 text-gray-400 text-xs sm:text-sm text-center lg:text-right order-2 lg:order-3">
              <span>Designed and Powered by</span>
              <a
                href="https://www.shakesdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-church-yellow hover:text-church-yellow-dark transition-colors duration-300 font-medium focus:outline-none focus:underline"
              >
                Shakes Digital
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;