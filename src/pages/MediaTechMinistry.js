import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMonitor, 
  FiMic, 
  FiVideo, 
  FiRadio,
  FiEdit3,
  FiPlayCircle,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiSettings,
  FiTrendingUp,
  FiGlobe,
  FiPlay
} from 'react-icons/fi';

const MediaTechMinistry = () => {
  // State for form and interactions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredRole: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Tech roles data
  const techRoles = [
    {
      id: 1,
      title: "Audio Engineering",
      icon: FiMic,
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
      description: "Mix live sound for worship services and events. Master the art of creating immersive audio experiences that enhance worship and connect hearts to God.",
      skills: ["Sound Mixing", "Equipment Setup", "Live Production"]
    },
    {
      id: 2,
      title: "Video Production",
      icon: FiVideo,
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      description: "Capture and create compelling visual content for services and outreach. Tell God's story through cinematic excellence and creative visual storytelling.",
      skills: ["Cinematography", "Video Editing", "Post-Production"]
    },
    {
      id: 3,
      title: "Live Streaming",
      icon: FiRadio,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
      description: "Bring our services to online audiences worldwide. Bridge physical and digital spaces to extend our reach and impact across the globe.",
      skills: ["Streaming Technology", "Online Engagement", "Multi-Platform Broadcasting"]
    },
    {
      id: 4,
      title: "Graphic Design",
      icon: FiEdit3,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      description: "Design visual elements that inspire and inform. Create graphics, slides, and digital content that enhance communication and worship experiences.",
      skills: ["Creative Design", "Brand Management", "Digital Media"]
    },
    {
      id: 5,
      title: "Lighting Design",
      icon: FiZap,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
      description: "Craft atmospheric lighting that sets the mood for worship. Use light to create environments that draw people closer to God's presence.",
      skills: ["Lighting Control", "Atmosphere Creation", "Technical Setup"]
    },
    {
      id: 6,
      title: "Tech Support",
      icon: FiSettings,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Keep our technology running smoothly behind the scenes. Ensure reliable operations and troubleshoot technical challenges during services.",
      skills: ["Problem Solving", "System Maintenance", "Technical Support"]
    }
  ];

  // Media showcase data
  const mediaShowcase = [
    {
      id: 1,
      title: "Sunday Service Livestream",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "High-quality multi-camera worship service production"
    },
    {
      id: 2,
      title: "Sermon Series Graphics",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      description: "Creative visual design for teaching series"
    },
    {
      id: 3,
      title: "Easter Special Production",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=400&fit=crop",
      description: "Cinematic holiday service with special effects"
    },
    {
      id: 4,
      title: "Social Media Content",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Engaging posts for digital outreach campaigns"
    }
  ];

  // Resources data
  const resources = [
    {
      id: 1,
      title: "Training Guides",
      icon: FiUsers,
      description: "Comprehensive tutorials for all tech roles",
      link: "#"
    },
    {
      id: 2,
      title: "Software Tutorials",
      icon: FiMonitor,
      description: "Learn the tools we use for production",
      link: "#"
    },
    {
      id: 3,
      title: "Creative Templates",
      icon: FiEdit3,
      description: "Design assets and templates for projects",
      link: "#"
    },
    {
      id: 4,
      title: "Tech Blog",
      icon: FiTrendingUp,
      description: "Latest tips and industry insights",
      link: "#"
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Do I need professional experience to join?",
      answer: "Not at all! We welcome volunteers at all skill levels. Whether you're a beginner eager to learn or an experienced professional, there's a place for you on our team. We provide training and mentorship to help you grow."
    },
    {
      id: 2,
      question: "What equipment and software do you use?",
      answer: "We use industry-standard equipment including digital mixing consoles, professional cameras, streaming encoders, and lighting systems. Our software includes ProPresenter, OBS, Adobe Creative Suite, and various audio/video editing tools."
    },
    {
      id: 3,
      question: "How much time commitment is required?",
      answer: "We're flexible with scheduling! Most volunteers serve once or twice a month during services, plus occasional special events. Training sessions are typically held monthly, and you can participate based on your availability."
    },
    {
      id: 4,
      question: "Can I serve remotely or do I need to be on-site?",
      answer: "Most roles require on-site presence during services, but we also have remote opportunities in graphic design, social media content creation, and post-production editing that can be done from home."
    },
    {
      id: 5,
      question: "What if I'm not sure which role fits me best?",
      answer: "That's perfectly fine! We'll arrange for you to shadow different teams, try various roles, and discover where your interests and skills align best. Our team leads will help guide you to the perfect fit."
    }
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-indigo-900/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop"
            alt="Media Tech Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Media & Tech Ministry
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100 font-light"
            variants={fadeInUp}
          >
            Amplifying God's Message Through Innovation
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Using cutting-edge technology to inspire worship, connect communities, and extend our reach across the globe
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Our Team
              <FiArrowRight className="inline ml-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
              See Our Work
              <FiPlayCircle className="inline ml-2" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Bringing Services to Life with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Cutting-Edge Tech</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Media & Tech Ministry is the heartbeat of modern worship at Jinja Town Church. We harness the power of audio, video, live streaming, and digital innovation to create immersive experiences that connect hearts to God and extend our reach far beyond our physical walls.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From seamless Sunday services to global outreach campaigns, we're passionate about using technology as a tool for transformation, ensuring every voice is heard and every message travels where it needs to go.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-blue-600">
                  <FiGlobe className="mr-2" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center text-purple-600">
                  <FiZap className="mr-2" />
                  <span>Innovation</span>
                </div>
                <div className="flex items-center text-indigo-600">
                  <FiUsers className="mr-2" />
                  <span>Community</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
                  alt="Tech Setup"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Roles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tech Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover where your passion and skills can make an eternal impact. Each role is designed to help you grow while serving God's kingdom.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {techRoles.map((role, index) => (
              <motion.div 
                key={role.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={role.image} 
                    alt={role.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <role.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {role.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group">
                    Join This Role
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact of our ministry through the content we create and the services we enhance
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mediaShowcase.map((item) => (
              <motion.div 
                key={item.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110">
                        <FiPlay className="w-8 h-8" />
                      </button>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              See More Media
              <FiArrowRight className="inline ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Training</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to excel in your tech ministry role
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {resources.map((resource) => (
              <motion.div 
                key={resource.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                variants={fadeInUp}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 mb-4 inline-block">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-blue-600 hover:text-purple-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Access Now
                  <FiArrowRight className="ml-2" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Use Your Tech Skills to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Serve God!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make an impact? Join our amazing team of tech volunteers and help us amplify God's message through innovation.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Role</label>
                    <select
                      name="preferredRole"
                      value={formData.preferredRole}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a role</option>
                      <option value="audio">Audio Engineering</option>
                      <option value="video">Video Production</option>
                      <option value="streaming">Live Streaming</option>
                      <option value="graphics">Graphic Design</option>
                      <option value="lighting">Lighting Design</option>
                      <option value="support">Tech Support</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tell Us About Yourself</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Share your experience, interests, or questions..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Sign Up Now
                        <FiSend className="ml-2" />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300"
                  >
                    Attend Training Session
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your application and will be in touch soon. We're excited to have you join our tech ministry team!
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-purple-600 font-semibold"
                >
                  Submit Another Application
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers to help you get started.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq) => (
              <motion.div 
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                variants={fadeInUp}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFAQ === faq.id ? (
                    <FiChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Amplify Your Impact?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join a community of passionate tech volunteers who are using their skills to advance God's kingdom and reach hearts around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <FiArrowRight className="inline ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                Contact Team Lead
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MediaTechMinistry;