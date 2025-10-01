import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiBookOpen } from 'react-icons/fi';

const ArticlesCarousel = ({ articles, title = "Related Articles" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3); // Default for larger screens

  // Update number of visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2); // Tablet
      } else {
        setVisibleItems(3); // Desktop
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIdx = prevIndex + visibleItems;
      // If we're at the end, go back to start
      return nextIdx >= articles.length ? 0 : nextIdx;
    });
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIdx = prevIndex - visibleItems;
      // If we're at the beginning, go to the last set
      return prevIdx < 0 ? Math.max(0, articles.length - visibleItems) : prevIdx;
    });
  };

  // If we have no articles, don't render anything
  if (!articles || articles.length === 0) {
    return null;
  }

  // Calculate which articles to show in current view
  const articlesToShow = [];
  for (let i = 0; i < visibleItems && (currentIndex + i) < articles.length; i++) {
    articlesToShow.push(articles[currentIndex + i]);
  }

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-church-sage hover:text-white transition-colors duration-300"
            aria-label="Previous articles"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-church-sage hover:text-white transition-colors duration-300"
            aria-label="Next articles"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out">
          {articlesToShow.map((article, index) => (
            <div 
              key={article.id} 
              className="flex-shrink-0 w-full md:w-[calc(100%/2)] lg:w-[calc(100%/3)] px-2"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-church-yellow bg-opacity-90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <FiBookOpen className="w-6 h-6 text-church-sage-dark" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-xs text-church-sage font-semibold mb-2 uppercase tracking-wide">
                    {article.category}
                  </div>

                  <h4 className="text-base font-bold text-church-sage-dark mb-2 group-hover:text-church-sage transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>

                  <Link
                    to={`/resources/articles/${article.slug}`}
                    className="flex items-center text-church-sage hover:text-church-sage-dark font-medium transition-colors duration-300 text-sm"
                  >
                    Read More
                    <FiChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(articles.length / visibleItems) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx * visibleItems)}
            className={`w-3 h-3 rounded-full ${
              Math.floor(currentIndex / visibleItems) === idx
                ? 'bg-church-sage'
                : 'bg-gray-300'
            }`}
            aria-label={`Go to article set ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesCarousel;