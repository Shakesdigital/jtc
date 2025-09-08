import React from 'react';

const BannerSection = ({ alt = "Partnership Banner" }) => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="w-full py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 px-12 py-6 w-full max-w-4xl">
            <div className="flex items-center justify-center space-x-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
                In Partnership with
              </h2>
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-xl">
                  F12
                </div>
                <div className="text-gray-600 text-sm">
                  <div className="font-medium">FOUR</div>
                  <div className="font-medium">TWELVE</div>
                  <div className="font-medium">DIGITAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;