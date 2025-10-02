import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiArrowRight, 
  FiMail, 
  FiSend,
  FiChevronDown,
  FiChevronUp,
  FiTarget,
  FiHeart,
  FiBookOpen,
  FiCalendar,
  FiGlobe,
  FiStar,
  FiCheck,
  FiGift,
  FiCompass
} from 'react-icons/fi';

const WomensMinistry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredProgram: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Programs data
  const programs = [
    {
      id: 1,
      title: "Women's Bible Study",
      icon: FiBookOpen,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
      description: "Discover God's heart for women through deep Bible study. Our weekly gatherings create space for spiritual growth, meaningful discussions, and authentic community as we explore scripture together.",
      features: ["Weekly 90-minute sessions", "Verse-by-verse study", "Small group discussions", "Prayer time"]
    },
    {
      id: 2,
      title: "Mentorship Circles",
      icon: FiHeart,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
      description: "Connect with women who will encourage and guide your journey. Experience the beauty of intergenerational friendship as we learn from each other's wisdom and life experiences.",
      features: ["Monthly mentor meetings", "Life skill sharing", "Spiritual guidance", "Personal growth focus"]
    },
    {
      id: 3,
      title: "Service & Outreach",
      icon: FiGift,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: "Make a difference in our community through compassionate service. From supporting local families to organizing charity drives, we put our faith into action together.",
      features: ["Monthly service projects", "Community partnerships", "Charity initiatives", "Family support programs"]
    },
    {
      id: 4,
      title: "Retreats & Events",
      icon: FiCompass,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      description: "Refresh your soul and deepen friendships through special retreats and events. These memorable experiences create lasting bonds and provide space for spiritual renewal.",
      features: ["Annual weekend retreats", "Seasonal celebrations", "Guest speakers", "Workshop sessions"]
    }
  ];

  // How it works steps
  const steps = [
    {
      id: 1,
      title: "Find a Group",
      description: "Explore our various women's programs and discover one that resonates with your heart and schedule.",
      icon: FiTarget
    },
    {
      id: 2,
      title: "Attend a Meeting",
      description: "Join us for your first gathering - come as you are and experience our warm, welcoming community.",
      icon: FiUsers
    },
    {
      id: 3,
      title: "Build Sisterhood",
      description: "Form meaningful friendships with women who will support and encourage your faith journey.",
      icon: FiHeart
    },
    {
      id: 4,
      title: "Serve Together",
      description: "Use your unique gifts to serve others and make a positive impact in our community.",
      icon: FiStar
    }
  ];

  // Resources
  const resources = [
    {
      id: 1,
      title: "Bible Study Guides",
      description: "Download our comprehensive study materials designed specifically for women",
      link: "#",
      icon: FiBookOpen
    },
    {
      id: 2,
      title: "Devotionals for Women",
      description: "Daily inspiration and encouragement for your spiritual journey",
      link: "#",
      icon: FiHeart
    },
    {
      id: 3,
      title: "Faith & Leadership Podcast",
      description: "Listen to inspiring stories and practical wisdom from Christian women leaders",
      link: "#",
      icon: FiGlobe
    },
    {
      id: 4,
      title: "Life & Faith Blog",
      description: "Read articles on motherhood, career, relationships, and spiritual growth",
      link: "#",
      icon: FiArrowRight
    }
  ];

  // FAQs
  const faqs = [
    {
      id: 1,
      question: "Do I need to be a church member to join?",
      answer: "Not at all! Our Women's Ministry welcomes all women, whether you're a longtime member, new to our church, or just exploring faith. We believe every woman has a place in our community."
    },
    {
      id: 2,
      question: "Are groups open to all ages?",
      answer: "Yes! We have programs for women of all ages and life stages. Some groups are age-specific while others celebrate the beauty of intergenerational fellowship. We'll help you find the perfect fit."
    },
    {
      id: 3,
      question: "What if I'm new to Bible study?",
      answer: "Perfect! Many of our members started their Bible study journey with us. Our groups are designed to welcome beginners and provide supportive environments for learning and growth."
    },
    {
      id: 4,
      question: "How often do groups meet?",
      answer: "Most groups meet weekly or bi-weekly, with flexible scheduling including morning, afternoon, and evening options. We also offer online groups for those who prefer virtual connection."
    },
    {
      id: 5,
      question: "Is childcare available?",
      answer: "Yes! We provide childcare for most daytime programs. Please let us know your needs when you register, and we'll make arrangements to support you."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', preferredProgram: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&h=1080&fit=crop"
            alt="Women's Ministry Hero"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Women's Ministry: <span className="text-church-yellow">Empowering Godly Women</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Connect, grow, and shine in faith together
            </p>

            <div className="pt-6 sm:pt-8">
              <Link 
                to="#get-involved"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto border-2 sm:border-3"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
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
                  We Uplift Women to <span className="text-church-yellow">Thrive in Faith</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our Women's Ministry is a vibrant community where women discover their God-given purpose through 
                fellowship, Bible study, mentorship, and service. We believe every woman has unique gifts to share 
                and dreams to pursue in Christ.
              </p>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Whether you're seeking deeper spiritual growth, meaningful friendships, or opportunities to serve, 
                you'll find a welcoming space to flourish in faith and community with us.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-pink-400">
                  <div className="text-2xl font-bold text-church-sage-dark">80+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-pink-400">
                  <div className="text-2xl font-bold text-church-sage-dark">4</div>
                  <div className="text-sm text-gray-600">Core Programs</div>
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
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop"
                  alt="Women in Fellowship"
                  className="w-full h-96 transform hover:scale-105 transition-transform duration-500"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Types Section */}
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
                Connect and <span className="text-church-yellow">Grow</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Discover the program that speaks to your heart and helps you flourish in faith and sisterhood
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border border-pink-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 transform group-hover:scale-110 transition-transform duration-500"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-church-yellow text-church-sage-dark p-3 rounded-full">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-church-sage-dark mb-3 group-hover:text-church-yellow transition-colors duration-300">
                      {program.title}
                    </h3>
                    
                    <p className="text-church-gray mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-church-sage-dark mb-2 text-sm">What's Included:</h4>
                      <div className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center">
                            <FiCheck className="w-4 h-4 text-church-sage mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300">
                        Learn More
                      </button>
                      <button 
                        onClick={() => setFormData(prev => ({ ...prev, preferredProgram: program.title }))}
                        className="flex-1 bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
                Getting <span className="text-church-yellow">Started</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Your journey to sisterhood and spiritual growth is just four simple steps away
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="bg-gray-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="absolute top-8 left-16 w-full h-0.5 bg-pink-200 hidden lg:block" style={{ display: index === steps.length - 1 ? 'none' : 'block' }}></div>
                  <h3 className="text-xl font-bold text-church-sage-dark mb-3">{step.title}</h3>
                  <p className="text-church-gray leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Testimonial Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-pink-100">
              <h3 className="text-2xl font-bold text-church-sage-dark mb-4">Hear from Our Women</h3>
              <div className="aspect-video bg-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Video testimonial coming soon</p>
                </div>
              </div>
              <p className="text-church-gray italic">"Joining Women's Ministry changed my life. I found not just friends, but sisters who walk with me in faith." - Grace M.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
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
                Resources for <span className="text-church-yellow">Growth</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Tools and materials to support your spiritual journey and personal development
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <IconComponent className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="text-lg font-bold text-church-sage-dark mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                  <Link 
                    to={resource.link}
                    className="text-pink-600 hover:text-pink-700 font-semibold text-sm inline-flex items-center"
                  >
                    Access Resource
                    <FiArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Sisterhood and Grow in Faith!
            </h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Take the next step in your faith journey and connect with women who will encourage and uplift you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-church-sage-dark mb-2">
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
                  <label htmlFor="email" className="block text-sm font-semibold text-church-sage-dark mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-semibold text-church-sage-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="preferredProgram" className="block text-sm font-semibold text-church-sage-dark mb-2">
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
                    <option value="Women's Bible Study">Women's Bible Study</option>
                    <option value="Mentorship Circles">Mentorship Circles</option>
                    <option value="Service & Outreach">Service & Outreach</option>
                    <option value="Retreats & Events">Retreats & Events</option>
                    <option value="Any/Undecided">Any/Undecided</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-church-sage-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                  placeholder="Tell us about yourself, your interests, or any questions you have..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Join Now
                      <FiSend className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus === 'success' 
                      ? "Thank you! We'll contact you soon about Women's Ministry opportunities." 
                      : "There was an error submitting your form. Please try again."}
                  </div>
                )}
              </div>
            </form>

            {/* Alternative CTAs */}
            <div className="mt-8 pt-8 border-t border-pink-100">
              <p className="text-center text-gray-600 mb-4">Other ways to get involved:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/events"
                  className="inline-flex items-center justify-center text-pink-700 hover:text-pink-800 font-semibold transition-colors duration-300"
                >
                  <FiCalendar className="w-4 h-4 mr-2" />
                  Attend an Event
                  <FiArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center text-pink-700 hover:text-pink-800 font-semibold transition-colors duration-300"
                >
                  <FiMail className="w-4 h-4 mr-2" />
                  Contact Leadership
                  <FiArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Frequently Asked <span className="text-church-yellow">Questions</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray">
                Get answers to common questions about joining our Women's Ministry
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-pink-100"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
                >
                  <span className="font-semibold text-church-sage-dark">{faq.question}</span>
                  {openFAQ === faq.id ? (
                    <FiChevronUp className="w-5 h-5 text-pink-600" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-church-gray leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomensMinistry;