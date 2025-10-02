import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiCalendar,
  FiFileText,
  FiMusic
} from 'react-icons/fi';
import { articlesData } from '../data/articlesData';
import { getAllEvents } from '../data/eventsData';
import { getAllSermons } from '../data/sermonsData';

const Resources = () => {
  // Get all sermons from sermonsData - sorted by date (most recent first)
  const sermons = getAllSermons();

  // Get articles from articlesData - sorted by publish date (most recent first)
  const articles = [...articlesData].sort((a, b) => b.publishDate - a.publishDate);

  // Get all events from eventsData
  const events = getAllEvents();

  // Carousel component
  const ResourceCarousel = ({ items, type, sectionTitle, archivePath }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const maxIndex = Math.max(0, items.length - itemsPerView);

    const nextSlide = () => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    };

    const prevSlide = () => {
      setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
    };

    const getIconForType = () => {
      switch (type) {
        case 'sermons': return <FiMusic className="w-8 h-8 text-church-yellow" />;
        case 'articles': return <FiFileText className="w-8 h-8 text-church-yellow" />;
        case 'events': return <FiCalendar className="w-8 h-8 text-church-yellow" />;
        default: return <FiFileText className="w-8 h-8 text-church-yellow" />;
      }
    };

    return (
      <section className="py-16 bg-white even:bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              {getIconForType()}
              <h2 className="text-3xl md:text-4xl font-bold text-church-sage-dark">
                {sectionTitle}
              </h2>
            </div>

            {/* Navigation Arrows at Top */}
            <div className="flex items-center gap-4">
              {items.length > itemsPerView && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="bg-white border border-church-sage shadow-md hover:shadow-lg text-church-sage hover:bg-church-sage hover:text-white p-3 rounded-full transition-all duration-300"
                    aria-label="Previous"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="bg-white border border-church-sage shadow-md hover:shadow-lg text-church-sage hover:bg-church-sage hover:text-white p-3 rounded-full transition-all duration-300"
                    aria-label="Next"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              <Link
                to={archivePath}
                className="flex items-center text-church-sage hover:text-church-sage-dark font-semibold transition-colors duration-300 whitespace-nowrap"
              >
                View All
                <FiArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
              >
                {items.map((item, index) => (
                  <div key={item.id} className={`flex-shrink-0 px-3 ${
                    itemsPerView === 4 ? 'w-1/4' : 
                    itemsPerView === 3 ? 'w-1/3' : 
                    itemsPerView === 2 ? 'w-1/2' : 'w-full'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-church-sage-dark mb-2 line-clamp-2">{item.title}</h3>

                        {type === 'sermons' && item.speaker && (
                          <p className="text-sm text-church-sage mb-2 font-medium">By {item.speaker}</p>
                        )}

                        {type === 'articles' && item.author && (
                          <p className="text-sm text-church-sage mb-2 font-medium">By {item.author}</p>
                        )}

                        <p className="text-sm text-church-gray mb-4 line-clamp-3">
                          {type === 'sermons' ? item.summary :
                           type === 'articles' ? item.excerpt :
                           item.excerpt}
                        </p>

                        {type === 'sermons' && item.dateFormatted && (
                          <p className="text-xs text-church-sage mb-3 font-medium">{item.dateFormatted}</p>
                        )}

                        {type === 'events' && item.date && (
                          <p className="text-xs text-church-sage mb-3 font-medium">{item.date}</p>
                        )}

                        <Link
                          to={
                            type === 'sermons' ? `/sermons/${item.slug}` :
                            type === 'articles' ? `/resources/articles/${item.slug}` :
                            type === 'events' ? `/events/${item.slug}` : '#'
                          }
                          className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
                        >
                          {type === 'sermons' ? 'Listen to Sermon' :
                           type === 'articles' ? 'Read Article' :
                           type === 'events' ? 'View Event' : 'Learn More'}
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen hero-content-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/church-service-ministry.jpg"
            alt="Church Resources Hero"
            className="hero-image"
            style={{
              filter: 'brightness(0.6)'
            }}
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg">
              Church <span className="text-church-yellow">Resources</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow">
              Explore our sermons, articles, and upcoming events to deepen your faith
              and connect with our community at Arise Jinja Town Church.
            </p>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* All Sermons Section */}
      <ResourceCarousel
        items={sermons}
        type="sermons"
        sectionTitle="All Sermons"
        archivePath="/sermons/archive"
      />

      {/* All Articles Section */}
      <ResourceCarousel
        items={articles}
        type="articles"
        sectionTitle="All Articles"
        archivePath="/articles"
      />

      {/* All Events Section */}
      <ResourceCarousel
        items={events}
        type="events"
        sectionTitle="All Events"
        archivePath="/events"
      />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected with Our Resources
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest sermons, articles, event updates,
              and spiritual resources delivered to your inbox.
            </p>
            <Link
              to="/contact"
              className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;