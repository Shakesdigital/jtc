import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiCalendar, 
  FiMapPin, 
  FiClock, 
  FiUsers, 
  FiFilter, 
  FiSearch,
  FiChevronDown,
  FiX,
  FiGrid,
  FiList,
  FiExternalLink,
  FiUserPlus,
  FiHeart,
  FiSend,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

const Events = () => {
  // State management for comprehensive filtering and display
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('upcoming');
  const [displayMode, setDisplayMode] = useState('grid'); // 'grid' or 'calendar'
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [eventSuggestion, setEventSuggestion] = useState('');
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);
  const eventsPerPage = 12;

  // Sample comprehensive events data
  const allEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      category: "Worship",
      date: "2024-12-08",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      location: "Main Sanctuary",
      description: "Join us for inspiring worship, powerful music, and a life-changing message. Experience the presence of God in community with fellow believers.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      isRecurring: true,
      registrationRequired: false,
      maxAttendees: null,
      currentAttendees: 450,
      featured: true
    },
    {
      id: 2,
      title: "Youth Christmas Celebration",
      category: "Youth",
      date: "2024-12-15",
      startTime: "06:00 PM",
      endTime: "09:00 PM",
      location: "Youth Hall",
      description: "Celebrate the season with games, worship, hot chocolate, and a special Christmas message designed for teens and young adults.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      isRecurring: false,
      registrationRequired: true,
      maxAttendees: 80,
      currentAttendees: 23,
      featured: true
    },
    {
      id: 3,
      title: "Community Food Drive",
      category: "Outreach",
      date: "2024-12-21",
      startTime: "10:00 AM",
      endTime: "02:00 PM",
      location: "Church Parking Lot",
      description: "Help us serve our local community by collecting and distributing food to families in need during the holiday season.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      isRecurring: false,
      registrationRequired: true,
      maxAttendees: 50,
      currentAttendees: 31,
      featured: false
    },
    {
      id: 4,
      title: "Christmas Eve Candlelight Service",
      category: "Worship",
      date: "2024-12-24",
      startTime: "07:00 PM",
      endTime: "08:30 PM",
      location: "Main Sanctuary",
      description: "A beautiful, traditional candlelight service celebrating the birth of our Savior with special music, readings, and communion.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=400&fit=crop",
      isRecurring: false,
      registrationRequired: false,
      maxAttendees: null,
      currentAttendees: 0,
      featured: true
    },
    {
      id: 5,
      title: "New Year Prayer & Fasting",
      category: "Worship",
      date: "2024-12-31",
      startTime: "10:00 PM",
      endTime: "01:00 AM",
      location: "Prayer Chapel",
      description: "Start the new year right with dedicated prayer, fasting, and seeking God's direction for the year ahead.",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&h=400&fit=crop",
      isRecurring: false,
      registrationRequired: false,
      maxAttendees: null,
      currentAttendees: 0,
      featured: false
    },
    {
      id: 6,
      title: "Family Game Night",
      category: "Family",
      date: "2025-01-11",
      startTime: "06:30 PM",
      endTime: "09:00 PM",
      location: "Fellowship Hall",
      description: "Bring the whole family for board games, snacks, fellowship, and fun activities for all ages. Great opportunity to meet other families!",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      isRecurring: false,
      registrationRequired: true,
      maxAttendees: 60,
      currentAttendees: 18,
      featured: false
    },
    {
      id: 7,
      title: "Men's Breakfast & Bible Study",
      category: "Fellowship",
      date: "2025-01-18",
      startTime: "07:00 AM",
      endTime: "09:00 AM",
      location: "Fellowship Hall",
      description: "Join other men for hearty breakfast, fellowship, and Bible study focused on Christian leadership and brotherhood.",
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&h=400&fit=crop",
      isRecurring: true,
      registrationRequired: false,
      maxAttendees: null,
      currentAttendees: 0,
      featured: false
    },
    {
      id: 8,
      title: "Women's Conference 2025",
      category: "Conference",
      date: "2025-02-15",
      startTime: "09:00 AM",
      endTime: "04:00 PM",
      location: "Main Sanctuary",
      description: "Annual women's conference featuring inspiring speakers, worship, workshops, and fellowship focused on growing in faith and purpose.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      isRecurring: false,
      registrationRequired: true,
      maxAttendees: 200,
      currentAttendees: 47,
      featured: true
    }
  ];

  // Categories for filtering
  const categories = ['all', 'Worship', 'Youth', 'Outreach', 'Family', 'Fellowship', 'Conference'];
  const dateRanges = {
    'upcoming': 'Upcoming Events',
    'this-week': 'This Week',
    'this-month': 'This Month',
    'all': 'All Events',
    'past': 'Past Events'
  };

  // Filter events based on current criteria
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = !searchQuery || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    // Date filtering logic
    const eventDate = new Date(event.date);
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    
    let matchesDateRange = true;
    switch (selectedDateRange) {
      case 'upcoming':
        matchesDateRange = eventDate >= today;
        break;
      case 'this-week':
        matchesDateRange = eventDate >= today && eventDate <= nextWeek;
        break;
      case 'this-month':
        matchesDateRange = eventDate >= today && eventDate <= nextMonth;
        break;
      case 'past':
        matchesDateRange = eventDate < today;
        break;
      default:
        matchesDateRange = true;
    }
    
    return matchesSearch && matchesCategory && matchesDateRange;
  });

  // Sort events by date
  const sortedEvents = filteredEvents.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return selectedDateRange === 'past' ? dateB - dateA : dateA - dateB;
  });

  // Pagination
  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = sortedEvents.slice(startIndex, startIndex + eventsPerPage);

  // Get featured events
  const featuredEvents = allEvents.filter(event => event.featured).slice(0, 3);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedDateRange]);

  // Helper functions
  const scrollToCalendar = () => {
    document.getElementById('events-display').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDateRange('upcoming');
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSuggestionSubmitted(true);
    setEventSuggestion('');
    setTimeout(() => setSuggestionSubmitted(false), 3000);
  };

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(110, 152, 150, 0.85), rgba(90, 125, 123, 0.85)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <FiCalendar className="w-20 h-20 mx-auto mb-8 text-church-yellow" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Upcoming Events: <span className="text-church-yellow">Join the Community</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              From worship nights to outreach—discover ways to connect and grow
            </p>

            <div className="pt-8">
              <button 
                onClick={scrollToCalendar}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
              >
                View Calendar
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Overview Section */}
      <section className="py-20 bg-gray-50">
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
                  Connect & <span className="text-church-yellow">Grow Together</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Welcome to our vibrant community events! Whether you're looking for worship experiences, family activities, 
                youth gatherings, or opportunities to serve others, we have something for everyone to foster faith, fun, and fellowship.
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
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
                  alt="Church Community Events"
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-church-yellow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-church-sage-dark">{allEvents.length}+</div>
                  <div className="text-sm text-church-gray">Events This Year</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {/* Main Search and Quick Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-church-sage w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events by name, theme, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none transition-all duration-300"
                  aria-label="Search events"
                />
              </div>

              <div className="flex items-center space-x-4">
                {/* Display Mode Toggle */}
                <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setDisplayMode('grid')}
                    className={`p-2 rounded transition-all duration-200 ${
                      displayMode === 'grid'
                        ? 'bg-church-sage text-white shadow-md'
                        : 'text-gray-600 hover:text-church-sage'
                    }`}
                    title="Grid view"
                  >
                    <FiGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDisplayMode('calendar')}
                    className={`p-2 rounded transition-all duration-200 ${
                      displayMode === 'calendar'
                        ? 'bg-church-sage text-white shadow-md'
                        : 'text-gray-600 hover:text-church-sage'
                    }`}
                    title="Calendar view"
                  >
                    <FiCalendar className="w-4 h-4" />
                  </button>
                </div>

                {/* Advanced Filters Toggle */}
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="flex items-center text-church-sage hover:text-church-sage-dark font-medium transition-colors duration-200"
                >
                  <FiFilter className="w-4 h-4 mr-2" />
                  Filters
                  <FiChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Quick Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(searchQuery || selectedCategory !== 'all' || selectedDateRange !== 'upcoming') && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-200 transition-colors duration-200"
                >
                  <FiX className="w-3 h-3 mr-1" />
                  Clear All
                </button>
              )}
              {searchQuery && (
                <span className="bg-church-sage text-white px-3 py-1 rounded-full text-sm">
                  Search: {searchQuery}
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="bg-church-yellow text-church-sage-dark px-3 py-1 rounded-full text-sm">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedDateRange !== 'upcoming' && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Time: {dateRanges[selectedDateRange]}
                </span>
              )}
            </div>

            {/* Advanced Filter Options */}
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="date-range-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Time Range
                  </label>
                  <select
                    id="date-range-filter"
                    value={selectedDateRange}
                    onChange={(e) => setSelectedDateRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  >
                    {Object.entries(dateRanges).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Events Display Section */}
      <section id="events-display" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-church-sage-dark">
              {displayMode === 'grid' ? 'All Events' : 'Event Calendar'}
              <span className="text-lg font-normal text-church-gray ml-2">
                ({sortedEvents.length} {sortedEvents.length === 1 ? 'event' : 'events'})
              </span>
            </h2>
          </div>

          {displayMode === 'grid' && paginatedEvents.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-church-sage text-white px-3 py-1 rounded-full text-sm font-bold">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="absolute top-4 right-4 bg-church-yellow text-church-sage-dark px-3 py-1 rounded-full text-xs font-bold">
                        {event.category}
                      </div>
                      {event.featured && (
                        <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                          FEATURED
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-church-sage-dark mb-2 group-hover:text-church-sage transition-colors duration-300">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-church-gray">
                          <FiCalendar className="w-4 h-4 mr-2 text-church-sage" />
                          {formatEventDate(event.date)}
                        </div>
                        <div className="flex items-center text-sm text-church-gray">
                          <FiClock className="w-4 h-4 mr-2 text-church-sage" />
                          {event.startTime} - {event.endTime}
                        </div>
                        <div className="flex items-center text-sm text-church-gray">
                          <FiMapPin className="w-4 h-4 mr-2 text-church-sage" />
                          {event.location}
                        </div>
                        {event.registrationRequired && (
                          <div className="flex items-center text-sm text-church-gray">
                            <FiUsers className="w-4 h-4 mr-2 text-church-sage" />
                            {event.currentAttendees}/{event.maxAttendees || '∞'} registered
                          </div>
                        )}
                      </div>
                      
                      <p className="text-church-gray mb-6 text-sm leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                      
                      <div className="flex space-x-2">
                        <Link 
                          to="/contact"
                          className="flex-1 bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300 text-sm"
                        >
                          Learn More
                        </Link>
                        {event.registrationRequired && (
                          <button className="flex items-center justify-center bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                            <FiUserPlus className="w-4 h-4 mr-1" />
                            RSVP
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                  >
                    <FiChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        page === currentPage
                          ? 'bg-church-sage text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                  >
                    Next
                    <FiChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              )}
            </>
          ) : displayMode === 'calendar' ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <FiCalendar className="w-16 h-16 mx-auto mb-6 text-church-sage" />
              <h3 className="text-2xl font-bold text-church-sage-dark mb-4">
                Calendar View Coming Soon
              </h3>
              <p className="text-church-gray max-w-md mx-auto mb-6">
                Interactive calendar view is in development. For now, use the grid view to explore all events.
              </p>
              <button
                onClick={() => setDisplayMode('grid')}
                className="bg-church-sage hover:bg-church-sage-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Switch to Grid View
              </button>
            </div>
          ) : (
            <div className="text-center py-20">
              <FiCalendar className="w-16 h-16 mx-auto mb-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-church-sage-dark mb-4">
                No events found
              </h3>
              <p className="text-church-gray max-w-2xl mx-auto mb-8">
                Try adjusting your search terms or filters to find more events.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-church-sage hover:bg-church-sage-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-church-sage-light to-church-sage">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-8 text-church-yellow" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't Miss Out—Get Involved Today!
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Have an idea for an event or want to stay updated? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event Suggestions Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Suggest an Event
              </h3>
              <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                <textarea
                  value={eventSuggestion}
                  onChange={(e) => setEventSuggestion(e.target.value)}
                  placeholder="Share your event ideas with us..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={!eventSuggestion.trim()}
                  className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-bold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Suggestion
                </button>
                {suggestionSubmitted && (
                  <div className="text-green-600 text-sm text-center">
                    Thank you for your suggestion! We'll consider it for future events.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Subscribe for Event Updates
              </h3>
              <p className="text-church-gray mb-6">
                Get notified about new events, special announcements, and community activities.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  value={subscriptionEmail}
                  onChange={(e) => setSubscriptionEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold py-3 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FiSend className="w-4 h-4 mr-2" />
                  Subscribe Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;