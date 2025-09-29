import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiMusic,
  FiMic,
  FiHeadphones,
  FiDownload,
  FiExternalLink,
  FiUsers,
  FiHeart,
  FiStar,
  FiSend,
  FiMail,
  FiPhone,
  FiCalendar,
  FiYoutube,
  FiInstagram,
  FiPlay
} from 'react-icons/fi';

const WorshipMinistry = () => {
  // State for forms and media interactions
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Responsive height state for hero section
  const [heroHeight, setHeroHeight] = useState('100vh');

  // Calculate responsive height based on device type
  useEffect(() => {
    const calculateResponsiveHeight = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Device breakpoints
      const isMobile = viewportWidth < 768;
      const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

      let calculatedHeight;

      if (isMobile || isTablet) {
        // Mobile & Tablet: Full viewport coverage without padding
        calculatedHeight = viewportHeight;
      } else {
        // Desktop: Full viewport minimum
        calculatedHeight = viewportHeight;
      }

      setHeroHeight(`${calculatedHeight}px`);
    };

    calculateResponsiveHeight();

    // Recalculate on window resize with debounce for performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateResponsiveHeight, 150);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', calculateResponsiveHeight);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', calculateResponsiveHeight);
      clearTimeout(resizeTimeout);
    };
  }, []);



  // Resources data
  const resources = [
    {
      id: 1,
      title: "Worship Playlists",
      icon: FiPlay,
      description: "Curated playlists of our favorite worship songs and originals",
      type: "playlist",
      links: [
        { platform: "Spotify", url: "https://open.spotify.com/playlist/jtc-worship" },
        { platform: "YouTube", url: "https://youtube.com/playlist?jtc-worship" }
      ]
    },
    {
      id: 2,
      title: "Chord Charts & Lyrics",
      icon: FiDownload,
      description: "Download chord charts and lyrics for personal worship and practice",
      type: "download",
      files: ["Sunday Setlist.pdf", "Original Songs.pdf", "Chord Progressions.pdf"]
    },
    {
      id: 3,
      title: "Worship Devotionals",
      icon: FiHeart,
      description: "Daily devotionals focused on worship, praise, and encountering God",
      type: "blog",
      link: "/devotionals/worship"
    },
    {
      id: 4,
      title: "Practice Tracks",
      icon: FiMusic,
      description: "Instrumental tracks and click tracks for team rehearsals",
      type: "audio",
      link: "/practice-tracks"
    }
  ];


  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      role: '',
      message: ''
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setVolunteerForm(prev => ({
      ...prev,
      [field]: value
    }));
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: heroHeight,
          minHeight: '100vh'
        }}
      >
        {/* Background with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full relative"
          >
            <img
              src="/images/worship-hero.jpg"
              alt="Worship Ministry Hero"
              className="w-full h-full object-cover object-center transition-all duration-300"
              style={{
                filter: 'brightness(0.6)'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </motion.div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              Worship Ministry: <span className="text-church-yellow drop-shadow-lg">Glorifying God Through Song</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Join us in passionate, Spirit-led worship that creates space for authentic encounters with God
            </p>

            <div className="pt-6 sm:pt-8 gap-3 sm:gap-4 flex flex-col sm:flex-row justify-center">
              <button
                onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto border-2 sm:border-3"
              >
                <FiUsers className="mr-2" />
                Join Our Team
              </button>
              <button
                onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 sm:border-3 border-white text-white hover:bg-white hover:text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                Join Us Sunday
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                  Creating Space for <span className="text-church-yellow">Divine Encounters</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Worship Ministry aims to guide the congregation into God's presence through praise, worship, and prayer.
                We believe worship transcends songs and musical instruments; it's about creating heartfelt moments that connect us with our Creator.
                Through Spirit-led worship and genuine praise, we invite you to experience God's love, mercy, and glory in life-transforming ways,
                all for the glory of our Heavenly Father.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/worship-divine-encounters.jpg"
                  alt="Creating Space for Divine Encounters"
                  className="w-full h-96 md:h-[500px] lg:h-[550px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/30 to-transparent"></div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Teams and Roles Section */}
      <section className="py-20 bg-gradient-to-br from-church-sage-light to-church-sage">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our <span className="text-church-yellow">Worship Team</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Discover your place in creating powerful worship experiences
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Descriptive Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiMic className="w-6 h-6 text-church-yellow mr-3" />
                  Vocal Team
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Lead congregation in passionate worship with harmony, heart, and authentic praise. We're looking for individuals with a heart for worship, vocal ability, and team spirit to join our vocal ministry team.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiMusic className="w-6 h-6 text-church-yellow mr-3" />
                  Instrumental Team
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Provide musical foundation with guitars, keys, drums, and other instruments. Join us if you have musical proficiency, reliability, and a collaborative spirit to create beautiful worship music together.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiHeadphones className="w-6 h-6 text-church-yellow mr-3" />
                  Tech & Sound
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Ensure excellent audio quality and seamless technical production. We need team members with technical aptitude, attention to detail, and a servant heart to support our worship services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiStar className="w-6 h-6 text-church-yellow mr-3" />
                  Creative Team
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Develop worship themes, visuals, and creative elements for services. Bring your creative vision, collaboration skills, and passion for worship to help design meaningful worship experiences.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <FiUsers className="w-5 h-5 mr-2" />
                  Join Our Team Today
                </button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/worship-team-join.jpg"
                  alt="Join Our Worship Team"
                  className="w-full h-96 md:h-[500px] lg:h-[550px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Worship <span className="text-church-yellow">Resources</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Tools and resources to enhance your worship experience at home and church
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-church-sage text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-church-sage-dark transition-colors duration-300">
                  <resource.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-church-sage-dark mb-2 group-hover:text-church-yellow transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                
                {resource.type === 'playlist' && (
                  <div className="space-y-2">
                    {resource.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="flex items-center text-church-sage hover:text-church-sage-dark font-medium text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.platform === 'Spotify' ? <FiMusic className="w-4 h-4 mr-2" /> : <FiYoutube className="w-4 h-4 mr-2" />}
                        {link.platform}
                      </a>
                    ))}
                  </div>
                )}
                
                {resource.type === 'download' && (
                  <div className="space-y-1">
                    {resource.files.map((file, idx) => (
                      <div key={idx} className="flex items-center text-church-sage font-medium text-sm">
                        <FiDownload className="w-4 h-4 mr-2" />
                        {file}
                      </div>
                    ))}
                  </div>
                )}
                
                {(resource.type === 'blog' || resource.type === 'audio') && (
                  <Link 
                    to={resource.link}
                    className="flex items-center text-church-sage hover:text-church-sage-dark font-medium text-sm"
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Access Resource
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Be Part of the Worship Movement!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join our team and help create powerful worship experiences that touch hearts and transform lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Volunteer Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Sign Up to Serve
              </h3>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <FiMusic className="w-16 h-16 mx-auto mb-4 text-church-yellow" />
                  <h4 className="text-xl font-bold text-church-sage-dark mb-2">Application Received!</h4>
                  <p className="text-gray-700">We'll contact you soon about joining our worship team. God bless!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={volunteerForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={volunteerForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={volunteerForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    />
                    <select
                      value={volunteerForm.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    >
                      <option value="">Select Preferred Role</option>
                      <option value="Vocal Team">Vocal Team</option>
                      <option value="Instrumental Team">Instrumental Team</option>
                      <option value="Tech & Sound">Tech & Sound</option>
                      <option value="Creative Team">Creative Team</option>
                      <option value="Any Role">Any Role</option>
                    </select>
                  </div>
                  
                  <textarea
                    placeholder="Tell us about your musical background, heart for worship, and availability..."
                    value={volunteerForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none resize-none"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <FiSend className="w-5 h-5 mr-2" />
                    Sign Up to Serve
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Other Ways to Connect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-church-sage/10 rounded-lg hover:bg-church-sage/20 transition-colors duration-200 cursor-pointer">
                  <FiCalendar className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Attend Rehearsals</h4>
                    <p className="text-sm text-gray-600">Wednesdays 7:00-9:00 PM • Sanctuary</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-yellow/10 rounded-lg hover:bg-church-yellow/20 transition-colors duration-200 cursor-pointer">
                  <FiMic className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Monthly Auditions</h4>
                    <p className="text-sm text-gray-600">First Saturday of each month • 10:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-gray/10 rounded-lg hover:bg-church-gray/20 transition-colors duration-200 cursor-pointer">
                  <FiUsers className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Team Fellowship</h4>
                    <p className="text-sm text-gray-600">Monthly team dinners and bonding activities</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-cream/30 rounded-lg hover:bg-church-cream/50 transition-colors duration-200 cursor-pointer">
                  <FiStar className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Special Events</h4>
                    <p className="text-sm text-gray-600">Christmas, Easter & conference worship leading</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-church-sage-dark mb-3">Contact Our Team</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <FiMail className="w-4 h-4 mr-2" />
                    <span className="text-sm">worship@jtc.com</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiPhone className="w-4 h-4 mr-2" />
                    <span className="text-sm">(256) 414-3737</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiInstagram className="w-4 h-4 mr-2" />
                    <span className="text-sm">@jtcworship</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WorshipMinistry;