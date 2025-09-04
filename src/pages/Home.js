import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiPlay, 
  FiCalendar, 
  FiUsers, 
  FiHeart,
  FiArrowRight,
  FiMapPin,
  FiClock,
  FiBookOpen
} from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  // Fetch data for homepage
  const { data: featuredSermons, isLoading: sermonsLoading } = useQuery(
    'featured-sermons',
    apiService.getFeaturedSermons,
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const { data: upcomingEvents, isLoading: eventsLoading } = useQuery(
    'upcoming-events',
    apiService.getUpcomingEvents,
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  );

  const { data: ministries, isLoading: ministriesLoading } = useQuery(
    'ministries',
    apiService.getMinistries,
    {
      refetchOnWindowFocus: false,
      staleTime: 10 * 60 * 1000, // 10 minutes
    }
  );


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-church.jpg')`,
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
              Welcome to
              <span className="block text-church-gold">Jinja Town Church</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-shadow opacity-90">
              A community of faith, hope, and love in the heart of Uganda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/about"
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Discover Our Story
              </Link>
              
              <Link 
                to="/church-service"
                className="btn-secondary text-lg px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 shadow-xl"
              >
                <FiClock className="w-5 h-5 mr-2" />
                Service Times
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-church-gold mb-2">500+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-church-gold mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-church-gold mb-2">8</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Ministries</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Sermon Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest <span className="text-gradient">Sermon</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be inspired by God's word through our weekly messages
              </p>
            </motion.div>
          </div>

          {sermonsLoading ? (
            <LoadingSpinner message="Loading latest sermon..." />
          ) : featuredSermons?.data?.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {featuredSermons.data.slice(0, 1).map((sermon) => (
                <div key={sermon._id} className="card overflow-hidden">
                  <div className="relative">
                    <img 
                      src={sermon.thumbnail || '/images/sermon-default.jpg'} 
                      alt={sermon.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Link 
                        to={`/church-service/sermons/${sermon._id}`}
                        className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                      >
                        <FiPlay className="w-8 h-8 text-white ml-1" />
                      </Link>
                    </div>
                    <div className="absolute top-4 right-4 bg-church-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      Latest
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-2" />
                        {new Date(sermon.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <FiUsers className="w-4 h-4 mr-2" />
                        {sermon.speaker}
                      </span>
                      {sermon.series && (
                        <span className="flex items-center">
                          <FiBookOpen className="w-4 h-4 mr-2" />
                          {sermon.series}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {sermon.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {sermon.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to={`/church-service/sermons/${sermon._id}`}
                        className="btn-primary flex items-center justify-center"
                      >
                        <FiPlay className="w-5 h-5 mr-2" />
                        Watch Sermon
                      </Link>
                      <Link 
                        to="/church-service/sermons"
                        className="btn-secondary flex items-center justify-center"
                      >
                        View All Sermons
                        <FiArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6">No sermons available at the moment.</p>
              <Link to="/church-service" className="btn-primary">
                Learn About Our Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient">Ministries</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect, grow, and serve through our diverse ministry opportunities
              </p>
            </motion.div>
          </div>

          {ministriesLoading ? (
            <LoadingSpinner message="Loading ministries..." />
          ) : ministries?.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {ministries.data.slice(0, 6).map((ministry, index) => (
                <motion.div
                  key={ministry._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/ministries/${ministry.slug}`} className="card h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={ministry.featuredImage || '/images/ministry-default.jpg'} 
                        alt={ministry.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-church-red bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-church-red transition-colors duration-200">
                        {ministry.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {ministry.description?.substring(0, 100)}...
                      </p>
                      <div className="flex items-center text-church-red group-hover:text-church-burgundy transition-colors duration-200">
                        <span className="font-medium">Learn More</span>
                        <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6">Ministry information will be available soon.</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              to="/ministries" 
              className="btn-primary text-lg px-8 py-4"
            >
              Explore All Ministries
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join us for fellowship, worship, and community activities
              </p>
            </motion.div>
          </div>

          {eventsLoading ? (
            <LoadingSpinner message="Loading events..." />
          ) : upcomingEvents?.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {upcomingEvents.data.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/events/${event._id}`} className="card h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={event.featuredImage || '/images/event-default.jpg'} 
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-church-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        {new Date(event.startDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
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
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {event.description?.substring(0, 100)}...
                      </p>
                      <div className="flex items-center text-church-red group-hover:text-church-burgundy transition-colors duration-200">
                        <span className="font-medium">Learn More</span>
                        <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6">No upcoming events at the moment.</p>
              <Link to="/events" className="btn-primary">
                View Event Calendar
              </Link>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              to="/events" 
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-church-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Whether you're new to faith or have been walking with God for years, 
              there's a place for you in our loving community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="btn-accent text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Connected
              </Link>
              <Link 
                to="/about"
                className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-church-red shadow-xl"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;