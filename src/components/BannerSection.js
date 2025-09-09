import React from 'react';

const BannerSection = ({ alt = "Partnership Banner" }) => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        <a 
          href="https://four12global.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full group"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left side - Partnership text */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  Partnership Opportunity
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-4">
                  Join us in making a difference in the community
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold text-lg group-hover:text-blue-800 transition-colors">
                  Learn More 
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Right side - Logo and branding */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <img 
                    src="https://aht.nuplink3.net/pool/pub/ca/85/7b/4fb485677dcc3f85547c3d1786ca857b/7060?token=b1e369bcc3ce0fa201ca19bcb19c5629&ts=1757413584&ip=154.227.128.100&x-image-process=style/pvd" 
                    alt="Four12 Global Logo"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="text-white font-bold text-xl md:text-2xl text-center">
                          FOUR<span class="text-yellow-300">12</span><br/>
                          <span class="text-sm font-normal">GLOBAL</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                  Four12 Global
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  Ministry Partnership
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default BannerSection;