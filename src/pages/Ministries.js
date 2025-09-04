import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiMapPin, FiClock, FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Ministries = () => {
  const { 
    data: ministries, 
    isLoading, 
    error, 
    refetch 
  } = useQuery('ministries', apiService.getMinistries, {
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading ministries..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Failed to Load Ministries"
          message="We couldn't load the ministry information. Please try again."
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
            <FiHeart className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Our Ministries
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Discover meaningful ways to connect, grow in faith, and serve our community 
              through our diverse ministry opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {ministries?.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ministries.data.map((ministry, index) => (
                <motion.div
                  key={ministry._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card h-full hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={ministry.featuredImage || '/images/ministry-default.jpg'} 
                      alt={ministry.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-church-red bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    {ministry.category && (
                      <div className="absolute top-4 right-4 bg-church-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        {ministry.category}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-church-red transition-colors duration-200">
                      {ministry.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                      {ministry.description}
                    </p>

                    {/* Ministry Details */}
                    <div className="space-y-3 mb-6">
                      {ministry.meetingTime && (
                        <div className="flex items-center text-gray-600">
                          <FiClock className="w-4 h-4 mr-3 text-church-red flex-shrink-0" />
                          <span className="text-sm">{ministry.meetingTime}</span>
                        </div>
                      )}
                      
                      {ministry.meetingLocation && (
                        <div className="flex items-center text-gray-600">
                          <FiMapPin className="w-4 h-4 mr-3 text-church-red flex-shrink-0" />
                          <span className="text-sm">{ministry.meetingLocation}</span>
                        </div>
                      )}

                      {ministry.leader?.name && (
                        <div className="flex items-center text-gray-600">
                          <FiUsers className="w-4 h-4 mr-3 text-church-red flex-shrink-0" />
                          <span className="text-sm">Led by {ministry.leader.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Contact Info */}
                    {ministry.leader && (ministry.leader.email || ministry.leader.phone) && (
                      <div className="border-t pt-4 mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Contact Leader</h5>
                        <div className="space-y-2">
                          {ministry.leader.email && (
                            <a 
                              href={`mailto:${ministry.leader.email}`}
                              className="flex items-center text-sm text-gray-600 hover:text-church-red transition-colors duration-200"
                            >
                              <FiMail className="w-4 h-4 mr-2" />
                              {ministry.leader.email}
                            </a>
                          )}
                          {ministry.leader.phone && (
                            <a 
                              href={`tel:${ministry.leader.phone}`}
                              className="flex items-center text-sm text-gray-600 hover:text-church-red transition-colors duration-200"
                            >
                              <FiPhone className="w-4 h-4 mr-2" />
                              {ministry.leader.phone}
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <Link 
                      to={`/ministries/${ministry.slug}`}
                      className="btn-primary w-full flex items-center justify-center group-hover:bg-church-burgundy transition-all duration-300"
                    >
                      Learn More
                      <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FiUsers className="w-16 h-16 mx-auto mb-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ministries Coming Soon
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We're working on organizing our ministry programs. Check back soon or contact us 
                to learn about current ministry opportunities.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          )}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Involved Today
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Ready to take the next step in your faith journey? Join a ministry that 
              matches your passions and gifts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="btn-accent text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Join a Ministry
              </Link>
              <Link 
                to="/events"
                className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-church-red shadow-xl"
              >
                View Upcoming Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;