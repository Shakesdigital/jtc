import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFileText, FiCalendar, FiUser, FiSearch, FiFilter, FiArrowRight } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { data: blogPosts, isLoading, error, refetch } = useQuery(
    ['blog-posts', searchQuery, selectedCategory],
    () => apiService.getBlogPosts({
      search: searchQuery || undefined,
      category: selectedCategory === 'all' ? undefined : selectedCategory
    }),
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  );

  const categories = ['all', 'faith', 'community', 'ministry', 'events', 'testimonies', 'resources'];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading blog posts..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Failed to Load Blog Posts"
          message="We couldn't load the blog posts. Please try again."
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-church-red to-church-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <FiFileText className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 text-church-gold" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-shadow-lg">
              Blog & News
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90">
              Stay connected with our church community through stories, updates, and inspiring content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 sm:py-6 md:py-8 bg-white border-b border-gray-200 sticky top-16 sm:top-20 md:top-24 lg:top-28 z-40">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-church-red outline-none text-xs sm:text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="relative sm:w-48">
              <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-8 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-red focus:border-church-red outline-none text-xs sm:text-sm appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' :
                     category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container-custom">
          {blogPosts?.data?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.data.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="card hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.featuredImage || '/images/blog-default.jpg'}
                      alt={post.title}
                      className="w-full h-44 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {post.category && (
                      <div className="absolute top-3 right-3 bg-church-gold text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {post.category}
                      </div>
                    )}
                    {post.isFeatured && (
                      <div className="absolute top-3 left-3 bg-church-red text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                        <span className="truncate">{new Date(post.publishDate || post.createdAt).toLocaleDateString()}</span>
                      </span>
                      {post.author?.name && (
                        <span className="flex items-center">
                          <FiUser className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                          <span className="truncate">{post.author.name}</span>
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-church-red transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            +{post.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    )}

                    <Link
                      to={`/blog/${post._id}`}
                      className="flex items-center text-sm sm:text-base text-church-red hover:text-church-burgundy font-medium transition-colors duration-200 mt-auto"
                    >
                      <span>Read More</span>
                      <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 md:py-20 px-4">
              <FiFileText className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 text-gray-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {searchQuery || selectedCategory !== 'all'
                  ? 'No Posts Found'
                  : 'Blog Posts Coming Soon'
                }
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
                {searchQuery || selectedCategory !== 'all'
                  ? 'Try adjusting your search terms or filters.'
                  : 'We\'re working on creating inspiring content. Check back soon for updates and stories from our church family.'
                }
              </p>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="btn-secondary text-sm sm:text-base"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-church-red text-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Stay Updated</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
              Subscribe to our newsletter to get the latest blog posts and church updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-church-gold"
              />
              <button
                type="submit"
                className="btn-accent px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;