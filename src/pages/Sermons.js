import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPlay, 
  FiCalendar, 
  FiUser, 
  FiSearch, 
  FiVideo, 
  FiVolume2,
  FiDownload,
  FiShare2,
  FiFilter,
  FiChevronDown,
  FiX,
  FiBookOpen,
  FiClock,
  FiEye,
  FiHeart,
  FiTrendingUp
} from 'react-icons/fi';

const Sermons = () => {
  // Static sermon data with comprehensive information
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('all');
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [selectedBibleBook, setSelectedBibleBook] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Bible books list for search functionality
  const bibleBooks = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
    '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah',
    'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Songs', 'Isaiah', 'Jeremiah',
    'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah',
    'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark',
    'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
    'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy',
    'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
    'Jude', 'Revelation'
  ];

  // Sample sermon data
  const allSermons = [
    {
      id: 1,
      title: "Walking in Faith Through Uncertainty",
      speaker: "Pastor John Mukasa",
      date: "2024-11-24",
      series: "Faith Journey",
      description: "In times of uncertainty, our faith becomes our anchor. This message explores how we can trust God's plan even when we cannot see the path ahead, drawing lessons from Abraham's journey.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      bibleReference: "Hebrews 11:8-10",
      duration: "42 mins",
      views: 1234,
      isFeatured: true,
      tags: ["faith", "trust", "guidance"]
    },
    {
      id: 2,
      title: "The Power of Forgiveness",
      speaker: "Pastor Sarah Nakato",
      date: "2024-11-17",
      series: "Hope & Healing",
      description: "Forgiveness is not just about letting others off the hook—it's about freeing ourselves from the chains of bitterness. Discover the transformative power of God's forgiveness in our lives.",
      thumbnail: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&h=300&fit=crop",
      bibleReference: "Ephesians 4:31-32",
      duration: "38 mins",
      views: 987,
      isFeatured: false,
      tags: ["forgiveness", "healing", "restoration"]
    },
    {
      id: 3,
      title: "Finding Joy in the Journey",
      speaker: "Pastor David Ssemakula",
      date: "2024-11-10",
      series: "Living with Purpose",
      description: "Joy is not dependent on our circumstances but on our relationship with Christ. Learn how to cultivate lasting joy regardless of life's challenges and setbacks.",
      thumbnail: "https://images.unsplash.com/photo-1520637836862-4d197d17c46a?w=500&h=300&fit=crop",
      bibleReference: "Philippians 4:4-7",
      duration: "45 mins",
      views: 756,
      isFeatured: false,
      tags: ["joy", "purpose", "contentment"]
    },
    {
      id: 4,
      title: "The Heart of Worship",
      speaker: "Pastor Mary Akello",
      date: "2024-11-03",
      series: "Worship & Praise",
      description: "True worship goes beyond singing songs—it's about the posture of our hearts before God. Explore what it means to be a worshipper in spirit and truth.",
      thumbnail: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=500&h=300&fit=crop",
      bibleReference: "John 4:23-24",
      duration: "40 mins",
      views: 1456,
      isFeatured: true,
      tags: ["worship", "praise", "heart"]
    },
    {
      id: 5,
      title: "Building Strong Families",
      speaker: "Pastor John Mukasa",
      date: "2024-10-27",
      series: "Family Values",
      description: "God designed the family as the foundation of society. Discover practical principles for building strong, Christ-centered families that honor God and bless the community.",
      thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=300&fit=crop",
      bibleReference: "Deuteronomy 6:6-9",
      duration: "50 mins",
      views: 823,
      isFeatured: false,
      tags: ["family", "parenting", "values"]
    },
    {
      id: 6,
      title: "Love Without Limits",
      speaker: "Pastor Sarah Nakato",
      date: "2024-10-20",
      series: "Love & Relationships",
      description: "God's love for us is unconditional and limitless. This message explores how we can reflect that same love in our relationships with others, creating communities of grace.",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
      bibleReference: "1 John 4:7-12",
      duration: "43 mins",
      views: 1089,
      isFeatured: false,
      tags: ["love", "relationships", "grace"]
    },
    {
      id: 7,
      title: "Standing Firm in Prayer",
      speaker: "Pastor David Ssemakula",
      date: "2024-10-13",
      series: "Prayer Life",
      description: "Prayer is our direct line of communication with God. Learn how to develop a consistent prayer life that brings breakthrough, peace, and deeper intimacy with the Father.",
      thumbnail: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=500&h=300&fit=crop",
      bibleReference: "1 Thessalonians 5:17",
      duration: "47 mins",
      views: 934,
      isFeatured: false,
      tags: ["prayer", "communication", "breakthrough"]
    },
    {
      id: 8,
      title: "Hope for Tomorrow",
      speaker: "Pastor Mary Akello",
      date: "2024-10-06",
      series: "Hope & Healing",
      description: "No matter how dark today may seem, God has a bright future planned for you. This encouraging message reminds us that our hope is anchored in Christ's promises.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      bibleReference: "Jeremiah 29:11",
      duration: "41 mins",
      views: 1367,
      isFeatured: true,
      tags: ["hope", "future", "promises"]
    },
    {
      id: 9,
      title: "Serving with Excellence",
      speaker: "Pastor John Mukasa",
      date: "2024-09-29",
      series: "Ministry & Service",
      description: "God has called each of us to serve in His kingdom. Discover your unique gifts and learn how to use them with excellence for God's glory and the building of His church.",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop",
      bibleReference: "1 Peter 4:10-11",
      duration: "44 mins",
      views: 678,
      isFeatured: false,
      tags: ["service", "gifts", "excellence"]
    }
  ];

  // Get unique speakers and series for filter options
  const speakers = [...new Set(allSermons.map(sermon => sermon.speaker))];
  const series = [...new Set(allSermons.map(sermon => sermon.series))];

  // Filter sermons based on search and filters
  const filteredSermons = allSermons.filter(sermon => {
    const matchesSearch = !searchQuery || 
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSpeaker = selectedSpeaker === 'all' || sermon.speaker === selectedSpeaker;
    const matchesSeries = selectedSeries === 'all' || sermon.series === selectedSeries;
    const matchesBibleBook = !selectedBibleBook || 
      sermon.bibleReference.toLowerCase().includes(selectedBibleBook.toLowerCase());
    
    return matchesSearch && matchesSpeaker && matchesSeries && matchesBibleBook;
  });

  // Pagination
  const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSermons = filteredSermons.slice(startIndex, startIndex + itemsPerPage);

  // Get popular sermons (top viewed)
  const popularSermons = allSermons
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  // Get featured sermons
  const featuredSermons = allSermons.filter(sermon => sermon.isFeatured);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSpeaker, selectedSeries, selectedBibleBook]);

  const scrollToLatestSermon = () => {
    document.getElementById('sermons-display').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedSpeaker('all');
    setSelectedSeries('all');
    setSelectedBibleBook('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <FiVideo className="w-20 h-20 mx-auto mb-3 sm:mb-4 text-church-yellow" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Sermons: <span className="text-church-yellow">Timeless Truths for Today</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Explore teachings that transform lives and discover God's word for every season
            </p>

            <div className="pt-6 sm:pt-8">
              <button 
                onClick={scrollToLatestSermon}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto border-2 sm:border-3"
              >
                Watch Latest Sermon
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {/* Main Search Bar */}
            <div className="text-center">
              <p className="text-sm text-church-gray mb-4">
                Search by theme, Bible book, or chapter to find the perfect message
              </p>
              <div className="relative max-w-2xl mx-auto">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-church-sage w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search sermons by theme, keyword, or Bible reference..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-16 py-4 text-lg border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none transition-all duration-300"
                  aria-label="Search sermons"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-church-sage transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center text-church-sage hover:text-church-sage-dark font-medium transition-colors duration-200 lg:order-2"
              >
                <FiFilter className="w-4 h-4 mr-2" />
                Advanced Filters
                <FiChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
              </button>

              {/* Quick Filter Pills */}
              <div className="flex flex-wrap gap-2 lg:order-1">
                {(searchQuery || selectedSpeaker !== 'all' || selectedSeries !== 'all' || selectedBibleBook) && (
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
                {selectedSpeaker !== 'all' && (
                  <span className="bg-church-yellow text-church-sage-dark px-3 py-1 rounded-full text-sm">
                    Speaker: {selectedSpeaker}
                  </span>
                )}
                {selectedSeries !== 'all' && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Series: {selectedSeries}
                  </span>
                )}
              </div>
            </div>

            {/* Advanced Filter Options */}
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <label htmlFor="speaker-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Speaker
                  </label>
                  <select
                    id="speaker-filter"
                    value={selectedSpeaker}
                    onChange={(e) => setSelectedSpeaker(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  >
                    <option value="all">All Speakers</option>
                    {speakers.map(speaker => (
                      <option key={speaker} value={speaker}>{speaker}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="series-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Series
                  </label>
                  <select
                    id="series-filter"
                    value={selectedSeries}
                    onChange={(e) => setSelectedSeries(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  >
                    <option value="all">All Series</option>
                    {series.map(seriesName => (
                      <option key={seriesName} value={seriesName}>{seriesName}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="bible-book-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Bible Book
                  </label>
                  <select
                    id="bible-book-filter"
                    value={selectedBibleBook}
                    onChange={(e) => setSelectedBibleBook(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  >
                    <option value="">All Books</option>
                    {bibleBooks.map(book => (
                      <option key={book} value={book}>{book}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sermons Display Section */}
          <div id="sermons-display" className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-church-sage-dark">
                All Sermons
                <span className="text-lg font-normal text-church-gray ml-2">
                  ({filteredSermons.length} {filteredSermons.length === 1 ? 'sermon' : 'sermons'})
                </span>
              </h2>
            </div>

            {paginatedSermons.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {paginatedSermons.map((sermon, index) => (
                    <motion.div
                      key={sermon.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={sermon.thumbnail}
                          alt={sermon.title}
                          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-church-yellow bg-opacity-90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <FiPlay className="w-8 h-8 text-church-sage-dark ml-1" />
                          </div>
                        </div>
                        {sermon.isFeatured && (
                          <div className="absolute top-4 right-4 bg-church-yellow text-church-sage-dark px-3 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                          <div className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                            <FiClock className="w-3 h-3 mr-1" />
                            {sermon.duration}
                          </div>
                          <div className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                            <FiEye className="w-3 h-3 mr-1" />
                            {sermon.views}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-church-gray mb-3">
                          <span className="flex items-center">
                            <FiCalendar className="w-4 h-4 mr-2" />
                            {new Date(sermon.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span className="flex items-center">
                            <FiUser className="w-4 h-4 mr-2" />
                            {sermon.speaker.split(' ')[1]}
                          </span>
                        </div>
                        
                        <div className="text-xs text-church-sage font-semibold mb-2 uppercase tracking-wide">
                          {sermon.series}
                        </div>
                        
                        <h3 className="text-lg font-bold text-church-sage-dark mb-3 group-hover:text-church-sage transition-colors duration-300 line-clamp-2">
                          {sermon.title}
                        </h3>
                        
                        <p className="text-church-gray mb-4 text-sm leading-relaxed line-clamp-3">
                          {sermon.description}
                        </p>
                        
                        {sermon.bibleReference && (
                          <div className="flex items-center text-church-sage font-semibold mb-4 text-sm">
                            <FiBookOpen className="w-4 h-4 mr-2" />
                            {sermon.bibleReference}
                          </div>
                        )}
                        
                        <div className="flex space-x-2">
                          <button className="flex-1 flex items-center justify-center bg-church-sage hover:bg-church-sage-dark text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                            <FiPlay className="w-4 h-4 mr-2" />
                            Watch
                          </button>
                          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-church-sage-dark p-3 rounded-lg transition-all duration-300" title="Listen">
                            <FiVolume2 className="w-4 h-4" />
                          </button>
                          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-church-sage-dark p-3 rounded-lg transition-all duration-300" title="Download">
                            <FiDownload className="w-4 h-4" />
                          </button>
                          <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-church-sage-dark p-3 rounded-lg transition-all duration-300" title="Share">
                            <FiShare2 className="w-4 h-4" />
                          </button>
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
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                    >
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
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <FiSearch className="w-16 h-16 mx-auto mb-6 text-gray-400" />
                <h3 className="text-2xl font-bold text-church-sage-dark mb-4">
                  No sermons found
                </h3>
                <p className="text-church-gray max-w-2xl mx-auto mb-8">
                  Try broadening your search or adjusting your filters to find more sermons.
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

          {/* Additional Engagement Section - Sidebar */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="space-y-8">
              {/* Popular Sermons */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-church-sage-dark mb-6 flex items-center">
                  <FiTrendingUp className="w-5 h-5 mr-2 text-church-yellow" />
                  Popular Sermons
                </h3>
                <div className="space-y-4">
                  {popularSermons.map((sermon, index) => (
                    <div key={sermon.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                      <div className="flex-shrink-0 relative">
                        <img
                          src={sermon.thumbnail}
                          alt={sermon.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded">
                          <FiPlay className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-church-sage-dark line-clamp-2 group-hover:text-church-sage transition-colors duration-200">
                          {sermon.title}
                        </h4>
                        <p className="text-xs text-church-gray mt-1">{sermon.speaker.split(' ')[1]}</p>
                        <div className="flex items-center text-xs text-church-gray mt-2">
                          <FiEye className="w-3 h-3 mr-1" />
                          {sermon.views} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Sermons */}
              {featuredSermons.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-6 flex items-center">
                    <FiHeart className="w-5 h-5 mr-2 text-church-yellow" />
                    Featured
                  </h3>
                  <div className="space-y-4">
                    {featuredSermons.slice(0, 2).map((sermon) => (
                      <div key={sermon.id} className="border border-church-yellow rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                        <div className="relative mb-3">
                          <img
                            src={sermon.thumbnail}
                            alt={sermon.title}
                            className="w-full h-24 object-cover rounded"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded">
                            <FiPlay className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h4 className="font-semibold text-church-sage-dark text-sm line-clamp-2 group-hover:text-church-sage transition-colors duration-200">
                          {sermon.title}
                        </h4>
                        <p className="text-xs text-church-gray mt-1">{sermon.speaker}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-church-sage-light to-church-sage rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">
                  Subscribe for Sermon Updates
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Get notified when new sermons are uploaded
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-church-sage-dark focus:ring-2 focus:ring-church-yellow focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold py-2 rounded-lg transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sermons;