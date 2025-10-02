import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiUsers, FiBook, FiMusic } from 'react-icons/fi';

const ChurchService = () => {
  const serviceSchedule = [
    {
      day: 'Sunday',
      services: [
        {
          name: 'Prayer & Fellowship',
          time: '9:00 AM',
          description: 'We gather every Sunday starting at 9:00 AM for prayer and fellowship, with the main Church Service from 10:00 AM to 12:30 PM.'
        },
        {
          name: 'Main Church Service',
          time: '10:00 AM - 12:30 PM',
          description: 'Services include vibrant worship, biblical teaching, and opportunities for communion and prayer. Come as you are – children, families, and visitors are all encouraged to participate.'
        }
      ]
    },
    {
      day: 'Tuesday',
      services: [
        {
          name: 'Tuesday Prayer Meeting',
          time: '5:30 PM - 6:30 PM',
          description: 'Join us every Tuesday from 5:30 PM to 6:30 PM for a time of breaking fast, prayer, and fellowship with our church community family. This mid-week gathering strengthens our bonds and focuses on intercession for personal needs, the community, and global missions.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen hero-content-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/church-service-hero.jpg"
            alt="Church Services Hero"
            className="hero-image"
            style={{
              filter: 'brightness(0.6)'
            }}
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg text-center">
              Church Services
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow text-center">
              Join us for worship, prayer, and fellowship. Everyone is welcome in God's house.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Schedule */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service <span className="text-gradient">Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for worship and fellowship throughout the week
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1 h-full">
              <img
                src="/images/service-schedule.jpg"
                alt="Church Service Schedule"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{ height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              {serviceSchedule.map((day, index) => (
                <div key={day.day} className="card p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{day.day}</h3>
                  <div className="space-y-4">
                    {day.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border-l-4 border-church-red pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                          <div className="flex items-center text-church-red font-medium text-sm sm:text-base">
                            <FiClock className="w-4 h-4 mr-2" />
                            {service.time}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What to <span className="text-gradient">Expect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              First time visitor? Here's what you can expect when you join us for worship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiMusic,
                title: 'Inspiring Worship',
                description: 'Experience uplifting music and heartfelt worship that draws you closer to God.',
                image: '/images/inspiring-worship.jpg'
              },
              {
                icon: FiBook,
                title: 'Biblical Teaching',
                description: 'Receive practical, life-changing messages rooted in God\'s Word.',
                image: '/images/biblical-teaching.jpg'
              },
              {
                icon: FiUsers,
                title: 'Warm Community',
                description: 'Feel welcomed by our friendly congregation and caring church family.',
                image: '/images/warm-community.jpg'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/sermons-cta.jpg"
                alt="Listen and Watch Sermons"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Can't Make It This Week?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Catch up on our latest sermons and stay connected with our church family online.
              </p>
              <Link to="/church-service/sermons" className="btn-primary text-lg px-8 py-4">
                Listen and Watch Sermons Online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChurchService;