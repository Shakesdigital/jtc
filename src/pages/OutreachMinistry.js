import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiHeart, 
  FiGlobe, 
  FiUsers, 
  FiCalendar, 
  FiArrowRight,
  FiBookOpen,
  FiPlay,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiCheckCircle,
  FiTarget,
  FiShield,
  FiTrendingUp,
  FiGift,
  FiInfo
} from 'react-icons/fi';

const OutreachMinistry = () => {
  // State for form and interactions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredArea: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Outreach initiatives data
  const initiatives = [
    {
      id: 1,
      title: "Local Food Drives",
      category: "Community Support",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: "Providing meals and groceries to families in need across Jinja. We partner with local markets and schools to distribute food packages monthly.",
      impact: "500+ families served monthly",
      icon: <FiGift className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      title: "Global Missions",
      category: "International Outreach",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=600&h=400&fit=crop",
      description: "Supporting missionary work and church planting initiatives across East Africa. We send mission teams and provide ongoing support for evangelism.",
      impact: "12 countries reached annually",
      icon: <FiGlobe className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      title: "Community Partnerships",
      category: "Local Development",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      description: "Collaborating with local organizations, schools, and government to address community needs through education, healthcare, and infrastructure projects.",
      impact: "25+ partner organizations",
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Disaster Relief",
      category: "Emergency Response",
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&h=400&fit=crop",
      description: "Rapid response to natural disasters and emergencies, providing immediate relief, shelter, and recovery support to affected communities.",
      impact: "Emergency response in 48hrs",
      icon: <FiShield className="w-6 h-6" />,
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      title: "Youth Development",
      category: "Education & Skills",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Mentorship programs, vocational training, and educational scholarships for youth in Jinja to develop skills and create opportunities.",
      impact: "200+ youth mentored yearly",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "Medical Outreach",
      category: "Healthcare Support",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      description: "Free medical clinics, health education, and medication distribution to underserved communities, partnering with healthcare professionals.",
      impact: "1000+ patients treated annually",
      icon: <FiHeart className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600"
    }
  ];

  // Resources data
  const resources = [
    {
      id: 1,
      title: "Volunteer Training Guide",
      type: "PDF Download",
      description: "Complete guide for new volunteers including safety protocols and service principles",
      icon: <FiBookOpen className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 2,
      title: "Mission Trip FAQ",
      type: "Information Sheet",
      description: "Everything you need to know about joining international mission trips",
      icon: <FiGlobe className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 3,
      title: "Partner Organizations Directory",
      type: "Online Directory",
      description: "Contact information and details of our community partners",
      icon: <FiUsers className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 4,
      title: "Outreach Event Calendar",
      type: "Interactive Calendar",
      description: "Upcoming outreach events, volunteer opportunities, and training sessions",
      icon: <FiCalendar className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 5,
      title: "Impact Stories",
      type: "Video Library",
      description: "Testimonials and stories of lives changed through our outreach programs",
      icon: <FiPlay className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 6,
      title: "Donation Guidelines",
      type: "Information Guide",
      description: "How to donate goods, services, or funds to support our outreach initiatives",
      icon: <FiGift className="w-6 h-6" />,
      link: "#"
    }
  ];

  // FAQs data
  const faqs = [
    {
      id: 1,
      question: "How can I volunteer with the Outreach Ministry?",
      answer: "Getting started is easy! Fill out our volunteer form above, attend a brief orientation session, and choose from various opportunities that match your interests and schedule. We welcome volunteers of all ages and skill levels."
    },
    {
      id: 2,
      question: "Are there family-friendly outreach opportunities?",
      answer: "Absolutely! Many of our initiatives are designed for families to serve together. Food drives, community events, and local partnerships often have roles for children and teens alongside their parents."
    },
    {
      id: 3,
      question: "What training is required for volunteers?",
      answer: "Basic orientation covers our mission, safety protocols, and service principles. Specific initiatives may require additional training, which we provide free of charge. Most training sessions are 1-2 hours and offered multiple times per month."
    },
    {
      id: 4,
      question: "Can I join mission trips if I'm new to the church?",
      answer: "Yes! While we encourage involvement in local outreach first, mission trip participation is open to committed volunteers. Applications typically open 6 months before trips, and we provide pre-trip training and preparation."
    },
    {
      id: 5,
      question: "How are outreach programs funded?",
      answer: "Our outreach is supported through church tithes, special offerings, fundraising events, and partnerships with local businesses and organizations. We're committed to transparency and efficient use of all donated funds."
    },
    {
      id: 6,
      question: "What if I can't volunteer regularly but want to help?",
      answer: "There are many ways to contribute! You can donate goods or funds, participate in one-time events, help with special projects, or simply spread the word about our initiatives in your community."
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
      setFormData({ name: '', email: '', phone: '', preferredArea: '', message: '' });
      
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
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop"
            alt="Outreach Ministry Hero"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-center">
              Outreach Ministry: <br />
              <span className="text-church-yellow">Serving Our Community with Love</span>
            </h1>

            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed opacity-90 text-center">
              Join us to make a difference locally and globally through acts of compassion and service
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
              <button 
                onClick={scrollToForm}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto border-2 sm:border-3"
              >
                Get Involved
              </button>
              <button 
                onClick={() => document.getElementById('initiatives').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 sm:border-3 border-white text-white hover:bg-white hover:text-church-sage font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                See Our Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Impact Cards */}
        <div className="absolute bottom-8 left-8 right-8 hidden lg:flex justify-between max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-white"
          >
            <div className="text-3xl font-bold text-church-yellow">2000+</div>
            <div className="text-sm opacity-90">Lives Impacted</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-white"
          >
            <div className="text-3xl font-bold text-church-yellow">25+</div>
            <div className="text-sm opacity-90">Community Partners</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-white"
          >
            <div className="text-3xl font-bold text-church-yellow">300+</div>
            <div className="text-sm opacity-90">Active Volunteers</div>
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
                  We're <span className="text-church-yellow">called to serve those in need</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our Outreach Ministry embodies Christ's call to love our neighbors through tangible acts of compassion and service. 
                We believe that faith becomes real when it meets the practical needs of our community and reaches beyond our 
                church walls to touch lives locally and globally.
              </p>

              <p className="text-lg text-church-gray leading-relaxed">
                Through strategic partnerships, community programs, and mission initiatives, we work to address poverty, 
                provide hope, and share God's love with those who need it most. Every volunteer, every donation, and every 
                act of service creates ripples of transformation that extend far beyond what we can see.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <FiTarget className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-church-sage-dark">Local Impact</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <FiGlobe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-church-sage-dark">Global Reach</div>
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
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop"
                  alt="Outreach in Action"
                  className="w-full h-96 transform hover:scale-105 transition-transform duration-500"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/20 to-transparent"></div>
              </div>
              
              {/* Floating Testimonial Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-church-yellow max-w-xs">
                <p className="text-sm text-church-gray italic mb-3">
                  "Through this outreach ministry, I've discovered that serving others is one of the greatest joys in life."
                </p>
                <div className="text-xs font-semibold text-church-sage-dark">- Sarah Namubiru, Volunteer</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outreach Initiatives Section */}
      <section id="initiatives" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Ways We <span className="text-church-yellow">Serve</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              From local food drives to global missions, discover how we're making a difference in our community and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-48 transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${initiative.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {initiative.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-church-yellow bg-opacity-90 backdrop-blur-sm rounded-full p-4">
                      {initiative.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-2 group-hover:text-church-sage transition-colors duration-300">
                    {initiative.title}
                  </h3>
                  
                  <p className="text-church-gray mb-4 text-sm leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-church-yellow font-semibold text-sm">
                      {initiative.impact}
                    </div>
                  </div>
                  
                  <button 
                    onClick={scrollToForm}
                    className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Join This Cause
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </button>
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
            <div className="flex justify-center mb-8">
              <div className="bg-church-sage bg-opacity-10 rounded-full p-6">
                <FiHeart className="w-12 h-12 text-church-sage" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Serve with us to <span className="text-church-yellow">change lives!</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-2xl mx-auto">
              Your heart for service can make an eternal difference. Join our outreach team and be part of God's work in our community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-church-sage-light to-church-sage rounded-2xl shadow-2xl p-8 text-white"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <FiCheckCircle className="w-16 h-16 mx-auto mb-6 text-church-yellow" />
                <h3 className="text-2xl font-bold mb-4">Thank you for your heart to serve!</h3>
                <p className="text-lg opacity-90">
                  Our outreach coordinator will contact you within 24 hours to discuss volunteer opportunities that match your interests.
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
                    <label htmlFor="preferredArea" className="block text-sm font-semibold mb-2">
                      Preferred Outreach Area
                    </label>
                    <select
                      id="preferredArea"
                      name="preferredArea"
                      value={formData.preferredArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select an area</option>
                      <option value="Local Food Drives">Local Food Drives</option>
                      <option value="Global Missions">Global Missions</option>
                      <option value="Community Partnerships">Community Partnerships</option>
                      <option value="Disaster Relief">Disaster Relief</option>
                      <option value="Youth Development">Youth Development</option>
                      <option value="Medical Outreach">Medical Outreach</option>
                      <option value="Any Area">Any Area</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message or Special Skills
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your interests, skills, or any questions you have about volunteering..."
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
                        Sign Up to Volunteer
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white border-opacity-20">
                  <button
                    type="button"
                    onClick={() => document.getElementById('initiatives').scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <FiCalendar className="w-5 h-5 mr-2" />
                    View Upcoming Events
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <FiGift className="w-5 h-5 mr-2" />
                    Make a Donation
                  </button>
                </div>
              </form>
            )}
          </motion.div>
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
              Volunteer <span className="text-church-yellow">Resources</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              Tools, guides, and information to help you make the most of your outreach experience
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

      {/* FAQs Section */}
      <section className="py-20 bg-white">
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
              Get answers to common questions about volunteering and serving with our outreach ministry
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

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-church-sage-light to-church-sage p-8 rounded-2xl text-white">
              <FiInfo className="w-12 h-12 mx-auto mb-4 text-church-yellow" />
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="mb-6 opacity-90">Our outreach team is here to help you find the perfect way to serve and make a difference.</p>
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

export default OutreachMinistry;