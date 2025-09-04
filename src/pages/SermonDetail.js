import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { FiCalendar, FiUser, FiDownload, FiShare2, FiArrowLeft, FiBook } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const SermonDetail = () => {
  const { id } = useParams();
  
  const { data: sermon, isLoading, error } = useQuery(
    ['sermon', id],
    () => apiService.getSermon(id),
    {
      enabled: !!id,
    }
  );

  const handleDownload = () => {
    if (sermon?.data?.audioUrl) {
      const link = document.createElement('a');
      link.href = sermon.data.audioUrl;
      link.download = `${sermon.data.title}.mp3`;
      link.click();
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: sermon?.data?.title,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share canceled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading sermon..." />
      </div>
    );
  }

  if (error || !sermon?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Sermon Not Found"
          message="The sermon you're looking for doesn't exist or has been moved."
        />
      </div>
    );
  }

  const sermonData = sermon.data;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link 
            to="/church-service/sermons"
            className="flex items-center text-church-red hover:text-church-burgundy transition-colors duration-200"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Back to Sermons
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card overflow-hidden mb-8"
            >
              {sermonData.videoUrl ? (
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={sermonData.videoUrl}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
                  <p className="text-white">Video not available</p>
                </div>
              )}
            </motion.div>

            {/* Sermon Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8"
            >
              {sermonData.series && (
                <p className="text-sm text-church-red font-medium mb-2 uppercase tracking-wide">
                  {sermonData.series}
                </p>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {sermonData.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center">
                  <FiCalendar className="w-5 h-5 mr-2 text-church-red" />
                  <span>{new Date(sermonData.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <FiUser className="w-5 h-5 mr-2 text-church-red" />
                  <span>{sermonData.speaker}</span>
                </div>
                {sermonData.bibleReference && (
                  <div className="flex items-center">
                    <FiBook className="w-5 h-5 mr-2 text-church-red" />
                    <span>{sermonData.bibleReference}</span>
                  </div>
                )}
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p>{sermonData.description}</p>
                {sermonData.transcript && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Transcript</h3>
                    <div className="whitespace-pre-line">{sermonData.transcript}</div>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {sermonData.audioUrl && (
                  <button
                    onClick={handleDownload}
                    className="btn-primary flex items-center"
                  >
                    <FiDownload className="w-4 h-4 mr-2" />
                    Download Audio
                  </button>
                )}
                <button
                  onClick={handleShare}
                  className="btn-secondary flex items-center"
                >
                  <FiShare2 className="w-4 h-4 mr-2" />
                  Share Sermon
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Audio Player */}
            {sermonData.audioUrl && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Listen to Audio</h3>
                <audio controls className="w-full">
                  <source src={sermonData.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </motion.div>
            )}

            {/* Tags */}
            {sermonData.tags && sermonData.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {sermonData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-church-red bg-opacity-10 text-church-red rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Related Sermons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">More Sermons</h3>
              <Link 
                to="/church-service/sermons"
                className="btn-primary w-full"
              >
                View All Sermons
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonDetail;