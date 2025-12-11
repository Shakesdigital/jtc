import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCalendar, 
  FiClock, 
  FiMapPin, 
  FiFilter,
  FiX,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import { getAllEvents, getRecurringEvents, getAllCategories, getAllTags } from '../data/eventsData';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [recurringEvents, setRecurringEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setEvents(getAllEvents());
    setRecurringEvents(getRecurringEvents());
  }, []);

  const categories = getAllCategories();
  const tags = getAllTags();
  const now = new Date();

  // Filter events based on selections
  const filteredEvents = events.filter(event => {
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    const matchesTag = selectedTags.length === 0 || 
                      selectedTags.some(tag => event.tags.includes(tag));
    
    // For search, match title, description, or location
    const matchesSearch = !searchTerm || 
                         event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesTag && matchesSearch;
  });

  // Filter for upcoming events only
  const upcomingEventsFiltered = filteredEvents.filter(event => {
    return event.displayDate && event.displayDate >= now;
  }).sort((a, b) => a.displayDate - b.displayDate);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/events-hero.jpg"
            alt="Events Hero"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.6)'
            }}
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-shadow-lg">
              Upcoming Events
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed text-shadow">
              Join us for fellowship, worship, and community activities that bring us closer together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-6 sm:py-8 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 sm:flex-initial">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base bg-church-sage hover:bg-church-sage-dark text-white rounded-lg transition-colors"
            >
              <FiFilter className="w-4 h-4" />
              <span>Tags</span>
              {selectedTags.length > 0 && (
                <span className="bg-church-yellow text-church-sage-dark text-xs px-2 py-1 rounded-full">
                  {selectedTags.length}
                </span>
              )}
              {showFilters ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Tag Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-church-sage text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200"
                  >
                    Clear <FiX />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Events Content */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container-custom">
          {/* Upcoming Events */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-church-sage-dark mb-6 sm:mb-8 text-center">Upcoming Events</h2>
            
            {upcomingEventsFiltered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {upcomingEventsFiltered.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-church-sage flex flex-col"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-44 sm:h-48 md:h-52 object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-church-sage-dark mb-3 line-clamp-2">{event.title}</h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-xs sm:text-sm text-church-gray">
                          <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-church-sage flex-shrink-0" />
                          <span className="line-clamp-1">{event.date}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-church-gray">
                          <FiClock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-church-sage flex-shrink-0" />
                          <span className="line-clamp-1">{event.time}</span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-church-gray">
                          <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-church-sage flex-shrink-0" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-church-gray mb-4 line-clamp-3">
                        {event.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        <span className="px-2 py-1 bg-church-sage bg-opacity-10 text-church-sage text-xs rounded-full">
                          {event.category}
                        </span>
                        {event.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                        {event.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{event.tags.length - 2}
                          </span>
                        )}
                      </div>

                      <Link
                        to={`/events/${event.slug}`}
                        className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 block mt-auto"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <p className="text-gray-500 text-base sm:text-lg">No upcoming events found.</p>
              </div>
            )}
          </div>

          {/* Recurring Events */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-church-sage-dark mb-6 sm:mb-8 text-center">Recurring Events</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {recurringEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-church-sage flex flex-col"
                >
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-church-sage-dark flex-1">{event.title}</h3>
                      <span className="px-2 py-1 bg-church-yellow text-church-sage-dark text-xs rounded-full font-bold flex-shrink-0">
                        Recurring
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs sm:text-sm text-church-gray">
                        <FiClock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-church-sage flex-shrink-0" />
                        <span className="line-clamp-1">{event.time}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-church-gray">
                        <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-church-sage flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-church-gray mb-4 line-clamp-3">
                      {event.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      <span className="px-2 py-1 bg-church-sage bg-opacity-10 text-church-sage text-xs rounded-full">
                        {event.category}
                      </span>
                      {event.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                      {event.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{event.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/events/${event.slug}`}
                      className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 block mt-auto"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Events;