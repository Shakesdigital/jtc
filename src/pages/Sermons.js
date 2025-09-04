import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPlay, FiCalendar, FiUser, FiSearch, FiVideo } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Sermons = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('all');
  const [selectedSeries, setSelectedSeries] = useState('all');

  const { data: sermons, isLoading, error, refetch } = useQuery(
    ['sermons', searchQuery, selectedSpeaker, selectedSeries],
    () => apiService.getSermons({
      search: searchQuery || undefined,
      speaker: selectedSpeaker === 'all' ? undefined : selectedSpeaker,
      series: selectedSeries === 'all' ? undefined : selectedSeries
    }),
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading sermons..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Failed to Load Sermons"
          message="We couldn't load the sermons. Please try again."
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
            <FiVideo className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Sermons
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Be inspired by God's Word through our collection of messages and teachings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search sermons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-church-red outline-none text-sm"
                />
              </div>

              {/* Speaker Filter */}
              <select
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-church-red outline-none text-sm"
              >
                <option value="all">All Speakers</option>
                <option value="Pastor John">Pastor John</option>
                <option value="Pastor Mary">Pastor Mary</option>
              </select>

              {/* Series Filter */}
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-church-red outline-none text-sm"
              >
                <option value="all">All Series</option>
                <option value="Faith Journey">Faith Journey</option>
                <option value="Hope & Healing">Hope & Healing</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {sermons?.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sermons.data.map((sermon, index) => (
                <motion.div
                  key={sermon._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={sermon.thumbnail || '/images/sermon-default.jpg'}
                      alt={sermon.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link 
                        to={`/church-service/sermons/${sermon._id}`}
                        className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                      >
                        <FiPlay className="w-8 h-8 text-white ml-1" />
                      </Link>
                    </div>
                    {sermon.isFeatured && (
                      <div className="absolute top-4 right-4 bg-church-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-2" />
                        {new Date(sermon.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <FiUser className="w-4 h-4 mr-2" />
                        {sermon.speaker}
                      </span>
                    </div>
                    
                    {sermon.series && (
                      <p className="text-xs text-church-red font-medium mb-2 uppercase tracking-wide">
                        {sermon.series}
                      </p>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-church-red transition-colors duration-200">
                      {sermon.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {sermon.description}
                    </p>
                    
                    {sermon.bibleReference && (
                      <p className="text-sm text-church-red font-medium mb-4">
                        {sermon.bibleReference}
                      </p>
                    )}
                    
                    <Link 
                      to={`/church-service/sermons/${sermon._id}`}
                      className="btn-primary w-full flex items-center justify-center group-hover:bg-church-burgundy transition-all duration-300"
                    >
                      <FiPlay className="w-4 h-4 mr-2" />
                      Watch Sermon
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FiVideo className="w-16 h-16 mx-auto mb-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {searchQuery || selectedSpeaker !== 'all' || selectedSeries !== 'all'
                  ? 'No Sermons Found'
                  : 'Sermons Coming Soon'
                }
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {searchQuery || selectedSpeaker !== 'all' || selectedSeries !== 'all'
                  ? 'Try adjusting your search terms or filters.'
                  : 'We\'re working on uploading our sermon library. Check back soon for inspiring messages.'
                }
              </p>
              {(searchQuery || selectedSpeaker !== 'all' || selectedSeries !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSpeaker('all');
                    setSelectedSeries('all');
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

export default Sermons;