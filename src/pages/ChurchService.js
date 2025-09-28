import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiMapPin, FiUsers, FiBook, FiMusic, FiVideo } from 'react-icons/fi';

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
          time: '4:00 PM - 6:00 PM',
          description: 'Join us every Tuesday from 4:00 PM to 6:00 PM for a time of breaking fast, prayer, and fellowship with our church community family. This mid-week gathering strengthens our bonds and focuses on intercession for personal needs, the community, and global missions.'
        }
      ]
    },
    {
      day: 'Special Events',
      services: [
        {
          name: 'Annual Youth Jam',
          time: 'September (Check for updates)',
          description: 'A lively event celebrating Jesus through music, dance, and testimonies (typically held in September – check for updates).'
        },
        {
          name: 'Mega Fellowships',
          time: 'Quarterly',
          description: 'Quarterly celebrations with worship, preaching, and community meals.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-church-red to-church-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiUsers className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Church Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
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

          <div className="space-y-8">
            {serviceSchedule.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{day.day}</h3>
                <div className="grid gap-6">
                  {day.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-4 border-church-red pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-900">{service.name}</h4>
                        <div className="flex items-center text-church-red font-medium">
                          <FiClock className="w-4 h-4 mr-2" />
                          {service.time}
                        </div>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-8 mt-12 bg-church-red text-white text-center"
          >
            <FiMapPin className="w-12 h-12 mx-auto mb-4 text-church-gold" />
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <p className="text-lg mb-2">Arise Jinja Town Church</p>
            <p className="opacity-90 mb-6">Wilson Ave Plot 23, Jinja, Uganda (15-minute walk from town center)</p>
            <button className="btn-accent">Get Directions</button>
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
                description: 'Experience uplifting music and heartfelt worship that draws you closer to God.'
              },
              {
                icon: FiBook,
                title: 'Biblical Teaching',
                description: 'Receive practical, life-changing messages rooted in God\'s Word.'
              },
              {
                icon: FiUsers,
                title: 'Warm Community',
                description: 'Feel welcomed by our friendly congregation and caring church family.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-church-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
            className="text-center card p-12"
          >
            <FiVideo className="w-16 h-16 mx-auto mb-6 text-church-red" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Make It This Week?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Catch up on our latest sermons and stay connected with our church family online.
            </p>
            <Link to="/church-service/sermons" className="btn-primary text-lg px-8 py-4">
              Watch Sermons Online
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChurchService;