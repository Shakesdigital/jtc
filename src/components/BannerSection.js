import React from 'react';

const BannerSection = ({ alt = "Partnership Banner" }) => {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <a 
          href="https://four12global.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full"
        >
          <img 
            src="https://aht.nuplink3.net/pool/pub/ef/c2/d1/e11ff436ec9deb3d360dd24f64efc2d1/55905?token=5cda1d2760272d4d4fdb64f6d80c1109&ts=1757412504&ip=154.227.128.100&x-image-process=style/pvd" 
            alt={alt}
            className="w-full h-auto object-contain cursor-pointer hover:opacity-95 transition-opacity duration-300 max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
            style={{ 
              display: 'block',
              imageRendering: 'crisp-edges',
              WebkitImageRendering: 'crisp-edges',
              msImageRendering: 'crisp-edges'
            }}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </section>
  );
};

export default BannerSection;