import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiTarget, FiStar, FiMail, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const About = () => {
  // Carousel state for hero section
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroHeight, setHeroHeight] = useState('100vh');

  // Hero carousel slides - maintaining single image as requested
  const heroSlides = useMemo(() => [
    {
      image: '/images/about-us-hero.jpg',
      alt: 'About Us Hero - Church Community',
      title: 'About Arise Jinja Town Church',
      highlight: 'Arise',
      description: 'A welcoming Christian community in partnership with Four12 Global, encouraging people to love God and love one another and to grow together as one faith family community in Jesus Christ.'
    }
  ], []);

  // Auto-advance carousel (optional for single image)
  useEffect(() => {
    if (heroSlides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [heroSlides.length]);

  // Calculate responsive height based on device type and image aspect ratio
  useEffect(() => {
    const calculateResponsiveHeight = () => {
      const img = new Image();
      img.onload = () => {
        const imageAspectRatio = img.naturalWidth / img.naturalHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Device breakpoints
        const isMobile = viewportWidth < 768;
        const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

        let calculatedHeight;

        if (isMobile) {
          // Mobile: Full viewport coverage without padding
          calculatedHeight = viewportHeight;
        } else if (isTablet) {
          // Tablet: Full viewport coverage without padding
          calculatedHeight = viewportHeight;
        } else {
          // Desktop: Full image display with generous space
          const desktopHeight = viewportWidth / imageAspectRatio;
          const minDesktopHeight = viewportHeight; // At least full viewport
          calculatedHeight = Math.max(desktopHeight, minDesktopHeight);
        }

        setHeroHeight(`${calculatedHeight}px`);
      };

      img.src = heroSlides[currentSlide].image;
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
  }, [currentSlide, heroSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const values = [
    {
      icon: FiTarget,
      title: 'Discipleship / Growth in Christ',
      description: 'Equipping believers to live out their faith daily, discovering their purpose in Christ through discipleship and service.',
      image: '/images/value-growth.jpg'
    },
    {
      icon: FiUsers,
      title: 'Community / Fellowship',
      description: 'Building strong bonds through fellowship and service. We are a richly diverse family united in faith.',
      image: '/images/value-community.jpg'
    },
    {
      icon: FiStar,
      title: 'Outreach / Evangelism',
      description: 'Sharing the Gospel locally and beyond through church planting, community development, pastor training, and global missions.',
      image: '/images/value-outreach.jpg'
    },
    {
      icon: FiHeart,
      title: 'Come As You Are',
      description: 'Everyone is welcome, just as they are. Encouraging people to love God and love one another and to grow together as one faith family community in Jesus Christ.',
      image: '/images/value-inclusivity.jpg'
    }
  ];

  const leadership = [
    {
      name: 'Richard',
      role: 'Lead Elder',
      image: '/images/pr-richard-latest.jpg',
      bio: 'Richard oversees the overall vision and ministries of Jinja Town Church, with a heart for encouraging people to love God and love one another as a faith family community.',
      contact: '+31627997562'
    },
    {
      name: 'Jonathan',
      role: 'Leader - Discipleship & Outreach',
      image: '/images/pr-jonathan-latest.jpg',
      bio: 'Jonathan focuses on discipleship training and evangelism, equipping believers to share the Gospel with confidence and love.',
      contact: '+256784805817'
    },
    {
      name: 'Kenneth',
      role: 'Leader - Worship & Family Groups',
      image: '/images/pr-kenneth-latest.jpg',
      bio: 'Kenneth guides our worship ministry and oversees family group coordination, fostering deeper spiritual connections.'
    },
    {
      name: 'Joshua',
      role: 'Men\'s Ministry',
      image: '/images/elder-joshua-latest.jpg',
      bio: 'Joshua supports men\'s ministry and serves on the elders\' council, providing spiritual guidance and mentorship.',
      contact: '+256774775058'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Hero Carousel Section */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: heroHeight,
          minHeight: '100vh'
        }}
      >
        {/* Carousel Background */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full relative"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-full object-cover object-center transition-all duration-300"
              style={{
                filter: 'brightness(0.6)',
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          </motion.div>
        </div>

        {/* Navigation Arrows - Hidden for single image but ready for multiple */}
        {heroSlides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Slide Indicators - Hidden for single image but ready for multiple */}
        {heroSlides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-church-yellow scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg text-center">
              {heroSlides[currentSlide].title.split(heroSlides[currentSlide].highlight).map((part, index, array) => {
                if (index === array.length - 1) return part;
                return (
                  <React.Fragment key={index}>
                    {part}
                    <span className="text-church-yellow">{heroSlides[currentSlide].highlight}</span>
                  </React.Fragment>
                );
              })}
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow text-center">
              {heroSlides[currentSlide].description.includes('Four12 Global') ? (
                <>
                  A welcoming Christian community in partnership with{' '}
                  <a
                    href="https://four12global.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-church-yellow hover:text-church-yellow-dark transition-colors duration-300 underline"
                  >
                    Four12 Global
                  </a>
                  , encouraging people to love God and love one another and to grow together as one faith family community in Jesus Christ.
                </>
              ) : (
                heroSlides[currentSlide].description
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/mission-story.jpg"
                alt="Church Community"
                className="rounded-xl shadow-lg w-full h-80 md:h-96 lg:h-[28rem] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>Our mission is rooted in John 3:16 and 1 Timothy 2:1-4:</strong> "All people can be saved if they believe in Christ Jesus our Lord."
                  We strive to reach out to ALL people in Jinja Town, encouraging people to love God and love one another and to grow together as one faith family community in Jesus Christ. We believe in the transformative power of being born again through faith in Christ, experiencing new life and spiritual renewal. Whether you're new to faith or a lifelong believer, we invite you to experience the life-changing love of Jesus with us and discover what it means to be made new in Him.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do as a church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our church community with wisdom and love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-avatar.jpg';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action - Enhanced Visibility */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-church-sage via-church-sage-dark to-church-sage text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-church-yellow rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-church-yellow rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl opacity-5"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg"
            >
              <span className="text-church-yellow">Join Our Family</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto text-shadow"
            >
              We invite you to become part of our church family. Come as you are,
              and discover a community where you can grow, serve, and thrive in Jesus Christ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/church-service"
                className="btn-accent text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <FiUsers className="w-5 h-5 mr-2" />
                Visit This Sunday!
              </Link>

              <Link
                to="/contact"
                className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-church-sage-dark rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <FiMail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </motion.div>

            {/* Additional encouragement text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-base mt-4 opacity-90 italic"
            >
              "Come and see!" - John 1:46
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;