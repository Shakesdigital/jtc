import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiHeart, 
  FiMapPin, 
  FiClock, 
  FiPhone,
  FiUser,
  FiMessageCircle,
  FiArrowRight,
  FiSearch,
  FiBookOpen,
  FiDownload,
  FiPlay,
  FiChevronDown,
  FiChevronUp,
  FiSend,
  FiCheckCircle,
  FiPlusCircle
} from 'react-icons/fi';

const FamilyGroups = () => {
  // State for form and interactions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredGroup: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Family Groups data for Arise Africa Jinja Town Church
  const groupTypes = [
    {
      id: 1,
      name: "Njeru Family Group",
      location: "Njeru, Jinja",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      description: "Building community through prayer and discussion. A supportive environment for spiritual growth and fellowship.",
      meetingTime: "Wednesdays, 6:00 PM - 9:00 PM",
      focus: "Building community through prayer and discussion",
      leaders: "Freda and Aron"
    },
    {
      id: 2,
      name: "Bukaya Family Group",
      location: "Bukaya, Jinja",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      description: "Family-oriented fellowship with emphasis on practical faith application. Perfect for families seeking to live out their faith daily.",
      meetingTime: "Wednesdays, 6:00 PM - 9:00 PM",
      focus: "Family-oriented fellowship with practical faith application",
      leaders: "Kate and Elisha"
    },
    {
      id: 3,
      name: "Jinja Town Group (Women's Focus)",
      location: "Jinja Town Center",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=600&h=400&fit=crop",
      description: "Empowering women through shared stories, prayer, and Bible study. A safe space for women to grow in faith and support each other.",
      meetingTime: "Wednesdays, 6:00 PM - 9:00 PM",
      focus: "Empowering women through shared stories, prayer, and Bible study",
      leaders: "Esther and Ruth"
    },
    {
      id: 4,
      name: "Bugembe Group",
      location: "Bugembe, Jinja",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Focused on discipleship and outreach strategies. For those passionate about evangelism and making disciples.",
      meetingTime: "Fridays, 6:00 PM - 9:00 PM",
      focus: "Discipleship and outreach strategies",
      leaders: "Pr. Ken and Elder Joshua"
    },
    {
      id: 5,
      name: "Walukuba Group",
      location: "Walukuba, Jinja",
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&h=400&fit=crop",
      description: "Support for daily life challenges with scriptural encouragement. A caring community focused on practical Christian living.",
      meetingTime: "Thursdays, 6:00 PM - 9:00 PM",
      focus: "Support for daily life challenges with scriptural encouragement",
      leaders: "Charity and Sarah"
    },
    {
      id: 6,
      name: "Kimaka Group",
      location: "Kimaka, Jinja",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      description: "Youth and young adult engagement. A vibrant group focused on reaching the next generation with God's love and truth.",
      meetingTime: "Wednesdays, 6:00 PM - 9:00 PM",
      focus: "Youth and young adult engagement",
      leaders: "Taylor"
    }
  ];

  // How it works steps
  const steps = [
    {
      id: 1,
      title: "Browse Groups",
      description: "Explore our family groups by location and focus area to find the perfect fit for your family.",
      icon: <FiSearch className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Connect with a Leader",
      description: "Reach out to group leaders who will welcome you and answer any questions about group activities.",
      icon: <FiPhone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Join a Meeting",
      description: "Attend your first group meeting and experience the warmth of Christian fellowship in a family setting.",
      icon: <FiUsers className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Grow Together",
      description: "Build lasting relationships, deepen your faith, and serve the community alongside your new family.",
      icon: <FiHeart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    }
  ];

  // Resources data
  const resources = [
    {
      id: 1,
      title: "Family Devotional Guide",
      type: "PDF Download",
      description: "Weekly devotionals designed for family worship and discussion",
      icon: <FiBookOpen className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 2,
      title: "Group Leader Handbook",
      type: "PDF Download",
      description: "Complete guide for leading effective family group meetings",
      icon: <FiDownload className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 3,
      title: "Prayer Request Portal",
      type: "Online Tool",
      description: "Submit and share prayer requests with your family group",
      icon: <FiMessageCircle className="w-6 h-6" />,
      link: "#"
    },
    {
      id: 4,
      title: "Family Ministry Videos",
      type: "Video Library",
      description: "Inspirational videos for family growth and spiritual development",
      icon: <FiPlay className="w-6 h-6" />,
      link: "#"
    }
  ];

  // FAQs data
  const faqs = [
    {
      id: 1,
      question: "How often do family groups meet?",
      answer: "Most of our family groups meet weekly, with some meeting bi-weekly. Meeting schedules vary by group to accommodate different family needs and work schedules. You can find specific meeting times for each group in the group descriptions above."
    },
    {
      id: 2,
      question: "Can I bring my children to family group meetings?",
      answer: "Absolutely! Our family groups are designed to welcome families with children of all ages. Many groups have specific activities for children and provide childcare during adult discussions. We believe in building faith together as families."
    },
    {
      id: 3,
      question: "What if I'm new to Jinja or don't know anyone?",
      answer: "Don't worry! Our family groups are perfect for newcomers. Group leaders and members are committed to welcoming new families and helping you feel at home. You'll quickly build meaningful friendships and feel connected to our church community."
    },
    {
      id: 4,
      question: "Do I need to be a church member to join a family group?",
      answer: "No, you don't need to be a church member to join a family group. We welcome anyone interested in growing in faith and building community connections. Family groups are actually a great way to get to know our church family better."
    },
    {
      id: 5,
      question: "What activities do family groups typically do?",
      answer: "Family groups engage in Bible study, prayer, fellowship meals, community service projects, family outings, and seasonal celebrations. Each group has its own personality and may focus on different activities based on the interests and needs of its members."
    },
    {
      id: 6,
      question: "How can I start a new family group in my area?",
      answer: "We're always excited to help start new family groups! Contact our Family Ministry coordinator through the form below or speak with one of our pastors. We'll provide training, resources, and support to help you launch a successful family group in your neighborhood."
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
      setFormData({ name: '', email: '', phone: '', preferredGroup: '', message: '' });
      
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
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1080&fit=crop"
            alt="Family Groups Hero"
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
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="bg-church-yellow bg-opacity-20 backdrop-blur-sm rounded-full p-6">
                <FiUsers className="w-16 h-16 text-church-yellow" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Family Groups Ministry: <br />
              <span className="text-church-yellow">Building Stronger Connections</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Find a group to grow, share, and serve together in the heart of Jinja's communities
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
              <button 
                onClick={scrollToForm}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto border-2 sm:border-3"
              >
                Find a Group
              </button>
              <button 
                onClick={() => document.getElementById('groups').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 sm:border-3 border-white text-white hover:bg-white hover:text-church-sage font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                Browse Groups
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
                  We're a <span className="text-church-yellow">family where everyone belongs</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our Family Groups Ministry is the heartbeat of authentic relationships at Jinja Town Church. 
                We believe that faith grows best in the context of genuine community, where families can share 
                life's joys and challenges together.
              </p>

              <p className="text-lg text-church-gray leading-relaxed">
                Through small group gatherings across Jinja's neighborhoods, we foster spiritual growth, 
                provide mutual support, and create spaces where every family member—from children to 
                grandparents—can experience God's love in practical, meaningful ways.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-church-sage-light bg-opacity-10 rounded-lg">
                  <FiHeart className="w-8 h-8 text-church-sage mx-auto mb-2" />
                  <div className="font-semibold text-church-sage-dark">Authentic Community</div>
                </div>
                <div className="text-center p-4 bg-church-yellow bg-opacity-10 rounded-lg">
                  <FiUsers className="w-8 h-8 text-church-yellow mx-auto mb-2" />
                  <div className="font-semibold text-church-sage-dark">Spiritual Growth</div>
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
                  alt="Families in Fellowship"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/20 to-transparent"></div>
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-church-yellow max-w-xs">
                <p className="text-sm text-church-gray italic mb-3">
                  "Our family group has become our second family. The support and love we've found here has transformed our faith journey."
                </p>
                <div className="text-xs font-semibold text-church-sage-dark">- The Mukasa Family</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group Types Section */}
      <section id="groups" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Find Your <span className="text-church-yellow">Perfect Fit</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              Discover family groups across Jinja's neighborhoods, each with its unique focus and community spirit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupTypes.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-church-sage text-white px-3 py-1 rounded-full text-sm font-bold">
                    {group.focus}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-2 group-hover:text-church-sage transition-colors duration-300">
                    {group.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-church-gray">
                      <FiMapPin className="w-4 h-4 mr-2 text-church-sage" />
                      {group.location}
                    </div>
                    <div className="flex items-center text-sm text-church-gray">
                      <FiClock className="w-4 h-4 mr-2 text-church-sage" />
                      {group.meetingTime}
                    </div>
                    <div className="flex items-center text-sm text-church-gray">
                      <FiUser className="w-4 h-4 mr-2 text-church-sage" />
                      {group.leader}
                    </div>
                  </div>
                  
                  <p className="text-church-gray mb-6 text-sm leading-relaxed">
                    {group.description}
                  </p>
                  
                  <button 
                    onClick={scrollToForm}
                    className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Explore This Group
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </button>
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
              How It <span className="text-church-yellow">Works</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              Join our family groups through these simple steps and start building meaningful connections today
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
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 bg-church-sage text-white rounded-full flex items-center justify-center group-hover:bg-church-sage-dark transition-colors duration-300 mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-church-yellow text-church-sage-dark rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-church-sage-dark mb-4">
                  {step.title}
                </h3>
                
                <p className="text-church-gray mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <FiArrowRight className="w-6 h-6 text-church-sage mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-church-sage-light to-church-sage p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">We offer both in-person and online options to fit your family's needs and schedule.</p>
              <button 
                onClick={scrollToForm}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold px-8 py-3 rounded-full transition-all duration-300"
              >
                Join a Family Group Today
              </button>
            </div>
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
              Group <span className="text-church-yellow">Resources</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-3xl mx-auto">
              Helpful tools and materials to enhance your family group experience and spiritual growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="flex justify-center mb-8">
              <div className="bg-church-sage bg-opacity-10 rounded-full p-6">
                <FiHeart className="w-12 h-12 text-church-sage" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
              Join a Family Group and <span className="text-church-yellow">Grow Together!</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-church-gray max-w-2xl mx-auto">
              Take the first step towards meaningful community connections. Fill out the form below and we'll connect you with the perfect family group.
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
                <h3 className="text-2xl font-bold mb-4">Thank you for your interest!</h3>
                <p className="text-lg opacity-90">
                  We've received your request and one of our family group leaders will contact you within 24 hours.
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
                    <label htmlFor="preferredGroup" className="block text-sm font-semibold mb-2">
                      Preferred Group Location
                    </label>
                    <select
                      id="preferredGroup"
                      name="preferredGroup"
                      value={formData.preferredGroup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a location</option>
                      {groupTypes.map(group => (
                        <option key={group.id} value={group.name}>{group.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message or Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg text-church-sage-dark bg-white focus:ring-2 focus:ring-church-yellow focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your family, interests, or any questions you have..."
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
                        Sign Up Now
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white border-opacity-20">
                  <button
                    type="button"
                    className="flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <FiPlusCircle className="w-5 h-5 mr-2" />
                    Start a New Group
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <FiPhone className="w-5 h-5 mr-2" />
                    Contact a Leader
                  </button>
                </div>
              </form>
            )}
          </motion.div>
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
              Get answers to common questions about our family groups ministry
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
                className="bg-white rounded-xl shadow-md overflow-hidden"
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
        </div>
      </section>
    </div>
  );
};

export default FamilyGroups;