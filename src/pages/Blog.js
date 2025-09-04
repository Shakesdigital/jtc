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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-church-red to-church-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiFileText className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Blog & News
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Stay connected with our church community through stories, updates, and inspiring content.
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
                  placeholder="Search posts..."
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
                       category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          {blogPosts?.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.data.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.featuredImage || '/images/blog-default.jpg'}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {post.category && (
                      <div className="absolute top-4 right-4 bg-church-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    )}
                    {post.isFeatured && (
                      <div className="absolute top-4 left-4 bg-church-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-2" />
                        {new Date(post.publishDate || post.createdAt).toLocaleDateString()}
                      </span>
                      {post.author?.name && (
                        <span className="flex items-center">
                          <FiUser className="w-4 h-4 mr-2" />
                          {post.author.name}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-church-red transition-colors duration-200">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
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
                      className="flex items-center text-church-red hover:text-church-burgundy font-medium transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FiFileText className="w-16 h-16 mx-auto mb-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {searchQuery || selectedCategory !== 'all'
                  ? 'No Posts Found'
                  : 'Blog Posts Coming Soon'
                }
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
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
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-church-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter to get the latest blog posts and church updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-church-gold"
              />
              <button
                type="submit"
                className="btn-accent px-8 py-3 whitespace-nowrap"
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