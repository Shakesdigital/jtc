import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import ContentCarousel from '../components/ContentCarousel';
import { getRecentSermons } from '../data/sermonsData';
import { articlesData } from '../data/articlesData';
import { getUpcomingEvents } from '../data/eventsData';
import '../styles/carousel.css';

const Home = () => {
  // Static content mode - API calls disabled for initial deployment

  // Responsive height state for hero section
  const [heroHeight, setHeroHeight] = useState('100vh');
  
  // Hero carousel images - using authentic church photos
  const heroImages = [
    {
      id: 1,
      url: "/images/IMG-20250928-WA0038.jpg",
      title: "Arise Jinja Town Church",
      subtitle: "A welcoming church family that seeks to share the gospel and the love of Jesus Christ to the community around Jinja, Uganda and to the diaspora"
    },
    {
      id: 2,
      url: "/images/community-banner.jpg",
      title: "A Welcoming Christian Community",
      subtitle: "Encouraging people to love God and love one another as one faith family community"
    },
    {
      id: 3,
      url: "/images/IMG-20250923-WA0375.jpg",
      title: "Richly Diverse Church Family",
      subtitle: "People of all ethnicities and backgrounds worshipping together"
    }
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000); // Change slide every 8 seconds (slower transition)

    return () => clearInterval(timer);
  }, [heroImages.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  

  // Get real sermon data
  const recentSermons = getRecentSermons(3);

  // Get events from eventsData
  const sampleEvents = getUpcomingEvents(3);

  // Get ALL articles from articlesData (not just recent ones)
  const sampleArticles = [...articlesData].sort((a, b) => b.publishDate - a.publishDate);

  const ministries = [
    {
      id: 1,
      title: "Children Ministry",
      image: "/images/ministries/children-ministry.jpg",
      description: "Creating a fun, safe environment where children learn about God's love through stories, songs, and activities that build their faith foundation."
    },
    {
      id: 2,
      title: "Worship Ministry",
      image: "/images/ministries/worship-ministry.jpg",
      description: "Leading the congregation in heartfelt worship through music, praise, and creating an atmosphere of reverence and spiritual connection."
    },
    {
      id: 3,
      title: "Family Groups Ministry",
      image: "/images/ministries/family-groups-ministry.jpg",
      description: "Building strong family bonds and community connections through small group fellowship, prayer, and mutual support in faith."
    },
    {
      id: 4,
      title: "Discipleship Equip Ministry",
      image: "/images/ministries/discipleship-equip-ministry.jpg",
      description: "Equipping believers with biblical knowledge, spiritual disciplines, and practical skills for Christian living and ministry service."
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Enhanced Hero Banner Section with Carousel */}
      <section
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: heroHeight,
          minHeight: '100vh'
        }}
        aria-label="Hero banner carousel"
      >
        {/* Carousel Background Images */}
        <div className="absolute inset-0 w-full h-full" role="img" aria-label={heroImages[currentSlide].title}>
          {heroImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.05
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              aria-hidden={index !== currentSlide}
            >
              <img
                src={image.url}
                alt={index === currentSlide ? image.title : ''}
                className="w-full h-full transition-all duration-300"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.7)'
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 sm:p-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-church-yellow focus:ring-offset-2"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 sm:p-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-church-yellow focus:ring-offset-2"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3" role="tablist" aria-label="Carousel slides">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-church-yellow focus:ring-offset-2 ${
                index === currentSlide ? 'bg-church-yellow scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            />
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg text-center">
              {heroImages[currentSlide].title}
            </h1>

            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow text-center">
              {heroImages[currentSlide].subtitle}
            </p>

            <div className="pt-4 sm:pt-5 md:pt-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  to="/church-service"
                  className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl btn-hero w-full sm:w-auto border-2 sm:border-3"
                >
                  Join Us This Sunday at 10:00 AM
                </Link>

                <Link
                  to="/about"
                  className="bg-transparent border-2 sm:border-3 border-white text-white hover:bg-white hover:text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl btn-hero w-full sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </section>


      {/* About the Church Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
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
                  About <span className="text-church-yellow">Our Church</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our story began almost by accident. We initially held Sunday services for the staff at the Arise Africa  Guesthouse, as they were unable to attend church due to work commitments. 
                As attendance grew, we recognized a deep hunger in the Jinja community for a church that embraces 
                diversity and unity in Christ. Today, we are a richly diverse family, with people of various ethnicities, backgrounds, and life experiences coming together to worship, pray, and serve.
              </p>

              <Link 
                to="/about"
                className="inline-flex items-center bg-church-sage hover:bg-church-sage-dark text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read More About Us
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
                  src="/images/church-welcome.jpg"
                  alt="Church Welcome"
                  className="w-full h-96 transform hover:scale-105 transition-transform duration-500"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/30 to-transparent"></div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Church Ministries Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Our <span className="text-church-yellow">Ministries</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Connect, grow, and serve through our diverse ministry opportunities designed for every stage of life
              </p>
            </motion.div>
          </div>

          <div className="ministry-grid">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ministry-card"
              >
                <div className="relative overflow-hidden ministry-card-image">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-48 transform hover:scale-110 transition-transform duration-500"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="ministry-card-content">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-3">{ministry.title}</h3>
                  <p className="text-church-gray mb-6 leading-relaxed ministry-card-description">{ministry.description}</p>
                  
                  <div className="ministry-card-actions">
                    <Link 
                      to={
                        ministry.title === "Children Ministry" ? "/ministries/childrens-ministry" :
                        ministry.title === "Worship Ministry" ? "/ministries/worship-ministry" :
                        ministry.title === "Family Groups Ministry" ? "/ministries/family-groups" :
                        ministry.title === "Discipleship Equip Ministry" ? "/ministries/discipleship-equip" :
                        "/ministries"
                      }
                      className="inline-flex items-center text-church-sage hover:text-church-sage-dark font-semibold transition-colors duration-300"
                    >
                      Learn More
                      <FiArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/ministries"
              className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore All Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sermons Section with Carousel */}
      <div className="bg-gray-50">
        <ContentCarousel
          title={<>Recent <span className="text-church-yellow">Sermons</span></>}
          subtitle="Be inspired by God's word through our powerful messages and teachings"
          items={recentSermons}
          type="sermons"
          autoScroll={true}
          scrollInterval={5000}
          ctaLink="/sermons/archive"
          ctaText="View All Sermons"
        />
      </div>

      {/* Resources Section with Carousel */}
      <div className="bg-gray-50">
        <ContentCarousel
          title={<>Latest <span className="text-church-yellow">Articles</span></>}
          subtitle="Discover inspiring articles by Richard van de Ruit and other spiritual resources to deepen your faith journey"
          items={sampleArticles}
          type="articles"
          autoScroll={true}
          scrollInterval={5000}
          ctaLink="/articles"
          ctaText="View All Articles"
        />
      </div>

      {/* Upcoming Events Section with Carousel */}
      <div className="bg-white">
        <ContentCarousel
          title={<>Upcoming <span className="text-church-yellow">Events</span></>}
          subtitle="Join us for fellowship, worship, and community activities that bring us closer together"
          items={sampleEvents}
          type="events"
          autoScroll={true}
          scrollInterval={5000}
          ctaLink="/events"
          ctaText="See Full Calendar"
        />
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Diverse Family?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
              Whether you're new to faith or a lifelong believer, we invite you to experience 
              the life-changing love of Jesus with us. Come as you are - everyone is welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
              >
                Contact Us or Visit This Sunday!
              </Link>
              <Link 
                to="/about"
                className="bg-transparent border-3 border-church-yellow text-church-yellow hover:bg-church-yellow hover:text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-xl transition-all duration-300"
              >
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;