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
    <div className="min-h-screen bg-church-sage">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-church-sage to-church-sage-dark">
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to
              <span className="block text-church-yellow mt-2">Jinja Town Church</span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-church-white opacity-90 leading-relaxed">
              A vibrant community of faith, hope, and love in the heart of Uganda. 
              Join us as we grow together in Christ's love and serve our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link 
                to="/about"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Discover Our Story
              </Link>
              
              <Link 
                to="/church-service"
                className="bg-transparent border-2 border-church-yellow text-church-yellow hover:bg-church-yellow hover:text-church-sage-dark font-semibold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
              >
                <FiClock className="w-5 h-5 mr-2 inline" />
                Service Times
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-church-yellow mb-2">500+</div>
                <div className="text-sm uppercase tracking-wide text-church-white opacity-80">Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-church-yellow mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide text-church-white opacity-80">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-church-yellow mb-2">8</div>
                <div className="text-sm uppercase tracking-wide text-church-white opacity-80">Ministries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sermon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-church-sage-dark mb-4">
                Latest <span className="text-church-yellow">Sermon</span>
              </h2>
              <p className="text-lg text-church-gray max-w-2xl mx-auto">
                Be inspired by God's word through our weekly messages
              </p>
            </motion.div>
          </div>

          <div className="text-center py-12 bg-church-sage bg-opacity-10 rounded-xl">
            <p className="text-church-sage-dark mb-6 text-lg">Join us for inspiring weekly messages.</p>
            <Link 
              to="/church-service" 
              className="bg-church-sage hover:bg-church-sage-dark text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-church-sage-dark mb-4">
                Our <span className="text-church-yellow">Ministries</span>
              </h2>
              <p className="text-lg text-church-gray max-w-2xl mx-auto">
                Connect, grow, and serve through our diverse ministry opportunities
              </p>
            </motion.div>
          </div>

          <div className="text-center py-12">
            <p className="text-church-gray mb-8 text-lg">Discover our diverse ministry opportunities for all ages.</p>
            <Link 
              to="/ministries" 
              className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore All Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-church-sage-dark mb-4">
                Upcoming <span className="text-church-yellow">Events</span>
              </h2>
              <p className="text-lg text-church-gray max-w-2xl mx-auto">
                Join us for fellowship, worship, and community activities
              </p>
            </motion.div>
          </div>

          <div className="text-center py-12">
            <p className="text-church-gray mb-8 text-lg">Stay connected with our fellowship, worship, and community activities.</p>
            <Link 
              to="/events" 
              className="bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Event Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-church-sage text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-6 text-church-yellow" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Whether you're new to faith or have been walking with God for years, 
              there's a place for you in our loving community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Connected
              </Link>
              <Link 
                to="/about"
                className="bg-transparent border-2 border-church-yellow text-church-yellow hover:bg-church-yellow hover:text-church-sage-dark font-semibold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
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