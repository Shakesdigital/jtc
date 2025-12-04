import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiUsers, FiMail, FiPhone } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const MinistryDetail = () => {
  const { slug } = useParams();
  
  const { data: ministry, isLoading, error } = useQuery(
    ['ministry', slug],
    () => apiService.getMinistry(slug),
    {
      enabled: !!slug,
    }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading ministry details..." />
      </div>
    );
  }

  if (error || !ministry?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Ministry Not Found"
          message="The ministry you're looking for doesn't exist or has been moved."
        />
      </div>
    );
  }

  const ministryData = ministry.data;

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              {ministryData.name}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              {ministryData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministry Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-8 mb-8"
              >
                {ministryData.featuredImage && (
                  <img
                    src={ministryData.featuredImage}
                    alt={ministryData.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>{ministryData.longDescription || ministryData.description}</p>
                </div>
              </motion.div>

              {/* Gallery */}
              {ministryData.gallery && ministryData.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ministryData.gallery.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${ministryData.name} gallery ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Ministry Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ministry Information</h3>
                
                <div className="space-y-4">
                  {ministryData.meetingTime && (
                    <div className="flex items-start space-x-3">
                      <FiClock className="w-5 h-5 text-church-red mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Meeting Time</p>
                        <p className="text-gray-600">{ministryData.meetingTime}</p>
                      </div>
                    </div>
                  )}

                  {ministryData.meetingLocation && (
                    <div className="flex items-start space-x-3">
                      <FiMapPin className="w-5 h-5 text-church-red mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">{ministryData.meetingLocation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Leadership */}
              {ministryData.leader && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Ministry Leader</h3>
                  
                  <div className="text-center">
                    {ministryData.leader.image && (
                      <img
                        src={ministryData.leader.image}
                        alt={ministryData.leader.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                    )}
                    
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {ministryData.leader.name}
                    </h4>
                    
                    <div className="space-y-2">
                      {ministryData.leader.email && (
                        <a
                          href={`mailto:${ministryData.leader.email}`}
                          className="flex items-center justify-center text-sm text-gray-600 hover:text-church-red transition-colors duration-200"
                        >
                          <FiMail className="w-4 h-4 mr-2" />
                          {ministryData.leader.email}
                        </a>
                      )}
                      
                      {ministryData.leader.phone && (
                        <a
                          href={`tel:${ministryData.leader.phone}`}
                          className="flex items-center justify-center text-sm text-gray-600 hover:text-church-red transition-colors duration-200"
                        >
                          <FiPhone className="w-4 h-4 mr-2" />
                          {ministryData.leader.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Get Involved */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="card p-6 bg-church-red text-white text-center"
              >
                <FiUsers className="w-12 h-12 mx-auto mb-4 text-church-gold" />
                <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                <p className="mb-6 opacity-90">
                  Interested in joining this ministry? We'd love to have you be part of our community.
                </p>
                <button className="btn-accent w-full">
                  Join This Ministry
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistryDetail;