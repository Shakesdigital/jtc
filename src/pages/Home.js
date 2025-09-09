import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHeart,
  FiClock,
  FiPlay,
  FiVolume2,
  FiShare2,
  FiCalendar,
  FiMapPin,
  FiArrowRight
} from 'react-icons/fi';

const Home = () => {
  // Static content mode - API calls disabled for initial deployment
  
  // Sample data for sections
  const sampleSermons = [
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor John Mukasa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Discovering God's purpose in our daily walk"
    },
    {
      id: 2,
      title: "Love Without Borders",
      speaker: "Pastor Sarah Nakato",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=300&fit=crop",
      description: "Extending Christ's love to our community"
    },
    {
      id: 3,
      title: "Hope in Christ",
      speaker: "Pastor David Ssemakula",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c46a?w=400&h=300&fit=crop",
      description: "Finding strength in God's promises"
    },
    {
      id: 4,
      title: "Serving with Joy",
      speaker: "Pastor Mary Akello",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=400&h=300&fit=crop",
      description: "The heart of Christian service"
    }
  ];

  const sampleEvents = [
    {
      id: 1,
      title: "Youth Conference 2024",
      date: "December 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
      description: "Annual youth gathering with worship, teaching, and fellowship"
    },
    {
      id: 2,
      title: "Christmas Service",
      date: "December 25, 2024",
      time: "10:00 AM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=300&fit=crop",
      description: "Celebrate the birth of our Savior with special music and message"
    },
    {
      id: 3,
      title: "New Year Prayer Night",
      date: "December 31, 2024",
      time: "10:00 PM - 1:00 AM",
      location: "Main Sanctuary",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=300&fit=crop",
      description: "Welcome the new year with prayer, worship, and dedication"
    },
    {
      id: 4,
      title: "Community Outreach",
      date: "January 12, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "Community Center",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      description: "Serving our local community with love and compassion"
    }
  ];

  const ministries = [
    {
      id: 1,
      title: "Children Ministry",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      description: "Creating a fun, safe environment where children learn about God's love through stories, songs, and activities that build their faith foundation."
    },
    {
      id: 2,
      title: "Worship Ministry",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Leading the congregation in heartfelt worship through music, praise, and creating an atmosphere of reverence and spiritual connection."
    },
    {
      id: 3,
      title: "Family Groups Ministry",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      description: "Building strong family bonds and community connections through small group fellowship, prayer, and mutual support in faith."
    },
    {
      id: 4,
      title: "Discipleship Equip Ministry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Equipping believers with biblical knowledge, spiritual disciplines, and practical skills for Christian living and ministry service."
    },
    {
      id: 5,
      title: "Media and Tech Ministry",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      description: "Supporting worship services and church communications through audio-visual technology, live streaming, and digital outreach."
    },
    {
      id: 6,
      title: "Men's Ministry",
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=400&h=300&fit=crop",
      description: "Building strong Christian men through brotherhood, accountability, service projects, and spiritual growth in community."
    },
    {
      id: 7,
      title: "Outreach Ministry",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      description: "Reaching out to the community with God's love through evangelism, charity work, and social services that make a difference."
    },
    {
      id: 8,
      title: "Women's Ministry",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
      description: "Empowering women to grow in faith, connect in community, and serve with purpose through fellowship and spiritual development."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/community-banner.jpg')`,
            imageRendering: 'crisp-edges',
            WebkitImageRendering: 'crisp-edges',
            msImageRendering: 'crisp-edges',
            filter: 'contrast(1.1) saturate(1.1) brightness(1.05)',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Jinja Town Church
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              Growing in Faith, Serving with Love
            </p>

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg mb-4 opacity-95">Join us for worship every Sunday</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-base">
                <div className="flex items-center justify-center">
                  <FiClock className="w-4 h-4 mr-2" />
                  First Service: 9:00 AM
                </div>
                <div className="flex items-center justify-center">
                  <FiClock className="w-4 h-4 mr-2" />
                  Second Service: 11:00 AM
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link 
                to="/contact"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Plan Your Visit
              </Link>
              
              <Link 
                to="/about"
                className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* About the Church Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                  About <span className="text-church-yellow">Our Church</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Jinja Town Church has been a beacon of hope and love in the heart of Uganda. 
                We are a vibrant community committed to growing in faith, serving our neighbors, and spreading 
                God's love throughout our region.
              </p>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our mission is to create an inclusive environment where everyone can encounter God's grace, 
                build meaningful relationships, and discover their purpose in Christ. We believe in the power 
                of community and the transformative love of Jesus.
              </p>

              <p className="text-lg text-church-gray leading-relaxed">
                Through our various ministries and outreach programs, we continue to impact lives and build 
                a stronger, more compassionate community for all.
              </p>

              <Link 
                to="/about"
                className="inline-flex items-center bg-church-sage hover:bg-church-sage-dark text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read More About Us
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop"
                  alt="Church Community"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/30 to-transparent"></div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Church Ministries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Our <span className="text-church-yellow">Ministries</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Connect, grow, and serve through our diverse ministry opportunities designed for every stage of life
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-3">{ministry.title}</h3>
                  <p className="text-church-gray mb-6 leading-relaxed">{ministry.description}</p>
                  
                  <Link 
                    to={
                      ministry.title === "Children Ministry" ? "/ministries/childrens-ministry" :
                      ministry.title === "Worship Ministry" ? "/ministries/worship-ministry" :
                      ministry.title === "Family Groups Ministry" ? "/ministries/family-groups" :
                      ministry.title === "Outreach Ministry" ? "/ministries/outreach-ministry" :
                      ministry.title === "Discipleship Equip Ministry" ? "/ministries/discipleship-equip" :
                      ministry.title === "Media and Tech Ministry" ? "/ministries/media-tech-ministry" :
                      ministry.title === "Men's Ministry" ? "/ministries/mens-ministry" :
                      ministry.title === "Women's Ministry" ? "/ministries/womens-ministry" :
                      "/ministries"
                    }
                    className="inline-flex items-center text-church-sage hover:text-church-sage-dark font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <FiArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/ministries"
              className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore All Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sermons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Recent <span className="text-church-yellow">Sermons</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Be inspired by God's word through our powerful messages and teachings
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleSermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-church-sage-dark mb-2">{sermon.title}</h3>
                  <p className="text-sm text-church-gray mb-3">{sermon.speaker}</p>
                  <p className="text-sm text-church-gray mb-6 leading-relaxed">{sermon.description}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="flex items-center space-x-1 text-church-sage hover:text-church-sage-dark transition-colors duration-300">
                      <FiVolume2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Listen</span>
                    </button>
                    <button className="flex items-center space-x-1 text-church-sage hover:text-church-sage-dark transition-colors duration-300">
                      <FiPlay className="w-4 h-4" />
                      <span className="text-sm font-medium">Watch</span>
                    </button>
                    <button className="flex items-center space-x-1 text-church-sage hover:text-church-sage-dark transition-colors duration-300">
                      <FiShare2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/sermons"
              className="bg-church-sage hover:bg-church-sage-dark text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Upcoming <span className="text-church-yellow">Events</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Join us for fellowship, worship, and community activities that bring us closer together
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-church-yellow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-church-yellow text-church-sage-dark px-3 py-1 rounded-full text-xs font-bold">
                    UPCOMING
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-church-sage-dark mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-church-gray">
                      <FiCalendar className="w-4 h-4 mr-2 text-church-sage" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-church-gray">
                      <FiClock className="w-4 h-4 mr-2 text-church-sage" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-church-gray">
                      <FiMapPin className="w-4 h-4 mr-2 text-church-sage" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-sm text-church-gray mb-6 leading-relaxed">{event.description}</p>
                  
                  <Link 
                    to="/events"
                    className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 rounded-lg transition-all duration-300 block"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/events"
              className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              See Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-8 text-church-yellow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
              Whether you're new to faith or have been walking with God for years, 
              there's a place for you in our loving, welcoming community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
              >
                Get Connected Today
              </Link>
              <Link 
                to="/about"
                className="bg-transparent border-3 border-church-yellow text-church-yellow hover:bg-church-yellow hover:text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-xl transition-all duration-300"
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