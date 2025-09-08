import React from 'react';

const BannerSection = ({ alt = "Church Banner" }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <img 
            src="https://aht.nuplink3.net/pool/pub/c0/e5/bf/e12b32d34d99b22bf1b89b54d3c0e5bf/16812?token=b85d80c9f66eac504133c6f99b47a9b9&ts=1757338327&ip=154.227.128.100&x-image-process=style/pvd" 
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