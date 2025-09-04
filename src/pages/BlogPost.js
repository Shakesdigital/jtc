import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowLeft, FiShare2, FiTag } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const BlogPost = () => {
  const { id } = useParams();
  
  const { data: blogPost, isLoading, error } = useQuery(
    ['blog-post', id],
    () => apiService.getBlogPost(id),
    {
      enabled: !!id,
    }
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogPost?.data?.title,
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
        <LoadingSpinner size="large" message="Loading blog post..." />
      </div>
    );
  }

  if (error || !blogPost?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Blog Post Not Found"
          message="The blog post you're looking for doesn't exist or has been moved."
        />
      </div>
    );
  }

  const post = blogPost.data;

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
            to="/blog"
            className="flex items-center text-church-red hover:text-church-burgundy transition-colors duration-200"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card overflow-hidden"
          >
            {post.featuredImage && (
              <div className="relative">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                {post.category && (
                  <div className="absolute top-6 right-6 bg-church-gold text-white px-4 py-2 rounded-full font-medium">
                    {post.category}
                  </div>
                )}
              </div>
            )}
            
            <div className="p-8 md:p-12">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center">
                  <FiCalendar className="w-5 h-5 mr-2 text-church-red" />
                  <span>{new Date(post.publishDate || post.createdAt).toLocaleDateString()}</span>
                </div>
                {post.author?.name && (
                  <div className="flex items-center">
                    <FiUser className="w-5 h-5 mr-2 text-church-red" />
                    <span>{post.author.name}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <span className="text-sm">5 min read</span>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>
              )}
              
              {/* Share Button */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                <button
                  onClick={handleShare}
                  className="flex items-center text-church-red hover:text-church-burgundy transition-colors duration-200"
                >
                  <FiShare2 className="w-5 h-5 mr-2" />
                  Share this post
                </button>
              </div>
              
              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="text-gray-700 leading-relaxed"
                />
              </div>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center flex-wrap gap-2">
                    <FiTag className="w-5 h-5 text-church-red mr-2" />
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-church-red bg-opacity-10 text-church-red rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Author Bio */}
              {post.author && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-start space-x-4">
                    {post.author.image ? (
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-church-red rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {post.author.name?.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {post.author.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Author at Jinja Town Church
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.article>
          
          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Continue Reading
              </h2>
              <Link 
                to="/blog"
                className="btn-primary inline-flex items-center"
              >
                View All Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;