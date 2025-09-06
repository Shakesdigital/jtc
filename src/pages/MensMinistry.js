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
  FiShield,
  FiTool,
  FiNavigation,
  FiGlobe,
  FiStar,
  FiCheck
} from 'react-icons/fi';

const MensMinistry = () => {
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
      title: "Men's Bible Study",
      icon: FiBookOpen,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Dive deep into God's Word with fellow brothers in Christ. Our weekly Bible studies focus on practical application of biblical principles for modern men facing real-world challenges.",
      features: ["Weekly 90-minute sessions", "Practical Bible application", "Small group discussions", "Prayer support"]
    },
    {
      id: 2,
      title: "Accountability Groups",
      icon: FiShield,
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&h=400&fit=crop",
      description: "Build authentic relationships with men who will challenge you to grow spiritually and personally. Safe spaces for honest conversations about faith, family, and life's struggles.",
      features: ["Confidential small groups", "Weekly check-ins", "Goal setting & tracking", "Spiritual mentorship"]
    },
    {
      id: 3,
      title: "Service Projects",
      icon: FiTool,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: "Put your faith into action through hands-on community service. From home repairs for widows to youth mentoring, discover the joy of serving others together.",
      features: ["Monthly service events", "Community outreach", "Skill-based volunteering", "Team building"]
    },
    {
      id: 4,
      title: "Retreats & Events",
      icon: FiNavigation,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      description: "Recharge your spiritual batteries through organized retreats, conferences, and fellowship events designed to strengthen your relationship with God and other men.",
      features: ["Annual weekend retreats", "Guest speakers", "Outdoor adventures", "Fellowship dinners"]
    }
  ];

  // How it works steps
  const steps = [
    {
      id: 1,
      title: "Find a Group",
      description: "Browse our various men's programs and find one that fits your schedule and interests.",
      icon: FiTarget
    },
    {
      id: 2,
      title: "Attend a Meeting",
      description: "Show up and experience the brotherhood. No pressure - just come as you are.",
      icon: FiUsers
    },
    {
      id: 3,
      title: "Build Relationships",
      description: "Connect with like-minded men who share your faith and values.",
      icon: FiHeart
    },
    {
      id: 4,
      title: "Lead Others",
      description: "Grow into leadership roles and help other men discover their purpose in Christ.",
      icon: FiStar
    }
  ];

  // Resources
  const resources = [
    {
      id: 1,
      title: "Bible Study Guides",
      description: "Download our comprehensive study materials for personal growth",
      link: "#",
      icon: FiBookOpen
    },
    {
      id: 2,
      title: "Leadership Devotionals",
      description: "Daily readings designed to develop godly leadership skills",
      link: "#",
      icon: FiStar
    },
    {
      id: 3,
      title: "Men's Ministry Podcast",
      description: "Listen to inspiring messages and practical life advice",
      link: "#",
      icon: FiGlobe
    },
    {
      id: 4,
      title: "Growth Blog",
      description: "Read articles on faith, family, work, and personal development",
      link: "#",
      icon: FiArrowRight
    }
  ];

  // FAQs
  const faqs = [
    {
      id: 1,
      question: "Do I need to be a church member to join?",
      answer: "Not at all! Our Men's Ministry is open to all men, whether you're a longtime member, new to our church, or just exploring faith. Come as you are."
    },
    {
      id: 2,
      question: "What are the meeting times like?",
      answer: "We offer flexible options to fit busy schedules. Most Bible studies meet weekly for 90 minutes, accountability groups meet bi-weekly, and service projects are typically on Saturdays. Evening and weekend options are available."
    },
    {
      id: 3,
      question: "What ages participate in Men's Ministry?",
      answer: "We welcome men of all ages, from college students to seniors. Many of our programs have mixed age groups to encourage mentorship and diverse perspectives."
    },
    {
      id: 4,
      question: "Is there a cost to participate?",
      answer: "Most programs are free. Some retreats or special events may have a small fee to cover meals and materials, but financial assistance is always available if needed."
    },
    {
      id: 5,
      question: "How do I get started?",
      answer: "Simply fill out the form below or contact our Men's Ministry leader. We'll help you find the right group and answer any questions you might have."
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(110, 152, 150, 0.8), rgba(90, 125, 123, 0.8)), url('https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=1920&h=1080&fit=crop')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <FiShield className="w-20 h-20 mx-auto mb-8 text-church-yellow" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Men's Ministry: <span className="text-church-yellow">Building Godly Men</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Grow in faith, lead with courage, serve with purpose
            </p>

            <div className="pt-8">
              <Link 
                to="#get-involved"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
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
                  Empowering Men to <span className="text-church-yellow">Live Out Their Faith</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                We challenge men to live out their faith boldly in every aspect of life. Through authentic fellowship, 
                biblical study, and service opportunities, we equip men to become the leaders God designed them to be.
              </p>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our ministry creates a brotherhood where men can be vulnerable, grow together, and hold each other 
                accountable as we pursue Christ-like character and purpose.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-church-yellow">
                  <div className="text-2xl font-bold text-church-sage-dark">50+</div>
                  <div className="text-sm text-church-gray">Active Members</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-church-yellow">
                  <div className="text-2xl font-bold text-church-sage-dark">4</div>
                  <div className="text-sm text-church-gray">Core Programs</div>
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
                  src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&h=400&fit=crop"
                  alt="Men in Fellowship"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/30 to-transparent"></div>
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
                Discover the program that fits your journey and helps you grow in faith and brotherhood
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
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
                          <div key={idx} className="text-sm text-church-gray flex items-center">
                            <FiCheck className="w-4 h-4 text-church-yellow mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-slate-700 hover:bg-slate-800 text-white font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300">
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
                Your journey to brotherhood and spiritual growth is just four simple steps away
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
                  <div className="bg-church-yellow text-church-sage-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="absolute top-8 left-16 w-full h-0.5 bg-gray-300 hidden lg:block" style={{ display: index === steps.length - 1 ? 'none' : 'block' }}></div>
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
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-church-sage-dark mb-4">Hear from Our Men</h3>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-church-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-church-sage-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-church-gray">Video testimonial coming soon</p>
                </div>
              </div>
              <p className="text-church-gray italic">"Being part of Men's Ministry has transformed my relationship with God and my family. The brotherhood here is real." - James M.</p>
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
                Growth <span className="text-church-yellow">Resources</span>
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
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <IconComponent className="w-8 h-8 text-church-yellow mb-4" />
                  <h3 className="text-lg font-bold text-church-sage-dark mb-2">{resource.title}</h3>
                  <p className="text-church-gray text-sm mb-4 leading-relaxed">{resource.description}</p>
                  <Link 
                    to={resource.link}
                    className="text-church-yellow hover:text-church-yellow-dark font-semibold text-sm inline-flex items-center"
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
              Step Up and Join the Brotherhood!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take the next step in your faith journey and connect with men who will challenge you to grow
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-yellow focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-yellow focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-yellow focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-yellow focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a program</option>
                    <option value="Men's Bible Study">Men's Bible Study</option>
                    <option value="Accountability Groups">Accountability Groups</option>
                    <option value="Service Projects">Service Projects</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-yellow focus:border-transparent transition-all duration-300"
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
                      ? "Thank you! We'll contact you soon about Men's Ministry opportunities." 
                      : "There was an error submitting your form. Please try again."}
                  </div>
                )}
              </div>
            </form>

            {/* Alternative CTAs */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-church-gray mb-4">Other ways to get involved:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/events"
                  className="inline-flex items-center justify-center text-slate-700 hover:text-church-sage-dark font-semibold transition-colors duration-300"
                >
                  <FiCalendar className="w-4 h-4 mr-2" />
                  Attend an Event
                  <FiArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center text-slate-700 hover:text-church-sage-dark font-semibold transition-colors duration-300"
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
      <section className="py-20 bg-gray-50">
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
                Get answers to common questions about joining our Men's Ministry
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
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-church-yellow transition-colors duration-300"
                >
                  <span className="font-semibold text-church-sage-dark">{faq.question}</span>
                  {openFAQ === faq.id ? (
                    <FiChevronUp className="w-5 h-5 text-church-yellow" />
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

export default MensMinistry;