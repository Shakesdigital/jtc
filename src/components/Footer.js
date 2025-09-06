import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiHeart
} from 'react-icons/fi';
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

  const ministryLinks = [
    { name: "Children's Ministry", href: '/ministries/childrens' },
    { name: 'Youth Ministry', href: '/ministries/youth' },
    { name: 'Family Groups', href: '/ministries/family-groups' },
    { name: 'Outreach', href: '/ministries/outreach' },
    { name: 'Worship & Music', href: '/ministries/worship' },
    { name: 'Bible Study', href: '/ministries/bible-study' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://facebook.com/jinjatownchurch', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com/jinjatownchurch', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com/jinjatownchurch', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: FiYoutube, href: 'https://youtube.com/jinjatownchurch', color: 'hover:text-red-600' },
  ];

  const contactInfo = [
    {
      icon: FiMapPin,
      text: 'Main Street, Jinja, Uganda',
      href: 'https://maps.google.com/?q=Jinja+Town+Church+Uganda'
    },
    {
      icon: FiPhone,
      text: '+256 XXX XXXXXX',
      href: 'tel:+256XXXXXXXX'
    },
    {
      icon: FiMail,
      text: 'info@jinjatownchurch.org',
      href: 'mailto:info@jinjatownchurch.org'
    }
  ];

  const serviceSchedule = [
    { day: 'Sunday', time: '9:00 AM - 11:30 AM', service: 'Main Service' },
    { day: 'Wednesday', time: '7:00 PM - 8:30 PM', service: 'Bible Study' },
    { day: 'Friday', time: '7:00 PM - 9:00 PM', service: 'Youth Meeting' },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#3a3a3a' }}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Church Info */}
            <div className="space-y-6">
              <div>
                <Link to="/" className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-church-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">JTC</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Jinja Town Church</h3>
                    <p className="text-gray-400 text-sm">Faith • Hope • Love</p>
                  </div>
                </Link>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A vibrant community of believers in Jinja, Uganda, dedicated to sharing God's love 
                  and transforming lives through worship, fellowship, and service.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.color} hover:scale-110`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-church-gold transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ministries */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Ministries</h4>
              <ul className="space-y-3">
                {ministryLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-church-gold transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-church-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Schedule */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                <ul className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <li key={index}>
                      <a
                        href={contact.href}
                        className="flex items-start space-x-3 text-gray-300 hover:text-church-gold transition-colors duration-200 group"
                      >
                        <contact.icon className="w-5 h-5 mt-0.5 text-church-gold group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm">{contact.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Schedule */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <FiClock className="w-5 h-5 mr-2 text-church-gold" />
                  Service Schedule
                </h4>
                <ul className="space-y-3">
                  {serviceSchedule.map((schedule, index) => (
                    <li key={index} className="text-sm">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-church-gold">{schedule.day}</span>
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

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Connected</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for updates on events, sermons, and church news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-church-gold focus:ring-2 focus:ring-church-gold focus:ring-opacity-50 outline-none transition-all duration-200"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="btn-accent px-8 py-3 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Jinja Town Church. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-church-gold transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-church-gold transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FiHeart className="w-4 h-4 text-church-red" />
              <span>in Uganda</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;