import React from 'react';

const BannerSection = ({ alt = "Church Banner" }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <img 
            src="https://lbx.cx/f/QWjC9kj" 
            alt={alt}
            className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;