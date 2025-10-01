import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiCalendar,
  FiUser,
  FiDownload,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiClock
} from 'react-icons/fi';
import { getArticleBySlug } from '../data/articlesData';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const foundArticle = getArticleBySlug(slug);
    if (foundArticle) {
      setArticle(foundArticle);

      // Calculate reading time (average 200 words per minute)
      const wordCount = foundArticle.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
      const minutes = Math.ceil(wordCount / 200);
      setReadingTime(minutes);
    }
  }, [slug]);

  // Share handlers
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article?.title || '';

    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      default:
        break;
    }
  };

  const handleDownloadPDF = () => {
    if (article?.pdfUrl) {
      const link = document.createElement('a');
      link.href = article.pdfUrl;
      link.download = `${article.slug}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-church-sage-dark mb-4">Article Not Found</h1>
          <p className="text-church-gray mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/resources" className="bg-church-sage text-white px-6 py-3 rounded-lg">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/resources"
            className="inline-flex items-center text-church-yellow hover:text-white transition-colors duration-300 mb-8"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-90 mb-4">
              <div className="flex items-center">
                <FiUser className="w-4 h-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <FiCalendar className="w-4 h-4 mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <FiClock className="w-4 h-4 mr-1" />
                {readingTime} min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl opacity-95 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-church-yellow bg-opacity-20 text-church-yellow px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg max-w-none"
            style={{
              '--tw-prose-headings': 'rgb(var(--church-sage-dark))',
              '--tw-prose-body': 'rgb(var(--church-gray))',
              '--tw-prose-links': 'rgb(var(--church-sage))',
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share and Download Section */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-church-gray mb-4">Share this article:</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-church-sage hover:bg-church-sage hover:text-white transition-all duration-300"
                    title="Share on Twitter"
                  >
                    <FiTwitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-church-sage hover:bg-church-sage hover:text-white transition-all duration-300"
                    title="Share on Facebook"
                  >
                    <FiFacebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-church-sage hover:bg-church-sage hover:text-white transition-all duration-300"
                    title="Share on LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-church-sage hover:bg-church-sage hover:text-white transition-all duration-300"
                    title="Share via Email"
                  >
                    <FiMail className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-church-sage text-white hover:bg-church-sage-dark transition-all duration-300 ml-2"
                    title="Download PDF"
                  >
                    <FiDownload className="w-4 h-4" />
                    <span className="text-sm font-medium">Download PDF</span>
                  </button>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-church-gray text-sm">
                  By {article.author}
                </p>
                <p className="text-church-gray text-xs">
                  Courtesy of Four12 Global
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-church-sage-dark mb-8">More Articles</h3>
            <Link
              to="/resources"
              className="inline-flex items-center text-church-sage hover:text-church-sage-dark transition-colors duration-300 mb-6"
            >
              View all articles
              <FiArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;