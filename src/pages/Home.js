import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHeart,
  FiClock
} from 'react-icons/fi';

const Home = () => {
  // Static content mode - API calls disabled for initial deployment


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-church.jpg')`,
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
              Welcome to
              <span className="block text-church-gold">Jinja Town Church</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-shadow opacity-90">
              A community of faith, hope, and love in the heart of Uganda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/about"
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Discover Our Story
              </Link>
              
              <Link 
                to="/church-service"
                className="btn-secondary text-lg px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 shadow-xl"
              >
                <FiClock className="w-5 h-5 mr-2" />
                Service Times
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-church-gold mb-2">500+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-church-gold mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-church-gold mb-2">8</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Ministries</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Sermon Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest <span className="text-gradient">Sermon</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be inspired by God's word through our weekly messages
              </p>
            </motion.div>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Join us for inspiring weekly messages.</p>
            <Link to="/church-service" className="btn-primary">
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient">Ministries</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect, grow, and serve through our diverse ministry opportunities
              </p>
            </motion.div>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Discover our diverse ministry opportunities for all ages.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              to="/ministries" 
              className="btn-primary text-lg px-8 py-4"
            >
              Explore All Ministries
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join us for fellowship, worship, and community activities
              </p>
            </motion.div>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Stay connected with our fellowship, worship, and community activities.</p>
            <Link to="/events" className="btn-primary">
              View Event Calendar
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              to="/events" 
              className="btn-secondary text-lg px-8 py-4"
            >
              View All Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-church-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Whether you're new to faith or have been walking with God for years, 
              there's a place for you in our loving community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="btn-accent text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Connected
              </Link>
              <Link 
                to="/about"
                className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-church-red shadow-xl"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;