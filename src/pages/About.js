import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiTarget, FiStar } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Inclusivity',
      description: 'Everyone is welcome, just as they are. We break down barriers of race, upbringing, social status, or any other division in Christ.'
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
      description: 'Sharing the Gospel locally and beyond through church planting, orphan rescue, pastor training, and community development.'
    }
  ];

  const leadership = [
    {
      name: 'Pr. Richard',
      role: 'Senior Leader',
      image: '/images/pr-richard.jpg',
      bio: 'Pr. Richard oversees the overall vision and ministries of Jinja Town Church, with a heart for breaking down barriers and building inclusive community.',
      contact: '+31627997562'
    },
    {
      name: 'Pr. Jonathan',
      role: 'Leader - Discipleship & Outreach',
      image: '/images/pr-jonathan.jpg',
      bio: 'Pr. Jonathan focuses on discipleship training and evangelism, equipping believers to share the Gospel with confidence and love.',
      contact: '+256784805817'
    },
    {
      name: 'Pr. Kenneth',
      role: 'Leader - Worship & Family Groups',
      image: '/images/pr-kenneth.jpg',
      bio: 'Pr. Kenneth guides our worship ministry and oversees family group coordination, fostering deeper spiritual connections.'
    },
    {
      name: 'Elder Joshua',
      role: 'Elder - Men\'s Ministry',
      image: '/images/elder-joshua.jpg',
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
            src="/images/about-hero.jpg"
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
              About <span className="text-church-yellow">Arise Africa</span> Jinja Town Church
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow">
              A welcoming Christian community affiliated with Arise Africa International, 
              breaking down barriers and embracing diversity in Christ.
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
                src="/images/diverse-community.jpg"
                alt="Church Community"
                className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
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
                  We strive to reach out to ALL people in Jinja Town, breaking down barriers of race, upbringing, 
                  social status, or any other division. Whether you're new to faith or a lifelong believer, we invite you to experience the life-changing love of Jesus with us.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our story began almost by accident. We initially held Sunday services for the staff at the Arise Africa Guesthouse, as they were unable to attend church due to work commitments. As attendance grew, we recognized a deep hunger 
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
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-avatar.jpg';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-church-red font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-gradient">Story</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Founded as part of Arise Africa International</strong> (which oversees over 260 churches in Uganda and neighboring countries), Jinja Town Church serves as a key hub in Eastern Uganda. We've grown from humble beginnings into a beacon of hope, hosting events like youth jams, mega fellowships, and community outreaches.
                </p>
                
                <p>
                  Our story began almost by accident. We initially held Sunday services for the staff at the Arise Africa Guesthouse, as they were unable to attend church due to work commitments. As attendance grew, we recognized a deep hunger in the Jinja community for a church that embraces diversity and unity in Christ.
                </p>
                
                <p>
                  Today, we are a richly diverse family, with people of various ethnicities, backgrounds, and life experiences coming together to worship, pray, and serve. We are affiliated with Arise Africa International – an organization dedicated to spreading the Gospel across Uganda, East Africa, and beyond through church planting, orphan rescue, pastor training, education, and community development.
                </p>
              </div>
            </motion.div>

          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Family
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              We invite you to become part of our church family. Come as you are, 
              and discover a community where you can grow, serve, and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/church-service" className="btn-accent text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-block">
                Contact us or visit this Sunday!
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-church-red shadow-xl inline-block">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;