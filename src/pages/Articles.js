import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiBookOpen,
  FiCalendar,
  FiUser,
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiX,
  FiClock,
  FiEye,
  FiTrendingUp,
  FiHeart,
  FiTag
} from 'react-icons/fi';
import { articlesData, getAllCategories, getAllTags } from '../data/articlesData';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Get all articles with additional metadata
  const allArticles = articlesData.map(article => ({
    ...article,
    views: Math.floor(Math.random() * 1500) + 300,
    isFeatured: article.id <= 2,
    readingTimeMinutes: Math.ceil(article.content.replace(/<[^>]*>/g, '').split(/\s+/).length / 200)
  }));

  // Get unique categories and tags
  const categories = getAllCategories();
  const tags = getAllTags();

  // Filter articles based on search and filters
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || article.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  // Sort articles
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return b.publishDate - a.publishDate;
      case 'date-asc':
        return a.publishDate - b.publishDate;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'views-desc':
        return b.views - a.views;
      default:
        return b.publishDate - a.publishDate;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = sortedArticles.slice(startIndex, startIndex + itemsPerPage);

  // Get popular articles (top viewed)
  const popularArticles = allArticles
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  // Get featured articles
  const featuredArticles = allArticles.filter(article => article.isFeatured);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  const scrollToLatestArticle = () => {
    document.getElementById('articles-display').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTag('all');
    setSortBy('date-desc');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/articles/HowDoWeMeasureDevotion_FeaturedArticle_1200x500.jpg"
            alt="Articles Hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-center">
              Articles Archive: <span className="text-church-yellow">Timeless Biblical Insights</span>
            </h1>

            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed text-center">
              Explore in-depth teachings on faith, culture, and Christian living from Richard van de Ruit
            </p>

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
                Search by topic, keyword, or author to find the perfect article
              </p>
              <div className="relative max-w-2xl mx-auto">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-church-sage w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles by topic, keyword, or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-16 py-4 text-lg border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none transition-all duration-300"
                  aria-label="Search articles"
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
                {(searchQuery || selectedCategory !== 'all' || selectedTag !== 'all' || sortBy !== 'date-desc') && (
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
                {selectedTag !== 'all' && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Tag: {selectedTag}
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
                className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg"
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
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tag-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Tag
                  </label>
                  <select
                    id="tag-filter"
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  >
                    <option value="all">All Tags</option>
                    {tags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="sort-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Sort By
                  </label>
                  <select
                    id="sort-filter"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                  >
                    <option value="date-desc">Newest First</option>
                    <option value="date-asc">Oldest First</option>
                    <option value="title-asc">Title (A-Z)</option>
                    <option value="title-desc">Title (Z-A)</option>
                    <option value="views-desc">Most Popular</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Results
                  </label>
                  <div className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-church-gray">
                    {sortedArticles.length} {sortedArticles.length === 1 ? 'article' : 'articles'}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Articles Display Section */}
          <div id="articles-display" className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-church-sage-dark">
                All Articles
                <span className="text-lg font-normal text-church-gray ml-2">
                  ({sortedArticles.length} {sortedArticles.length === 1 ? 'article' : 'articles'})
                </span>
              </h2>
            </div>

            {paginatedArticles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {paginatedArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-church-yellow bg-opacity-90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <FiBookOpen className="w-8 h-8 text-church-sage-dark" />
                          </div>
                        </div>
                        {article.isFeatured && (
                          <div className="absolute top-4 right-4 bg-church-yellow text-church-sage-dark px-3 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                          <div className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                            <FiClock className="w-3 h-3 mr-1" />
                            {article.readingTimeMinutes} min
                          </div>
                          <div className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                            <FiEye className="w-3 h-3 mr-1" />
                            {article.views}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-church-gray mb-3">
                          <span className="flex items-center">
                            <FiCalendar className="w-4 h-4 mr-2" />
                            {article.date}
                          </span>
                          <span className="flex items-center">
                            <FiUser className="w-4 h-4 mr-2" />
                            {article.author.split(' ')[0]}
                          </span>
                        </div>

                        <div className="text-xs text-church-sage font-semibold mb-2 uppercase tracking-wide">
                          {article.category}
                        </div>

                        <h3 className="text-lg font-bold text-church-sage-dark mb-3 group-hover:text-church-sage transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-church-gray mb-4 text-sm leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>

                        {article.tags && article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {article.tags.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="inline-flex items-center text-xs bg-gray-100 text-church-gray px-2 py-1 rounded">
                                <FiTag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <Link
                          to={`/resources/articles/${article.slug}`}
                          className="flex items-center justify-center bg-church-sage hover:bg-church-sage-dark text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm w-full"
                        >
                          <FiBookOpen className="w-4 h-4 mr-2" />
                          Read More
                        </Link>
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
                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${page === currentPage
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
                  No articles found
                </h3>
                <p className="text-church-gray max-w-2xl mx-auto mb-8">
                  Try broadening your search or adjusting your filters to find more articles.
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

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="space-y-8">
              {/* Popular Articles */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-church-sage-dark mb-6 flex items-center">
                  <FiTrendingUp className="w-5 h-5 mr-2 text-church-yellow" />
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {popularArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/resources/articles/${article.slug}`}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="flex-shrink-0 relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded">
                          <FiBookOpen className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-church-sage-dark line-clamp-2 group-hover:text-church-sage transition-colors duration-200">
                          {article.title}
                        </h4>
                        <p className="text-xs text-church-gray mt-1">{article.author.split(' ')[0]}</p>
                        <div className="flex items-center text-xs text-church-gray mt-2">
                          <FiEye className="w-3 h-3 mr-1" />
                          {article.views} reads
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Articles */}
              {featuredArticles.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-6 flex items-center">
                    <FiHeart className="w-5 h-5 mr-2 text-church-yellow" />
                    Featured
                  </h3>
                  <div className="space-y-4">
                    {featuredArticles.slice(0, 2).map((article) => (
                      <Link
                        key={article.id}
                        to={`/resources/articles/${article.slug}`}
                        className="border border-church-yellow rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group block"
                      >
                        <div className="relative mb-3">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-24 object-cover rounded"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded">
                            <FiBookOpen className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h4 className="font-semibold text-church-sage-dark text-sm line-clamp-2 group-hover:text-church-sage transition-colors duration-200">
                          {article.title}
                        </h4>
                        <p className="text-xs text-church-gray mt-1">{article.author}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories Widget */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-church-sage-dark mb-6">
                  Browse by Category
                </h3>
                <div className="space-y-2">
                  {categories.map(category => {
                    const count = allArticles.filter(a => a.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category
                            ? 'bg-church-sage text-white'
                            : 'hover:bg-gray-50 text-church-gray'
                          }`}
                      >
                        <span className="font-medium">{category}</span>
                        <span className="float-right text-sm">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-church-sage-light to-church-sage rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">
                  Subscribe for Article Updates
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Get notified when new articles are published
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

export default Articles;
