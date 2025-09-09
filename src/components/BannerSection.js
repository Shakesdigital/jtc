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
            src="https://aht.nuplink3.net/pool/pub/ef/c2/d1/e11ff436ec9deb3d360dd24f64efc2d1/55905?token=5cda1d2760272d4d4fdb64f6d80c1109&ts=1757412504&ip=154.227.128.100&x-image-process=style/pvd" 
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