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

  // Separate upcoming and past events
  const upcomingEventsFiltered = filteredEvents.filter(event => {
    return event.displayDate && event.displayDate >= now;
  }).sort((a, b) => a.displayDate - b.displayDate);

  const pastEventsFiltered = filteredEvents.filter(event => {
    return event.displayDate && event.displayDate < now;
  }).sort((a, b) => b.displayDate - a.displayDate);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-church-sage to-church-sage-dark text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join us for fellowship, worship, and community activities that bring us closer together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-church-sage hover:bg-church-sage-dark text-white rounded-lg transition-colors"
            >
              <FiFilter />
              <span>Tags</span>
              {selectedTags.length > 0 && (
                <span className="bg-church-yellow text-church-sage-dark text-xs px-2 py-1 rounded-full">
                  {selectedTags.length}
                </span>
              )}
              {showFilters ? <FiChevronUp /> : <FiChevronDown />}
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
      <section className="py-12">
        <div className="container-custom">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-sage-dark mb-8 text-center">Upcoming Events</h2>
            
            {upcomingEventsFiltered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEventsFiltered.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-church-sage"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-sage-dark mb-3 line-clamp-2">{event.title}</h3>
                      
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
                      
                      <p className="text-church-gray mb-4 line-clamp-3">
                        {event.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-church-sage bg-opacity-10 text-church-sage text-xs rounded-full">
                          {event.category}
                        </span>
                        {event.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/events/${event.slug}`}
                        className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No upcoming events found.</p>
              </div>
            )}
          </div>

          {/* Recurring Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-sage-dark mb-8 text-center">Recurring Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recurringEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 border-church-yellow border border-church-sage"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-church-sage-dark mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-church-gray">
                        <FiClock className="w-4 h-4 mr-2 text-church-sage" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-church-gray">
                        <FiMapPin className="w-4 h-4 mr-2 text-church-sage" />
                        {event.location}
                      </div>
                    </div>
                    
                    <p className="text-church-gray mb-4">
                      {event.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-church-yellow text-church-sage-dark text-xs rounded-full">
                        Recurring
                      </span>
                      <span className="px-2 py-1 bg-church-sage bg-opacity-10 text-church-sage text-xs rounded-full">
                        {event.category}
                      </span>
                      {event.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/events/${event.slug}`}
                      className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          {pastEventsFiltered.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-church-sage-dark mb-8 text-center">Past Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEventsFiltered.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 opacity-75"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        PAST
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-church-sage-dark mb-3">{event.title}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-church-gray">
                          <FiCalendar className="w-4 h-4 mr-2 text-church-gray" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-church-gray">
                          <FiClock className="w-4 h-4 mr-2 text-church-gray" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-church-gray">
                          <FiMapPin className="w-4 h-4 mr-2 text-church-gray" />
                          {event.location}
                        </div>
                      </div>
                      
                      <p className="text-church-gray mb-4 line-clamp-3">
                        {event.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                          {event.category}
                        </span>
                        {event.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/events/${event.slug}`}
                        className="w-full bg-gray-400 text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;