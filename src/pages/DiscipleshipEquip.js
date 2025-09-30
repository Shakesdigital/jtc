import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiBookOpen,
  FiUsers,
  FiTrendingUp,
  FiCalendar,
  FiMessageCircle,
  FiArrowRight,
  FiPlay,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiCheckCircle,
  FiStar,
  FiHeart,
  FiGift,
  FiAward,
  FiCompass,
  FiZap,
  FiInfo
} from 'react-icons/fi';

const DiscipleshipEquip = () => {
  // State for form and interactions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredProgram: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Discipleship programs data
  const programs = [
    {
      id: 1,
      title: "Bible Study Classes",
      category: "Foundational Learning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Deep dive into Scripture through systematic Bible study courses designed for all levels. Learn to study God's Word with confidence and grow in biblical knowledge.",
      duration: "12 weeks",
      level: "All Levels",
      icon: <FiBookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Leadership Training",
      category: "Leadership Development",
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&h=400&fit=crop",
      description: "Equip yourself with biblical leadership principles and practical skills to serve effectively in ministry and your community with confidence and wisdom.",
      duration: "8 weeks",
      level: "Intermediate",
      icon: <FiAward className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Mentorship Groups",
      category: "Personal Growth",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      description: "Join small groups where experienced believers provide guidance, accountability, and encouragement for your spiritual journey and personal development.",
      duration: "Ongoing",
      level: "All Levels",
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Prayer Workshops",
      category: "Spiritual Disciplines",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=600&h=400&fit=crop",
      description: "Learn different prayer methods, deepen your communion with God, and develop a consistent prayer life that transforms your relationship with the Father.",
      duration: "4 weeks",
      level: "All Levels",
      icon: <FiHeart className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 5,
      title: "Ministry Skills Training",
      category: "Practical Ministry",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      description: "Develop practical skills for various ministry areas including teaching, counseling, worship leading, and community outreach to serve more effectively.",
      duration: "6 weeks",
      level: "Intermediate",
      icon: <FiZap className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "Life Purpose Discovery",
      category: "Identity & Calling",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: "Discover your God-given gifts, talents, and calling through assessments, reflection, and biblical teaching about purpose and destiny in God's kingdom.",
      duration: "10 weeks",
      level: "All Levels",
      icon: <FiCompass className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600"
    }
  ];

  // How it works steps
  const steps = [
    {
      id: 1,
      title: "Join a Class",
      description: "Choose from our diverse range of discipleship programs that match your spiritual growth needs and schedule preferences.",
      icon: <FiUsers className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Engage in Study",
      description: "Participate in interactive lessons, discussions, and practical exercises designed to deepen your understanding and application of biblical truths.",
      icon: <FiBookOpen className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Connect with Mentors",
      description: "Build meaningful relationships with mature believers who provide guidance, prayer support, and accountability for your spiritual journey.",
      icon: <FiHeart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Lead Others",
      description: "Apply what you've learned by serving in ministry, mentoring newer believers, and leading others in their own discipleship journey.",
      icon: <FiStar className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=400&h=300&fit=crop"
    }
  ];

  // Resources data
  const resources = [
    {
      id: 1,
      title: "Bible Study Guides",
      type: "PDF Downloads",
      description: "Comprehensive study guides for systematic Bible study and personal devotions",
      icon: <FiBookOpen className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 2,
      title: "Daily Devotional Plans",
      type: "Reading Plans",
      description: "Structured devotional plans to help you develop consistent time with God",
      icon: <FiCalendar className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 3,
      title: "Leadership Podcast Series",
      type: "Audio Content",
      description: "Listen to inspiring messages and practical leadership principles on the go",
      icon: <FiPlay className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 4,
      title: "Discipleship Blog",
      type: "Articles & Tips",
      description: "Regular articles with practical insights for spiritual growth and ministry",
      icon: <FiMessageCircle className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 5,
      title: "Prayer Resources",
      type: "Spiritual Disciplines",
      description: "Prayer guides, templates, and resources to enrich your prayer life",
      icon: <FiHeart className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 6,
      title: "Ministry Tools",
      type: "Practical Resources",
      description: "Templates, checklists, and tools for effective ministry and leadership",
      icon: <FiGift className="w-6 h-6" />,
      link: "#"
    }
  ];

  // FAQs data
  const faqs = [
    {
      id: 1,
      question: "Do I need prior Bible knowledge to join these programs?",
      answer: "Not at all! Our programs are designed for believers at every level of spiritual maturity. We have classes for complete beginners as well as more advanced studies for those who want to go deeper. Our teachers are skilled at meeting you where you are and helping you grow from there."
    },
    {
      id: 2,
      question: "Are classes available online or only in person?",
      answer: "We offer both online and in-person options for most of our programs. Many classes have hybrid formats where you can attend in person or join virtually. This flexibility allows you to participate regardless of your schedule or location preferences."
    },
    {
      id: 3,
      question: "How much time commitment is required?",
      answer: "Time commitments vary by program. Most classes meet weekly for 1-2 hours, with some additional time for personal study and reflection. We also offer intensive weekend workshops and ongoing mentorship groups with flexible scheduling."
    },
    {
      id: 4,
      question: "Is there a cost for discipleship programs?",
      answer: "Most of our core discipleship programs are offered at no cost as part of our commitment to equipping believers. Some specialized workshops or retreats may have minimal fees to cover materials, but financial assistance is always available for those in need."
    },
    {
      id: 5,
      question: "Can I become a mentor or group leader?",
      answer: "Absolutely! We're always looking for mature believers to serve as mentors and group leaders. After completing foundational programs and demonstrating spiritual maturity, you can apply for leadership training to guide others in their discipleship journey."
    },
    {
      id: 6,
      question: "What if I miss a class or need to drop out?",
      answer: "Life happens, and we understand! Most classes are recorded for makeup purposes, and we provide materials to help you catch up. If you need to take a break, you're welcome to rejoin the next session or find a program that better fits your current season."
    }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', preferredProgram: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const scrollToForm = () => {
    document.getElementById('get-involved').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/discipleship-equip-hero.jpg"
            alt="Discipleship Hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Discipleship Equip Ministry: <br />
              <span className="text-church-yellow">Growing Deeper in Faith</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Equipping you to live out God's purpose through transformational learning and spiritual growth
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
              <button 
                onClick={scrollToForm}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto border-2 sm:border-3"
              >
                Start Your Journey
              </button>
              <button 
                onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 sm:border-3 border-white text-white hover:bg-white hover:text-church-sage font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                Explore Programs
              </button>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
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
                  We empower you to <span className="text-church-yellow">grow in faith and lead with purpose</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our Discipleship Equip Ministry is designed to take you deeper in your walk with Christ through 
                systematic learning, practical application, and meaningful community. Whether you're a new believer 
                or have been following Jesus for years, we provide the tools and training you need to grow spiritually.
              </p>

              <p className="text-lg text-church-gray leading-relaxed">
                Through Bible study, leadership development, mentorship, and hands-on ministry experience, we equip 
                believers to not only grow in their personal faith but also to effectively disciple others. Our goal 
                is to see every believer walking confidently in their God-given calling and purpose.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FiTrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-church-sage-dark">Personal Growth</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <FiUsers className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-church-sage-dark">Community Impact</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=500&fit=crop"
                  alt="Discipleship Study Group"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/20 to-transparent"></div>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-church-yellow max-w-xs">
                <p className="text-sm text-church-gray italic mb-3">
                  "The discipleship program transformed my relationship with God and gave me confidence to lead others."
                </p>
                <div className="text-xs font-semibold text-church-sage-dark">- Patricia Nalongo, Program Graduate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discipleship Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Grow Your <span className="text-church-yellow">Faith</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              Choose from our diverse programs designed to meet you where you are and take you where God wants you to be
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-2 group-hover:text-church-sage transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-church-gray mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Your Discipleship <span className="text-church-yellow">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              Follow these simple steps to begin your transformational journey of spiritual growth and leadership development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group relative"
              >
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 bg-church-sage text-white rounded-full flex items-center justify-center group-hover:bg-church-sage-dark transition-colors duration-300 mb-4">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-church-sage-dark mb-4">
                  {step.title}
                </h3>
                
                <p className="text-church-gray mb-6 leading-relaxed">
                  {step.description}
                </p>
                
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Spiritual Growth <span className="text-church-yellow">Resources</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              Access a wealth of resources designed to support your spiritual growth and ministry development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-church-sage bg-opacity-10 rounded-lg mb-4 group-hover:bg-church-sage group-hover:text-white transition-all duration-300">
                  {resource.icon}
                </div>
                
                <h3 className="text-lg font-bold text-church-sage-dark mb-2 group-hover:text-church-sage transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <div className="text-sm text-church-yellow font-semibold mb-3">
                  {resource.type}
                </div>
                
                <p className="text-church-gray text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center text-church-sage font-semibold text-sm group-hover:text-church-sage-dark transition-colors duration-300">
                  Access Resource
                  <FiArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Take the next step in your <span className="text-church-yellow">faith journey!</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-2xl mx-auto">
              Join our discipleship community and begin a transformational journey that will deepen your faith and equip you to lead others.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/discipleship-equip-hero.jpg"
                  alt="Discipleship Community"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-church-sage-light to-church-sage rounded-2xl shadow-2xl p-8 text-white"
            >
            {isSubmitted ? (
              <div className="text-center py-12">
                <FiCheckCircle className="w-16 h-16 mx-auto mb-6 text-church-yellow" />
                <h3 className="text-2xl font-bold mb-4">Welcome to the journey!</h3>
                <p className="text-lg opacity-90">
                  Thank you for your interest in growing deeper in faith. Our discipleship coordinator will contact you within 24 hours to discuss the best program for your spiritual growth.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredProgram" className="block text-sm font-semibold mb-2">
                      Preferred Program
                    </label>
                    <select
                      id="preferredProgram"
                      name="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a program</option>
                      {programs.map(program => (
                        <option key={program.id} value={program.title}>{program.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message or Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your spiritual goals or any questions you have about our programs..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-church-sage-dark border-t-transparent mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5 mr-2" />
                        Join Now
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white border-opacity-20">
                  <button
                    type="button"
                    className="flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <FiUsers className="w-5 h-5 mr-2" />
                    Become a Mentor
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <FiCalendar className="w-5 h-5 mr-2" />
                    Info Session
                  </button>
                </div>
              </form>
            )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Frequently Asked <span className="text-church-yellow">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-2xl mx-auto">
              Get answers to common questions about our discipleship programs and spiritual growth journey
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-church-sage-dark pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedFAQ === faq.id ? (
                      <FiChevronUp className="w-5 h-5 text-church-sage" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-church-sage" />
                    )}
                  </div>
                </button>
                
                {expandedFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-church-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Final CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-church-sage-light to-church-sage p-8 rounded-2xl text-white">
              <FiInfo className="w-12 h-12 mx-auto mb-4 text-church-yellow" />
              <h3 className="text-2xl font-bold mb-4">Ready to Grow Deeper?</h3>
              <p className="mb-6 opacity-90">Our discipleship team is here to help you find the perfect program for your spiritual growth journey.</p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold px-8 py-3 rounded-full transition-all duration-300"
              >
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiscipleshipEquip;