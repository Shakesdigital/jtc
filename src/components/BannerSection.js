import React from 'react';

const BannerSection = ({ alt = "Partnership Banner" }) => {
  return (
    <section className="w-full">
      <div className="w-full">
        <a 
          href="https://four12global.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full"
        >
          <img 
            src="https://aht.nuplink2.net/pool/pub/3d/08/8b/5cbc46dca61f468f305ff993063d088b/54897?token=c57b16ebbfcd788bd85e893391e90927&ts=1757409364&ip=154.227.128.100&x-image-process=style/pvd" 
            alt={alt}
            className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300"
            style={{ display: 'block' }}
          />
        </a>
      </div>
    </section>
  );
};

export default BannerSection;