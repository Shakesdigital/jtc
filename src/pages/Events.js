import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiFilter, FiSearch } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('upcoming'); // 'upcoming' or 'all'

  const { data: events, isLoading, error, refetch } = useQuery(
    ['events', searchQuery, selectedCategory, viewMode],
    () => apiService.getEvents({
      search: searchQuery || undefined,
      category: selectedCategory === 'all' ? undefined : selectedCategory,
      upcoming: viewMode === 'upcoming'
    }),
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  );

  const categories = ['all', 'worship', 'outreach', 'youth', 'family', 'conference', 'training'];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading events..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Failed to Load Events"
          message="We couldn't load the events. Please try again."
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-church-red to-church-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiCalendar className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Events
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Join us for fellowship, worship, and community activities throughout the year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* View Toggle */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('upcoming')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'upcoming'
                    ? 'bg-church-red text-white shadow-md'
                    : 'text-gray-600 hover:text-church-red hover:bg-white'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'all'
                    ? 'bg-church-red text-white shadow-md'
                    : 'text-gray-600 hover:text-church-red hover:bg-white'
                }`}
              >
                All Events
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-church-red outline-none text-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-church-red outline-none text-sm appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : 
                       category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {events?.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.data.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.featuredImage || '/images/event-default.jpg'}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-church-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {new Date(event.startDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    {event.category && (
                      <div className="absolute top-4 right-4 bg-church-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-church-red transition-colors duration-200">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FiClock className="w-4 h-4 mr-2 text-church-red" />
                        <span className="text-sm">
                          {event.startTime} - {event.endTime}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiMapPin className="w-4 h-4 mr-2 text-church-red" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      {event.registrationRequired && (
                        <div className="flex items-center text-gray-600">
                          <FiUsers className="w-4 h-4 mr-2 text-church-red" />
                          <span className="text-sm">
                            {event.registrationCount || 0} / {event.registrationLimit || '∞'} registered
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    
                    <Link 
                      to={`/events/${event._id}`}
                      className="btn-primary w-full flex items-center justify-center group-hover:bg-church-burgundy transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FiCalendar className="w-16 h-16 mx-auto mb-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {searchQuery || selectedCategory !== 'all'
                  ? 'No Events Found'
                  : viewMode === 'upcoming'
                  ? 'No Upcoming Events'
                  : 'No Events Available'
                }
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {searchQuery || selectedCategory !== 'all'
                  ? 'Try adjusting your search terms or filters.'
                  : viewMode === 'upcoming'
                  ? 'Check back soon for exciting upcoming events and activities.'
                  : 'Events will be posted here as they are scheduled.'
                }
              </p>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;