import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHeart,
  FiUsers,
  FiPlay,
  FiStar,
  FiShield,
  FiCheckCircle,
  FiDownload,
  FiBookOpen,
  FiMusic,
  FiVideo,
  FiGift,
  FiSmile,
  FiSend,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiExternalLink,
  FiArrowRight
} from 'react-icons/fi';

const ChildrensMinistry = () => {
  // State for forms and interactions
  const [signUpForm, setSignUpForm] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);


  // What to expect steps
  const experienceSteps = [
    {
      icon: FiCheckCircle,
      title: "Secure Check-In",
      description: "Safe, organized process with matching tags for parents and children. Background-checked volunteers ensure security."
    },
    {
      icon: FiMusic,
      title: "Engaging Worship",
      description: "Age-appropriate songs, interactive Bible stories, and fun activities that help kids connect with God."
    },
    {
      icon: FiStar,
      title: "Fun Learning",
      description: "Games, crafts, and hands-on activities that make Bible truths memorable and applicable to daily life."
    },
    {
      icon: FiShield,
      title: "Safe Environment",
      description: "Trained volunteers, secure facilities, and careful supervision ensure your child's safety and comfort."
    }
  ];

  // Parent resources
  const resources = [
    {
      icon: FiBookOpen,
      title: "Bible Conversation Starters",
      description: "Weekly discussion guides to continue the conversation at home",
      type: "download",
      link: "/resources/bible-conversations.pdf"
    },
    {
      icon: FiMusic,
      title: "Worship Playlists",
      description: "Kid-friendly worship songs for car rides and family time",
      type: "external",
      link: "https://open.spotify.com/playlist/jtc-kids"
    },
    {
      icon: FiVideo,
      title: "Parent Blog",
      description: "Tips, insights, and encouragement for raising kids in faith",
      type: "internal",
      link: "/blog/parenting"
    },
    {
      icon: FiGift,
      title: "Craft Ideas Gallery",
      description: "DIY Bible crafts and activities for family devotions",
      type: "internal",
      link: "/crafts"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What if my child has special needs?",
      answer: "We welcome all children! Our team is trained to accommodate various needs and we work with parents to ensure every child feels loved and included. Please let us know how we can best serve your family."
    },
    {
      question: "Do I need to register in advance?",
      answer: "While registration helps us prepare, walk-ins are always welcome! Pre-registration just ensures we have materials ready and can expedite check-in on Sunday morning."
    },
    {
      question: "What should my child bring?",
      answer: "Just bring your child ready to have fun and learn! We provide all materials, snacks, and activities. You may want to bring a comfort item for very young children."
    },
    {
      question: "How can I volunteer?",
      answer: "We'd love your help! Volunteers undergo a background check and brief training. Opportunities include teaching, assisting with activities, check-in help, and special event support."
    },
    {
      question: "What about child dedication?",
      answer: "Child dedication is a beautiful way to commit to raising your child in faith. We offer dedication services quarterly - contact us to learn more about this special milestone."
    },
    {
      question: "Is there a cost?",
      answer: "Children's Ministry is completely free! We believe every child deserves to hear about God's love regardless of family financial situation."
    }
  ];

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form
    setSignUpForm({
      parentName: '',
      childName: '',
      childAge: '',
      email: '',
      phone: '',
      message: ''
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setSignUpForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/children-ministry/hero-image.jpg"
            alt="Joyful children singing and praising God in Sunday school"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <FiHeart className="w-24 h-24 mx-auto mb-3 sm:mb-4 text-church-yellow" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Children's Ministry: <span className="text-white drop-shadow-lg">Growing in Faith and Fun!</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Safe, exciting spaces for kids ages 0-12 to discover Jesus through play, worship, and community
            </p>

            <div className="pt-6 sm:pt-8 gap-3 sm:gap-4 flex flex-col sm:flex-row justify-center">
              <button 
                onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center w-full sm:w-auto border-2 sm:border-3"
              >
                <FiArrowRight className="mr-2" />
                Join Us This Sunday
              </button>
              <button 
                onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 sm:border-3 border-white text-white hover:bg-white hover:text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
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
                  Building <span className="text-church-yellow">Little Hearts</span> for Big Faith
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our Children's Ministry is where young hearts discover the amazing love of Jesus through engaging Bible stories, 
                joyful worship, creative activities, and meaningful friendships. We help your child build a lifelong relationship 
                with God in a safe, fun environment designed just for them.
              </p>
              
              <p className="text-lg text-church-gray leading-relaxed">
                From nursery care to pre-teen adventures, every program is crafted to meet children where they are and 
                help them grow in faith, character, and community. Join us in raising the next generation of world-changers!
              </p>
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
                  src="/images/children-ministry/overview-image.jpg"
                  alt="Children participating in Bible stories and craft activities"
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/20 to-transparent"></div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Programs for <span className="text-church-yellow">Every Age</span>
              </h2>
              <p className="text-xl text-church-gray max-w-3xl mx-auto">
                Age-appropriate adventures in faith designed to meet your child exactly where they are
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-church-sage-dark mb-8">
                Age-Appropriate Faith Adventures
              </h3>

              <div className="prose prose-lg text-church-gray leading-relaxed space-y-4">
                <p>
                  Our Children's Ministry offers carefully designed programs for every stage of your child's development.
                  <strong className="text-church-sage-dark"> Little Lambs (0-2 years)</strong> provides safe, nurturing care with sensory play, gentle music, and loving volunteers where parents are welcome to stay.
                  <strong className="text-church-sage-dark"> Tiny Tots (2-3 years)</strong> features interactive Bible stories, movement activities, and creative play to explore God's love in age-appropriate ways.
                </p>

                <p>
                  As children grow, <strong className="text-church-sage-dark">Preschool Power (3-5 years)</strong> brings engaging Bible adventures, worship songs, games, and hands-on activities that bring scripture to life.
                  <strong className="text-church-sage-dark"> Elementary Explorers (6-8 years)</strong> dive deeper with Bible discoveries, team challenges, and mission projects that help kids apply God's truth in their lives.
                </p>

                <p>
                  Finally, our <strong className="text-church-sage-dark">Big Kids Brigade (9-12 years)</strong> offers advanced Bible study, servant leadership opportunities, and preparation for youth ministry with mentoring.
                  Each program includes age-appropriate worship, creative activities, character building, and meaningful friendships that help children develop a lifelong relationship with Jesus Christ.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-church-sage text-white px-4 py-2 rounded-full text-sm font-medium">0-2 Years</span>
                <span className="bg-church-yellow text-church-sage-dark px-4 py-2 rounded-full text-sm font-medium">2-3 Years</span>
                <span className="bg-church-sage-dark text-white px-4 py-2 rounded-full text-sm font-medium">3-5 Years</span>
                <span className="bg-church-gray text-white px-4 py-2 rounded-full text-sm font-medium">6-8 Years</span>
                <span className="bg-church-cream text-church-sage-dark border border-church-sage px-4 py-2 rounded-full text-sm font-medium">9-12 Years</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/children-ministry/age-groups-overview.jpg"
                  alt="Children of various ages engaged in Bible stories, worship, crafts, and fellowship activities"
                  className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-bold text-church-sage-dark text-lg mb-2">Every Age, Every Stage</h4>
                    <p className="text-church-gray text-sm">Nurturing faith from infancy through pre-teen years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                What to <span className="text-church-yellow">Expect</span>
              </h2>
              <p className="text-xl text-church-gray max-w-3xl mx-auto">
                Your child's Sunday morning adventure, step by step
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {experienceSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-church-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-church-sage-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-church-gray leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative bg-gradient-to-r from-church-sage to-church-sage-light h-64 flex items-center justify-center">
                <FiPlay className="w-20 h-20 text-white opacity-80 hover:opacity-100 cursor-pointer transform hover:scale-110 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">Welcome to Children's Ministry</h4>
                  <p className="text-sm opacity-90">See what a typical Sunday looks like</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parent Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Parent <span className="text-church-yellow">Resources</span>
              </h2>
              <p className="text-xl text-church-gray max-w-3xl mx-auto">
                Tools and guides to continue the faith journey at home
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-church-sage text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-church-sage-dark transition-colors duration-300">
                  <resource.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-church-sage-dark mb-2 group-hover:text-church-sage transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-church-gray mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center text-church-sage font-semibold text-sm">
                  {resource.type === 'download' && <FiDownload className="w-4 h-4 mr-2" />}
                  {resource.type === 'external' && <FiExternalLink className="w-4 h-4 mr-2" />}
                  {resource.type === 'internal' && <FiArrowRight className="w-4 h-4 mr-2" />}
                  Access Resource
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gradient-to-br from-church-sage-light to-church-sage">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FiSmile className="w-16 h-16 mx-auto mb-8 text-church-yellow" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Adventure—Volunteer or Sign Up Your Child Today!
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Ready to be part of something amazing? Let's connect and get your family involved!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sign Up Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Register Your Child
              </h3>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <FiCheckCircle className="w-16 h-16 mx-auto mb-4 text-church-sage" />
                  <h4 className="text-xl font-bold text-church-sage-dark mb-2">Registration Received!</h4>
                  <p className="text-church-gray">We'll contact you soon with next steps. Can't wait to meet your family!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Parent Name"
                      value={signUpForm.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Child's Name"
                      value={signUpForm.childName}
                      onChange={(e) => handleInputChange('childName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Child's Age"
                      value={signUpForm.childAge}
                      onChange={(e) => handleInputChange('childAge', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={signUpForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                      required
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={signUpForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none"
                    required
                  />
                  
                  <textarea
                    placeholder="Any questions or special needs we should know about?"
                    value={signUpForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-church-sage outline-none resize-none"
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <FiSend className="w-5 h-5 mr-2" />
                    Sign Up Now
                  </button>
                </form>
              )}
            </motion.div>

            {/* Volunteer Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Volunteer Opportunities
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-church-yellow/10 rounded-lg hover:bg-church-yellow/20 transition-colors duration-200 cursor-pointer">
                  <FiUsers className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Teaching Team</h4>
                    <p className="text-sm text-church-gray">Lead activities and share God's love</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-sage/10 rounded-lg hover:bg-church-sage/20 transition-colors duration-200 cursor-pointer">
                  <FiShield className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Safety Team</h4>
                    <p className="text-sm text-church-gray">Help with check-in and security</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-gray/10 rounded-lg hover:bg-church-gray/20 transition-colors duration-200 cursor-pointer">
                  <FiStar className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Special Events</h4>
                    <p className="text-sm text-church-gray">Seasonal programs and celebrations</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-cream/30 rounded-lg hover:bg-church-cream/50 transition-colors duration-200 cursor-pointer">
                  <FiGift className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Creative Team</h4>
                    <p className="text-sm text-church-gray">Crafts, decorations, and setup</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-church-sage-dark mb-3">Special Milestones</h4>
                <div className="space-y-2">
                  <Link to="/dedication" className="block text-church-sage hover:text-church-sage-dark font-medium text-sm flex items-center">
                    <FiHeart className="w-4 h-4 mr-2" />
                    Child Dedication Services
                  </Link>
                  <Link to="/contact" className="block text-church-sage hover:text-church-sage-dark font-medium text-sm flex items-center">
                    <FiStar className="w-4 h-4 mr-2" />
                    Report a Salvation Decision
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/volunteer" 
                className="mt-6 w-full bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <FiArrowRight className="w-5 h-5 mr-2" />
                Apply to Volunteer
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Frequently Asked <span className="text-church-yellow">Questions</span>
              </h2>
              <p className="text-xl text-church-gray">
                Quick answers to help you feel confident about joining us
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-church-sage-dark pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <FiChevronUp className="w-5 h-5 text-church-sage flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-church-sage flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-church-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-church-gray mb-4">Still have questions?</p>
            <Link 
              to="/contact" 
              className="bg-church-sage hover:bg-church-sage-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              <FiMail className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildrensMinistry;