import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiBook,
  FiCalendar,
  FiFileText,
  FiVideo,
  FiBookOpen
} from 'react-icons/fi';
import { articlesData } from '../data/articlesData';
import { getUpcomingEvents } from '../data/eventsData';

const Resources = () => {
  // Get articles from articlesData - sorted by publish date (most recent first)
  const articles = [...articlesData].sort((a, b) => b.publishDate - a.publishDate);

  // Get events from eventsData
  const events = getUpcomingEvents(3);

  const books = [
    {
      id: 1,
      title: "Christian Living Guide",
      excerpt: "A comprehensive guide to living out your faith in daily life with practical wisdom and biblical truth.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      author: "Church Resources"
    },
    {
      id: 2,
      title: "Prayer and Worship",
      excerpt: "Discover the power of prayer and worship in your personal relationship with God through these resources.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      author: "Ministry Team"
    },
    {
      id: 3,
      title: "Family Faith Building",
      excerpt: "Resources and tools to help strengthen your family's faith journey and build godly relationships at home.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      author: "Family Ministry"
    }
  ];

  const news = [
    {
      id: 1,
      title: "New Ministry Launch",
      excerpt: "Exciting news about our latest ministry initiative to serve the Jinja community with God's love.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
      date: "September 2025"
    },
    {
      id: 2,
      title: "Church Building Updates",
      excerpt: "Progress updates on our church facility improvements and how God is providing for our needs.",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=400&h=300&fit=crop",
      date: "August 2025"
    },
    {
      id: 3,
      title: "Community Outreach Success",
      excerpt: "Celebrating the impact of our recent community outreach programs and the lives touched by God's love.",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c46a?w=400&h=300&fit=crop",
      date: "July 2025"
    }
  ];

  const bibleSeries = [
    {
      id: 1,
      title: "The Gospel of John",
      excerpt: "A deep dive into the Gospel of John, exploring the life and teachings of Jesus Christ in detail.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      episodes: "12 Episodes"
    },
    {
      id: 2,
      title: "Romans: The Gospel Explained",
      excerpt: "Understanding Paul's letter to the Romans and its profound theological implications for our faith today.",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=300&fit=crop",
      episodes: "16 Episodes"
    },
    {
      id: 3,
      title: "Psalms: Songs of the Heart",
      excerpt: "Journey through the Psalms and discover how David and other psalmists expressed their hearts to God.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      episodes: "8 Episodes"
    }
  ];

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
        case 'articles': return <FiFileText className="w-8 h-8 text-church-yellow" />;
        case 'events': return <FiCalendar className="w-8 h-8 text-church-yellow" />;
        case 'books': return <FiBook className="w-8 h-8 text-church-yellow" />;
        case 'news': return <FiVideo className="w-8 h-8 text-church-yellow" />;
        case 'bible-series': return <FiBookOpen className="w-8 h-8 text-church-yellow" />;
        default: return <FiFileText className="w-8 h-8 text-church-yellow" />;
      }
    };

    return (
      <section className="py-16 bg-white even:bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              {getIconForType()}
              <h2 className="text-3xl md:text-4xl font-bold text-church-sage-dark">
                {sectionTitle}
              </h2>
            </div>
            <Link 
              to={archivePath}
              className="flex items-center text-church-sage hover:text-church-sage-dark font-semibold transition-colors duration-300"
            >
              View All
              <FiArrowRight className="w-4 h-4 ml-2" />
            </Link>
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
                        <p className="text-sm text-church-gray mb-4 line-clamp-3">{item.excerpt}</p>
                        
                        {item.date && (
                          <p className="text-xs text-church-sage mb-3 font-medium">{item.date}</p>
                        )}
                        {item.author && (
                          <p className="text-xs text-church-sage mb-3 font-medium">By {item.author}</p>
                        )}
                        {item.episodes && (
                          <p className="text-xs text-church-sage mb-3 font-medium">{item.episodes}</p>
                        )}
                        
                        <Link 
                          to={type === 'articles' ? `/resources/articles/${item.slug}` : `${archivePath}/${item.id}`}
                          className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
                        >
                          {type === 'articles' ? 'Read Article' : 
                           type === 'events' ? 'View Event' :
                           type === 'books' ? 'Read More' :
                           type === 'news' ? 'Read News' : 'Watch Series'}
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {items.length > itemsPerView && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-church-sage hover:text-church-sage-dark p-3 rounded-full transition-all duration-300 z-10"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-church-sage hover:text-church-sage-dark p-3 rounded-full transition-all duration-300 z-10"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Church <span className="text-church-yellow">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-4xl mx-auto">
              Discover articles, events, books, news, and Bible series to deepen your faith 
              and connect with our community at Arise Jinja Town Church.
            </p>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto"></div>
          </motion.div>
        </div>
      </section>

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

      {/* All Books Section */}
      <ResourceCarousel 
        items={books}
        type="books"
        sectionTitle="All Books"
        archivePath="/resources/books/archive"
      />

      {/* All News Section */}
      <ResourceCarousel 
        items={news}
        type="news"
        sectionTitle="All News"
        archivePath="/resources/news/archive"
      />

      {/* All Bible Series Section */}
      <ResourceCarousel 
        items={bibleSeries}
        type="bible-series"
        sectionTitle="All Bible Series"
        archivePath="/resources/bible-series/archive"
      />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
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
              Subscribe to our newsletter to receive the latest articles, event updates, 
              and spiritual resources delivered to your inbox.
            </p>
            <Link 
              to="/contact"
              className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Subscribe Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;