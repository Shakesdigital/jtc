import React, { useState } from 'react';

const BannerSection = ({ imageUrl, alt = "Church Banner" }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError || !imageUrl) {
    // Fallback banner with church branding
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-church-sage to-church-gold p-8 rounded-lg shadow-lg mx-auto max-w-2xl">
              <img 
                src="/JTC-Logo.jpg" 
                alt="Jinja Town Church Logo" 
                className="w-20 h-20 mx-auto mb-4 rounded-full shadow-lg"
              />
              <h3 className="text-white text-2xl font-bold mb-2">Jinja Town Church</h3>
              <p className="text-white/90 text-lg">
                Faith • Hope • Love
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Try to display the provided image
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <img 
            src={imageUrl} 
            alt={alt}
            className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
            style={{ maxHeight: '300px' }}
            onError={handleImageError}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;