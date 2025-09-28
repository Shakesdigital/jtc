import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiTarget, FiStar, FiMail } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Inclusivity',
      description: 'Everyone is welcome, just as they are. Encouraging people to love God and love one another and to grow together as one faith family community in Jesus Christ.'
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'Building strong bonds through fellowship and service. We are a richly diverse family united in faith.'
    },
    {
      icon: FiTarget,
      title: 'Growth',
      description: 'Equipping believers to live out their faith daily, discovering their purpose in Christ through discipleship and service.'
    },
    {
      icon: FiStar,
      title: 'Outreach',
      description: 'Sharing the Gospel locally and beyond through church planting, community development, pastor training, and global missions.'
    }
  ];

  const leadership = [
    {
      name: 'Pr. Richard',
      role: 'Senior Leader',
      image: '/images/pr-richard-new.jpg',
      bio: 'Pr. Richard oversees the overall vision and ministries of Jinja Town Church, with a heart for encouraging people to love God and love one another as a faith family community.',
      contact: '+31627997562'
    },
    {
      name: 'Pr. Jonathan',
      role: 'Leader - Discipleship & Outreach',
      image: '/images/pr-jonathan-new.png',
      bio: 'Pr. Jonathan focuses on discipleship training and evangelism, equipping believers to share the Gospel with confidence and love.',
      contact: '+256784805817'
    },
    {
      name: 'Pr. Kenneth',
      role: 'Leader - Worship & Family Groups',
      image: '/images/pr-kenneth-new.jpg',
      bio: 'Pr. Kenneth guides our worship ministry and oversees family group coordination, fostering deeper spiritual connections.'
    },
    {
      name: 'Elder Joshua',
      role: 'Elder - Men\'s Ministry',
      image: '/images/elder-joshua-new.jpg',
      bio: 'Elder Joshua supports men\'s ministry and serves on the elders\' council, providing spiritual guidance and mentorship.',
      contact: '+256774775058'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen hero-content-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-us.jpg"
            alt="About Us Hero"
            className="hero-image"
            style={{
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg">
              About <span className="text-church-yellow">Arise</span> Jinja Town Church
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow">
              A welcoming Christian community in partnership with <a href="https://four12global.com/" target="_blank" rel="noopener noreferrer" className="text-church-yellow hover:text-church-yellow-dark transition-colors duration-300">Four12 Global</a>, 
              encouraging people to love God and love one another and to grow together as one faith family community in Jesus Christ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/mission-story.jpg"
                alt="Church Community"
                className="rounded-xl shadow-lg w-full h-80 md:h-96 lg:h-[28rem] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong>Our mission is rooted in John 3:16 and 1 Timothy 2:1-4:</strong> "All people can be saved if they believe in Christ Jesus our Lord."
                  We strive to reach out to ALL people in Jinja Town, encouraging people to love God and love one another and to grow together as one faith family community in Jesus Christ. Whether you're new to faith or a lifelong believer, we invite you to experience the life-changing love of Jesus with us.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our story began almost by accident. We initially held Sunday services for the staff at the Four12 Global Guesthouse, as they were unable to attend church due to work commitments. As attendance grew, we recognized a deep hunger
                  in the Jinja community for a church that embraces diversity and unity in Christ. Today, we are a richly diverse family, with people of various ethnicities, backgrounds, and life experiences coming together to worship, pray, and serve.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do as a church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-church-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our church community with wisdom and love
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 mx-auto mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-avatar.jpg';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action - Enhanced Visibility */}
      <section className="section-padding bg-gradient-to-br from-church-sage via-church-sage-dark to-church-sage text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-church-yellow rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-church-yellow rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl opacity-5"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Eye-catching Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-church-yellow rounded-full mb-6 shadow-xl">
                <FiHeart className="w-8 h-8 text-church-sage-dark" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg"
            >
              <span className="text-church-yellow">Join Our Family</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-shadow"
            >
              We invite you to become part of our church family. Come as you are,
              and discover a community where you can grow, serve, and thrive in Jesus Christ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/church-service"
                className="btn-accent text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <FiUsers className="w-5 h-5 mr-2" />
                Visit This Sunday!
              </Link>

              <Link
                to="/contact"
                className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-church-sage-dark rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <FiMail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </motion.div>

            {/* Additional encouragement text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-base mt-6 opacity-90 italic"
            >
              "Come and see!" - John 1:46
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;