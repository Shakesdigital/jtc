import React from 'react';

const BannerSection = ({ alt = "Partnership Banner" }) => {
  return (
    <section className="w-full">
      <div className="w-full">
        <img 
          src="https://aht.nuplink3.net/pool/pub/c0/e5/bf/e12b32d34d99b22bf1b89b54d3c0e5bf/16812?token=b85d80c9f66eac504133c6f99b47a9b9&ts=1757338327&ip=154.227.128.100&x-image-process=style/pvd" 
          alt={alt}
          className="w-full h-auto object-cover"
          style={{ display: 'block' }}
        />
      </div>
    </section>
  );
};

export default BannerSection;