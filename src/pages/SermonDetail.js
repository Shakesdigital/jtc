import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiCalendar,
  FiUser,
  FiBookOpen,
  FiDownload,
  FiShare2,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiVideo,
  FiHeadphones,
  FiTag,
  FiClock
} from 'react-icons/fi';
import { getSermonBySlug, sermonsData } from '../data/sermonsData';

const SermonDetail = () => {
  const { slug } = useParams();
  const sermon = getSermonBySlug(slug);

  // Audio player state
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioVolume, setAudioVolume] = useState(1);
  const [audioMuted, setAudioMuted] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  // Video player state
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Get related sermons (exclude current sermon)
  const relatedSermons = sermonsData.filter(s => s.id !== sermon?.id).slice(0, 3);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  if (!sermon) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-church-sage-dark mb-4">Sermon Not Found</h1>
            <p className="text-church-gray mb-8">The sermon you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/sermons/archive"
              className="inline-flex items-center bg-church-sage hover:bg-church-sage-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <FiArrowLeft className="mr-2" />
              Back to Sermons
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  // Audio player functions
  const toggleAudioPlay = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const handleAudioTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress);
      setAudioCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleAudioProgressChange = (e) => {
    const value = parseFloat(e.target.value);
    setAudioProgress(value);
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    }
  };

  const handleAudioVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setAudioVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  const toggleAudioMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioMuted;
      setAudioMuted(!audioMuted);
    }
  };

  // Format time helper
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Share function
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: sermon.title,
        text: sermon.summary,
        url: window.location.href
      }).catch(() => {
        // Fallback if share fails
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            to="/sermons/archive"
            className="inline-flex items-center text-church-sage hover:text-church-sage-dark font-semibold transition-colors duration-200"
          >
            <FiArrowLeft className="mr-2" />
            Back to Sermons
          </Link>
        </div>
      </div>

      {/* Sermon Header */}
      <div className="relative bg-gradient-to-br from-church-sage to-church-sage-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-church-yellow text-church-sage-dark px-4 py-1 rounded-full text-sm font-bold mb-4">
              {sermon.category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{sermon.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center">
                <FiUser className="mr-2" />
                {sermon.speaker}
              </div>
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                {sermon.dateFormatted}
              </div>
              {sermon.scripture && (
                <div className="flex items-center">
                  <FiBookOpen className="mr-2" />
                  {sermon.scripture}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Media & Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Audio Player */}
            {sermon.hasAudio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-church-sage-dark flex items-center">
                    <FiHeadphones className="mr-3 text-church-sage" />
                    Listen to Sermon
                  </h2>
                </div>

                <audio
                  ref={audioRef}
                  src={sermon.audioUrl}
                  onTimeUpdate={handleAudioTimeUpdate}
                  onLoadedMetadata={handleAudioLoadedMetadata}
                  onEnded={() => setIsAudioPlaying(false)}
                />

                <div className="space-y-4">
                  {/* Play/Pause Button */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={toggleAudioPlay}
                      className="bg-church-sage hover:bg-church-sage-dark text-white rounded-full p-6 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {isAudioPlaying ? (
                        <FiPause className="w-8 h-8" />
                      ) : (
                        <FiPlay className="w-8 h-8 ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={audioProgress}
                      onChange={handleAudioProgressChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-church-sage"
                      style={{
                        background: `linear-gradient(to right, #4A5D4E 0%, #4A5D4E ${audioProgress}%, #e5e7eb ${audioProgress}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-church-gray">
                      <span>{formatTime(audioCurrentTime)}</span>
                      <span>{formatTime(audioDuration)}</span>
                    </div>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={toggleAudioMute}
                      className="text-church-sage hover:text-church-sage-dark transition-colors"
                    >
                      {audioMuted ? <FiVolumeX className="w-5 h-5" /> : <FiVolume2 className="w-5 h-5" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={audioMuted ? 0 : audioVolume}
                      onChange={handleAudioVolumeChange}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-church-sage"
                    />
                  </div>

                  {/* Download Audio */}
                  <a
                    href={sermon.audioUrl}
                    download={`${sermon.slug}.m4a`}
                    className="flex items-center justify-center bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full"
                  >
                    <FiDownload className="mr-2" />
                    Download Audio
                  </a>
                </div>
              </motion.div>
            )}

            {/* Video Player */}
            {sermon.hasVideo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-church-sage-dark flex items-center">
                    <FiVideo className="mr-3 text-church-sage" />
                    Watch Sermon
                  </h2>
                </div>

                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    src={sermon.videoUrl}
                    onEnded={() => setIsVideoPlaying(false)}
                    className="w-full"
                    controls
                  />
                </div>

                {sermon.videoUrl && (
                  <a
                    href={sermon.videoUrl}
                    download={`${sermon.slug}.mp4`}
                    className="mt-4 flex items-center justify-center bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full"
                  >
                    <FiDownload className="mr-2" />
                    Download Video
                  </a>
                )}
              </motion.div>
            )}

            {/* Sermon Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-church-sage-dark mb-6">About This Sermon</h2>
              <div className="prose prose-lg max-w-none text-church-gray">
                <p className="text-lg leading-relaxed mb-4">{sermon.summary}</p>
                <p className="leading-relaxed">{sermon.description}</p>
              </div>
            </motion.div>

            {/* Download Sermon Notes */}
            {sermon.hasNotes && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
              >
                <h2 className="text-2xl font-bold text-church-sage-dark mb-6 flex items-center">
                  <FiBookOpen className="mr-3 text-church-sage" />
                  Sermon Notes
                </h2>
                <p className="text-church-gray mb-6">
                  Download the sermon notes to follow along, take additional notes, or for further personal study and reflection.
                </p>
                <a
                  href={sermon.notesUrl}
                  download={`${sermon.slug}-notes.docx`}
                  className="inline-flex items-center bg-church-sage hover:bg-church-sage-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <FiDownload className="mr-2" />
                  Download Notes (DOCX)
                </a>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Sermon Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={sermon.image}
                alt={sermon.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>

            {/* Share Sermon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-church-sage-dark mb-4">Share This Sermon</h3>
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <FiShare2 className="mr-2" />
                Share
              </button>
            </motion.div>

            {/* Sermon Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-church-sage-dark mb-4">Sermon Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <FiUser className="w-5 h-5 mr-3 text-church-sage flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-church-sage-dark">Speaker</div>
                    <div className="text-church-gray">{sermon.speaker}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiCalendar className="w-5 h-5 mr-3 text-church-sage flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-church-sage-dark">Date</div>
                    <div className="text-church-gray">{sermon.dateFormatted}</div>
                  </div>
                </div>
                {sermon.scripture && (
                  <div className="flex items-start">
                    <FiBookOpen className="w-5 h-5 mr-3 text-church-sage flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-church-sage-dark">Scripture</div>
                      <div className="text-church-gray">{sermon.scripture}</div>
                    </div>
                  </div>
                )}
                <div className="flex items-start">
                  <FiTag className="w-5 h-5 mr-3 text-church-sage flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-church-sage-dark">Category</div>
                    <div className="text-church-gray">{sermon.category}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Sermons */}
            {relatedSermons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-church-sage-dark mb-4">More Sermons</h3>
                <div className="space-y-4">
                  {relatedSermons.map((relatedSermon) => (
                    <Link
                      key={relatedSermon.id}
                      to={`/sermon/${relatedSermon.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={relatedSermon.image}
                          alt={relatedSermon.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-church-sage-dark group-hover:text-church-sage transition-colors line-clamp-2 text-sm mb-1">
                            {relatedSermon.title}
                          </h4>
                          <p className="text-xs text-church-gray">{relatedSermon.speaker}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/sermons/archive"
                  className="mt-4 block text-center text-church-sage hover:text-church-sage-dark font-semibold text-sm transition-colors"
                >
                  View All Sermons →
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonDetail;
