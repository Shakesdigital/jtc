import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiChevronLeft, 
  FiChevronRight,
  FiPlay,
  FiVolume2,
  FiShare2,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiArrowRight
} from 'react-icons/fi';

const ContentCarousel = ({ 
  title, 
  subtitle, 
  items, 
  type = 'sermons', // 'sermons', 'articles', or 'events'
  autoScroll = true,
  scrollInterval = 5000,
  ctaLink,
  ctaText 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Determine items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(type === 'events' ? 4 : 3);
      } else if (width >= 768) {
        setItemsPerView(3);
      } else if (width >= 481) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [type]);

  // Navigation functions
  const handleNext = useCallback(() => {
    const currentMaxIndex = Math.max(0, Math.ceil(items.length / itemsPerView) - 1);
    setCurrentIndex((prev) => (prev >= currentMaxIndex ? 0 : prev + 1));
  }, [items.length, itemsPerView]);

  const maxIndex = Math.max(0, Math.ceil(items.length / itemsPerView) - 1);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, scrollInterval);

    return () => clearInterval(timer);
  }, [autoScroll, scrollInterval, isHovered, handleNext]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  const getVisibleItems = () => {
    const startIdx = currentIndex * itemsPerView;
    return items.slice(startIdx, startIdx + itemsPerView);
  };

  const renderSermonCard = (sermon) => (
    <div className="carousel-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden carousel-card-image">
        <img
          src={sermon.image || "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=300&fit=crop"}
          alt={sermon.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="carousel-card-content">
        <h3 className="text-lg font-bold text-church-sage-dark mb-2 line-clamp-2">{sermon.title}</h3>
        <p className="text-sm text-church-gray mb-3">{sermon.speaker}</p>
        <p className="text-sm text-church-gray mb-6 leading-relaxed line-clamp-3">{sermon.description}</p>
        
        <div className="flex justify-center space-x-4">
          <Link to="/sermons/archive" className="flex items-center space-x-1 text-church-sage hover:text-church-sage-dark transition-colors duration-300">
            <FiVolume2 className="w-4 h-4" />
            <span className="text-sm font-medium">Listen</span>
          </Link>
          <Link to="/sermons/archive" className="flex items-center space-x-1 text-church-sage hover:text-church-sage-dark transition-colors duration-300">
            <FiPlay className="w-4 h-4" />
            <span className="text-sm font-medium">Watch</span>
          </Link>
          <button className="flex items-center space-x-1 text-church-sage hover:text-church-sage-dark transition-colors duration-300">
            <FiShare2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderArticleCard = (article) => (
    <div className="carousel-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden carousel-card-image">
        <img
          src={article.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"}
          alt={article.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      <div className="carousel-card-content">
        <h3 className="text-lg font-bold text-church-sage-dark mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-xs text-church-sage mb-3 font-medium">By {article.author || 'Church Staff'}</p>
        <p className="text-sm text-church-gray mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>
        
        <Link 
          to={article.slug ? `/resources/articles/${article.slug}` : '/resources/articles/archive'}
          className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
        >
          Read Article
        </Link>
      </div>
    </div>
  );

  const renderEventCard = (event) => (
    <div className="carousel-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-church-yellow">
      <div className="relative overflow-hidden carousel-card-image">
        <img
          src={event.image || "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-church-yellow text-church-sage-dark px-3 py-1 rounded-full text-xs font-bold">
          UPCOMING
        </div>
      </div>
      
      <div className="carousel-card-content">
        <h3 className="text-lg font-bold text-church-sage-dark mb-3 line-clamp-2">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-church-gray">
            <FiCalendar className="w-4 h-4 mr-2 text-church-sage" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-church-gray">
            <FiClock className="w-4 h-4 mr-2 text-church-sage" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-church-gray">
            <FiMapPin className="w-4 h-4 mr-2 text-church-sage" />
            {event.location}
          </div>
        </div>
        
        <p className="text-sm text-church-gray mb-6 leading-relaxed line-clamp-3">{event.description}</p>
        
        <Link 
          to="/events/archive"
          className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
        >
          View Event Details
        </Link>
      </div>
    </div>
  );

  const renderCard = (item) => {
    switch (type) {
      case 'sermons':
        return renderSermonCard(item);
      case 'articles':
        return renderArticleCard(item);
      case 'events':
        return renderEventCard(item);
      default:
        return null;
    }
  };

  return (
    <section className="carousel-section py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              {title}
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            {subtitle && (
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        <div 
          className="relative carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          {items.length > itemsPerView && (
            <>
              <button
                onClick={handlePrev}
                className="carousel-nav carousel-nav-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg hover:shadow-xl text-church-sage hover:text-church-sage-dark p-3 rounded-full transition-all duration-300"
                aria-label="Previous items"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={handleNext}
                className="carousel-nav carousel-nav-next absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg hover:shadow-xl text-church-sage hover:text-church-sage-dark p-3 rounded-full transition-all duration-300"
                aria-label="Next items"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Carousel Items */}
          <div 
            className="carousel-track overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="carousel-items-container"
              >
                <div className={`carousel-items grid gap-6 ${
                  itemsPerView === 1 ? 'grid-cols-1' :
                  itemsPerView === 2 ? 'grid-cols-1 md:grid-cols-2' :
                  itemsPerView === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {getVisibleItems().map((item, index) => (
                    <motion.div
                      key={item.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {renderCard(item)}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          {items.length > itemsPerView && (
            <div className="carousel-dots flex justify-center mt-8 space-x-2">
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`carousel-dot w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-church-yellow w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA Button */}
        {ctaLink && ctaText && (
          <div className="text-center mt-12">
            <Link 
              to={ctaLink}
              className="inline-flex items-center bg-church-sage hover:bg-church-sage-dark text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {ctaText}
              <FiArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentCarousel;