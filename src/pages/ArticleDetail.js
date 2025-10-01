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
import { getArticleBySlug, articlesData } from '../data/articlesData';
import { processArticleContent } from '../utils/contentUtils';
import ArticlesCarousel from '../components/ArticlesCarousel';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [readingTime, setReadingTime] = useState(0);

  // Function to get related articles based on category and tags
  const getRelatedArticles = (currentArticle, limit = 3) => {
    if (!currentArticle) return [];
    
    // Filter out the current article and find related ones by category
    let related = articlesData
      .filter(a => a.id !== currentArticle.id)
      .filter(a => a.category === currentArticle.category);
    
    // If we don't have enough related by category, add by tags
    if (related.length < limit) {
      const tagBased = articlesData
        .filter(a => a.id !== currentArticle.id && !related.some(r => r.id === a.id))
        .filter(a => 
          a.tags.some(tag => currentArticle.tags.includes(tag))
        );
      related = [...related, ...tagBased];
    }
    
    // If still not enough, add recent articles
    if (related.length < limit) {
      const recent = articlesData
        .filter(a => a.id !== currentArticle.id && !related.some(r => r.id === a.id))
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, limit - related.length);
      related = [...related, ...recent];
    }
    
    return related.slice(0, limit);
  };

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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/resources" className="bg-church-sage text-white px-6 py-3 rounded-lg hover:bg-church-sage-dark transition-colors">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back to Resources Link */}
        <Link 
          to="/resources"
          className="inline-flex items-center text-church-sage hover:text-church-sage-dark transition-colors duration-300 mb-8"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <FiUser className="w-4 h-4 mr-1.5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="w-4 h-4 mr-1.5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="w-4 h-4 mr-1.5" />
              <span>{readingTime} min read</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-church-sage bg-opacity-10 text-church-sage px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Image - placed within content as per Four12 style */}
        <div className="mb-10">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto rounded-lg shadow-md max-w-3xl mx-auto"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none text-gray-700"
          style={{
            '--tw-prose-body': 'rgb(55, 65, 81)',
            '--tw-prose-headings': 'rgb(17, 24, 39)',
            '--tw-prose-lead': 'rgb(86, 98, 119)',
            '--tw-prose-links': 'rgb(110, 152, 150)',
            '--tw-prose-bold': 'rgb(17, 24, 39)',
            '--tw-prose-counters': 'rgb(107, 114, 128)',
            '--tw-prose-bullets': 'rgb(156, 163, 175)',
            '--tw-prose-hr': 'rgb(209, 213, 219)',
            '--tw-prose-quotes': 'rgb(17, 24, 39)',
            '--tw-prose-quote-borders': 'rgb(209, 213, 219)',
            '--tw-prose-captions': 'rgb(107, 114, 128)',
            '--tw-prose-code': 'rgb(17, 24, 39)',
            '--tw-prose-pre-code': 'rgb(249, 250, 251)',
            '--tw-prose-pre-bg': 'rgb(17, 24, 39)',
            '--tw-prose-th-borders': 'rgb(209, 213, 219)',
            '--tw-prose-td-borders': 'rgb(229, 231, 235)',
          }}
          dangerouslySetInnerHTML={{ __html: processArticleContent(article.content) }}
        />

        {/* Share and Download Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-gray-700 font-medium">Share this article:</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share on Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share on Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share on LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share via Email"
                >
                  <FiMail className="w-5 h-5" />
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-church-sage text-white hover:bg-church-sage-dark transition-all duration-300 ml-0 sm:ml-2"
                  title="Download PDF"
                >
                  <FiDownload className="w-4 h-4" />
                  <span className="text-sm font-medium">Download PDF</span>
                </button>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-gray-700 text-sm">
                By {article.author}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Courtesy of Four12 Global
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles Carousel */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <ArticlesCarousel 
            articles={getRelatedArticles(article, 9)} 
            title="Related Articles" 
          />
          <div className="mt-8 text-center">
            <Link
              to="/articles"
              className="inline-flex items-center text-church-sage hover:text-church-sage-dark transition-colors duration-300"
            >
              View all articles
              <FiArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;