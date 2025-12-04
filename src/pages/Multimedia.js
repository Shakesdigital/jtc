import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { 
  FiPlay, 
  FiVideo, 
  FiMusic, 
  FiDownload, 
  FiShare2, 
  FiFilter,
  FiSearch,
  FiX
} from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Multimedia = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxMedia, setLightboxMedia] = useState(null);
  const [filteredMedia, setFilteredMedia] = useState([]);

  // Determine initial tab from URL
  useEffect(() => {
    if (location.pathname.includes('/videos')) {
      setActiveTab('video');
    } else if (location.pathname.includes('/audio')) {
      setActiveTab('audio');
    } else {
      setActiveTab('all');
    }
  }, [location]);

  const { 
    data: mediaFiles, 
    isLoading, 
    error, 
    refetch 
  } = useQuery(
    ['media', activeTab],
    () => apiService.getMediaFiles({ 
      type: activeTab === 'all' ? undefined : activeTab,
      category: selectedCategory === 'all' ? undefined : selectedCategory,
      search: searchQuery || undefined
    }),
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  );

  // Filter media based on search and category
  useEffect(() => {
    if (!mediaFiles?.data) {
      setFilteredMedia([]);
      return;
    }

    let filtered = mediaFiles.data;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(media =>
        media.originalName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        media.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(media => media.category === selectedCategory);
    }

    setFilteredMedia(filtered);
  }, [mediaFiles, searchQuery, selectedCategory]);

  const tabs = [
    { id: 'all', name: 'All Media', icon: FiVideo },
    { id: 'video', name: 'Videos', icon: FiVideo },
    { id: 'audio', name: 'Audio', icon: FiMusic },
  ];

  const categories = [
    'all',
    'sermons',
    'worship',
    'events',
    'testimonies',
    'bible-study',
    'youth',
    'children'
  ];

  const handleDownload = async (media) => {
    try {
      const response = await fetch(media.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = media.originalName || `download-${media._id}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleShare = async (media) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: media.originalName,
          url: media.url,
        });
      } catch (error) {
        console.log('Share canceled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(media.url);
      // You could show a toast notification here
    }
  };

  const openLightbox = (media) => {
    setLightboxMedia(media);
  };

  const closeLightbox = () => {
    setLightboxMedia(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading media..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Failed to Load Media"
          message="We couldn't load the media files. Please try again."
          onRetry={refetch}
        />
      </div>
    );
  }

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
            <FiVideo className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Multimedia Gallery
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Experience our worship, sermons, and church events through our collection 
              of videos and audio recordings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-church-red text-white shadow-md'
                      : 'text-gray-600 hover:text-church-red hover:bg-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search media..."
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
                       category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredMedia.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMedia.map((media, index) => (
                <motion.div
                  key={media._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    {media.fileType === 'video' ? (
                      <div className="relative">
                        <img
                          src={media.thumbnailUrl || '/images/video-placeholder.jpg'}
                          alt={media.originalName}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                        <div 
                          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer group-hover:bg-opacity-30 transition-all duration-300"
                          onClick={() => openLightbox(media)}
                        >
                          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                            <FiPlay className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-church-red to-church-burgundy flex items-center justify-center">
                        <FiMusic className="w-16 h-16 text-white opacity-80" />
                      </div>
                    )}
                    
                    {media.category && (
                      <div className="absolute top-3 right-3 bg-church-gold text-white px-2 py-1 rounded-full text-xs font-medium">
                        {media.category}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-church-red transition-colors duration-200">
                      {media.originalName || 'Untitled'}
                    </h3>
                    
                    {media.tags && media.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {media.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {media.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            +{media.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        {media.fileType === 'video' && (
                          <button
                            onClick={() => openLightbox(media)}
                            className="text-church-red hover:text-church-burgundy transition-colors duration-200"
                            title="Play"
                          >
                            <FiPlay className="w-4 h-4" />
                          </button>
                        )}
                        
                        <button
                          onClick={() => handleDownload(media)}
                          className="text-gray-600 hover:text-church-red transition-colors duration-200"
                          title="Download"
                        >
                          <FiDownload className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={() => handleShare(media)}
                          className="text-gray-600 hover:text-church-red transition-colors duration-200"
                          title="Share"
                        >
                          <FiShare2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <span className="text-xs text-gray-500">
                        {(media.fileSize / (1024 * 1024)).toFixed(1)} MB
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FiVideo className="w-16 h-16 mx-auto mb-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {searchQuery || selectedCategory !== 'all' ? 'No Results Found' : 'No Media Available'}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {searchQuery || selectedCategory !== 'all'
                  ? 'Try adjusting your search terms or filters.'
                  : 'Media content will be available soon. Check back later for sermons, worship songs, and event recordings.'
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-opacity-30 transition-all duration-300 z-10"
              >
                <FiX className="w-6 h-6" />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden">
                {lightboxMedia.fileType === 'video' ? (
                  <ReactPlayer
                    url={lightboxMedia.url}
                    width="100%"
                    height="400px"
                    controls
                    playing
                  />
                ) : (
                  <div className="p-8 text-center">
                    <FiMusic className="w-16 h-16 mx-auto mb-4 text-church-red" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {lightboxMedia.originalName}
                    </h3>
                    <audio controls className="w-full">
                      <source src={lightboxMedia.url} />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
                
                <div className="p-4 bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {lightboxMedia.originalName}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleDownload(lightboxMedia)}
                        className="btn-primary flex items-center text-sm"
                      >
                        <FiDownload className="w-4 h-4 mr-2" />
                        Download
                      </button>
                      <button
                        onClick={() => handleShare(lightboxMedia)}
                        className="btn-secondary flex items-center text-sm"
                      >
                        <FiShare2 className="w-4 h-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Multimedia;