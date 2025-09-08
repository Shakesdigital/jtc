import React from 'react';
import { motion } from 'framer-motion';
import BannerSection from '../components/BannerSection';
import { FiHeart, FiUsers, FiTarget, FiStar } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Faith',
      description: 'We believe in the transformative power of faith in Jesus Christ and seek to grow deeper in our relationship with God.'
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'We are committed to building strong, supportive relationships within our church family and the broader Jinja community.'
    },
    {
      icon: FiTarget,
      title: 'Service',
      description: 'We actively serve others as an expression of God\'s love, both within our congregation and in our local community.'
    },
    {
      icon: FiStar,
      title: 'Excellence',
      description: 'We strive for excellence in all we do, from worship and teaching to community outreach and ministry programs.'
    }
  ];

  const leadership = [
    {
      name: 'Pastor John Mukasa',
      role: 'Senior Pastor',
      image: '/images/pastor-john.jpg',
      bio: 'Pastor John has been leading Jinja Town Church for over 10 years, bringing a heart for community outreach and biblical teaching.'
    },
    {
      name: 'Pastor Mary Nakato',
      role: 'Associate Pastor',
      image: '/images/pastor-mary.jpg',
      bio: 'Pastor Mary leads our women\'s ministry and youth programs, with a passion for discipleship and mentoring.'
    },
    {
      name: 'Elder Samuel Kizza',
      role: 'Church Elder',
      image: '/images/elder-samuel.jpg',
      bio: 'Elder Samuel oversees our community outreach programs and serves as a spiritual guide to our congregation.'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              About Us
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              A vibrant community of believers in Jinja, Uganda, dedicated to sharing God's love 
              and transforming lives through worship, fellowship, and service.
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
                src="/images/church-community.jpg"
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
                  To be a beacon of hope and love in Jinja, Uganda, by sharing the Gospel of Jesus Christ, 
                  building strong community relationships, and serving those in need with compassion and excellence.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our <span className="text-gradient">Vision</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To see transformed lives and a transformed community through the power of God's love, 
                  creating a place where everyone can find hope, healing, and purpose.
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
                  Jinja Town Church was founded in 2008 with a simple vision: to create a welcoming 
                  community where people could encounter God's love and grow in their faith journey. 
                  What started as a small group meeting in homes has grown into a vibrant congregation 
                  of over 500 members.
                </p>
                
                <p>
                  Over the years, we have been blessed to witness countless lives transformed through 
                  the power of the Gospel. From our humble beginnings, we have expanded our ministries 
                  to include children's programs, youth activities, community outreach, and various 
                  support groups.
                </p>
                
                <p>
                  Today, we continue to be rooted in our core mission while adapting to meet the 
                  evolving needs of our community. We are committed to being a church that not only 
                  serves our members but also makes a positive impact in Jinja and beyond.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-church-red mb-2">2008</div>
                  <div className="text-sm text-gray-600">Church Founded</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-church-red mb-2">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-church-red mb-2">8</div>
                  <div className="text-sm text-gray-600">Ministry Programs</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-church-red mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
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
              <button className="btn-accent text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Visit This Sunday
              </button>
              <button className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-church-red shadow-xl">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <BannerSection imageUrl="https://www.telebox.online/f-detail/ZnA1a3MwMDAwbzNx0" alt="Church Banner" />
    </div>
  );
};

export default About;