import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiMusic,
  FiMic,
  FiHeadphones,
  FiPlay,
  FiPause,
  FiVolumeX,
  FiVolume2,
  FiDownload,
  FiExternalLink,
  FiUsers,
  FiHeart,
  FiStar,
  FiSend,
  FiChevronDown,
  FiChevronUp,
  FiMail,
  FiPhone,
  FiCalendar,
  FiYoutube,
  FiInstagram
} from 'react-icons/fi';

const WorshipMinistry = () => {
  // State for forms and media interactions
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Worship Experience data
  const worshipExperiences = [
    {
      id: 1,
      title: "Live Worship",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      description: "Experience powerful, Spirit-led worship every Sunday as we lift voices and hearts together in praise.",
      cta: "Watch Live",
      link: "/live-worship"
    },
    {
      id: 2,
      title: "Original Songwriting",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
      description: "Creating original worship songs inspired by Scripture and life experiences in our community.",
      cta: "Hear Our Songs",
      link: "/original-music"
    },
    {
      id: 3,
      title: "Instrumental Excellence",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
      description: "Skilled musicians crafting beautiful arrangements that enhance worship and glorify God.",
      cta: "Meet the Band",
      link: "/instrumental-team"
    }
  ];

  // Team roles and opportunities
  const teamRoles = [
    {
      id: 1,
      title: "Vocal Team",
      icon: FiMic,
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
      description: "Lead congregation in passionate worship with harmony, heart, and authentic praise.",
      responsibilities: ["Lead vocals", "Backing vocals", "Harmony arrangements"],
      requirements: "Heart for worship, vocal ability, team spirit",
      color: "bg-church-sage-light/20 border-church-sage"
    },
    {
      id: 2,
      title: "Instrumental Team",
      icon: FiMusic,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
      description: "Provide musical foundation with guitars, keys, drums, and other instruments.",
      responsibilities: ["Live performance", "Rehearsal prep", "Song arrangement"],
      requirements: "Musical proficiency, reliability, collaborative spirit",
      color: "bg-church-yellow/20 border-church-yellow"
    },
    {
      id: 3,
      title: "Tech & Sound",
      icon: FiHeadphones,
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      description: "Ensure excellent audio quality and seamless technical production.",
      responsibilities: ["Sound mixing", "Equipment setup", "Live streaming"],
      requirements: "Technical aptitude, attention to detail, servant heart",
      color: "bg-church-sage/20 border-church-sage-dark"
    },
    {
      id: 4,
      title: "Creative Team",
      icon: FiStar,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Develop worship themes, visuals, and creative elements for services.",
      responsibilities: ["Visual design", "Theme development", "Creative planning"],
      requirements: "Creative vision, collaboration skills, passion for worship",
      color: "bg-church-cream/50 border-church-yellow-dark"
    }
  ];

  // Resources data
  const resources = [
    {
      id: 1,
      title: "Worship Playlists",
      icon: FiPlay,
      description: "Curated playlists of our favorite worship songs and originals",
      type: "playlist",
      links: [
        { platform: "Spotify", url: "https://open.spotify.com/playlist/jtc-worship" },
        { platform: "YouTube", url: "https://youtube.com/playlist?jtc-worship" }
      ]
    },
    {
      id: 2,
      title: "Chord Charts & Lyrics",
      icon: FiDownload,
      description: "Download chord charts and lyrics for personal worship and practice",
      type: "download",
      files: ["Sunday Setlist.pdf", "Original Songs.pdf", "Chord Progressions.pdf"]
    },
    {
      id: 3,
      title: "Worship Devotionals",
      icon: FiHeart,
      description: "Daily devotionals focused on worship, praise, and encountering God",
      type: "blog",
      link: "/devotionals/worship"
    },
    {
      id: 4,
      title: "Practice Tracks",
      icon: FiMusic,
      description: "Instrumental tracks and click tracks for team rehearsals",
      type: "audio",
      link: "/practice-tracks"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Do I need musical experience to join?",
      answer: "While musical ability is helpful, we welcome all skill levels! We provide mentoring, training, and opportunities to grow. What matters most is a heart for worship and willingness to serve."
    },
    {
      question: "How do I audition for the worship team?",
      answer: "Simply fill out our volunteer form and attend one of our monthly audition sessions. We'll have you play/sing a song of your choice and chat about your heart for worship ministry."
    },
    {
      question: "What's the time commitment?",
      answer: "Team members typically serve 2-3 Sundays per month, attend weekly rehearsals on Wednesday evenings (7-9 PM), and participate in special services and events."
    },
    {
      question: "Can I serve if I'm new to the church?",
      answer: "We love welcoming new members! We recommend attending services for a few weeks to get familiar with our worship style, then joining our team is a great way to get connected."
    },
    {
      question: "Do you provide instruments and equipment?",
      answer: "Yes! We provide all major instruments (drums, keyboards, guitars, mics) and sound equipment. You're welcome to bring your own instruments if you prefer."
    },
    {
      question: "What if I can only help occasionally?",
      answer: "That's perfectly fine! We have opportunities for regular team members and occasional volunteers. Every contribution is valuable in creating meaningful worship experiences."
    }
  ];

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      role: '',
      message: ''
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setVolunteerForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Media controls
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(110, 152, 150, 0.8), rgba(254, 199, 111, 0.6)), url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop')`
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <FiMusic className="w-24 h-24 mx-auto mb-8 text-church-yellow" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Worship Ministry: <span className="text-church-yellow drop-shadow-lg">Glorifying God Through Song</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Join us in passionate, Spirit-led worship that creates space for authentic encounters with God
            </p>

            <div className="pt-8 space-x-4">
              <button 
                onClick={() => document.getElementById('worship-experience').scrollIntoView({ behavior: 'smooth' })}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center"
              >
                <FiPlay className="mr-2" />
                Experience Worship
              </button>
              <button 
                onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full transition-all duration-300"
              >
                Join Us Sunday
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
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
                  Creating Space for <span className="text-church-yellow">Divine Encounters</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Worship Ministry exists to lead the congregation into God's presence through music, prayer, and praise. 
                We believe worship is more than songs—it's about creating authentic moments where hearts connect with our Creator.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Through Spirit-led worship, contemporary music, and heartfelt praise, we invite you to encounter God's love, 
                mercy, and glory in ways that transform lives and inspire authentic faith.
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
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop"
                  alt="Worship team leading congregation"
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-church-yellow">
                  <div className="text-center">
                    <div className="text-xl font-bold text-church-sage-dark">20+</div>
                    <div className="text-xs text-gray-600">Team Members</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-church-sage">
                  <div className="text-center">
                    <div className="text-xl font-bold text-church-sage-dark">3</div>
                    <div className="text-xs text-gray-600">Services Weekly</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worship Experience Section */}
      <section id="worship-experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                The <span className="text-church-yellow">Worship Experience</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover the heart of our worship ministry through these key expressions
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {worshipExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-church-sage-dark px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-church-sage-dark mb-3">
                    {experience.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <Link 
                    to={experience.link}
                    className="inline-flex items-center bg-church-sage hover:bg-church-sage-dark text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FiPlay className="w-4 h-4 mr-2" />
                    {experience.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Worship Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-64 md:h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                
                <div className="relative z-10 text-center">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center text-church-sage-dark transform hover:scale-110 transition-all duration-300 mb-4 mx-auto"
                  >
                    {isPlaying ? <FiPause className="w-8 h-8" /> : <FiPlay className="w-8 h-8 ml-1" />}
                  </button>
                  
                  <h4 className="font-bold text-xl text-white mb-2">
                    "How Great Is Our God" - Live Worship
                  </h4>
                  <p className="text-white/80 text-sm">
                    Experience our Sunday morning worship atmosphere
                  </p>
                </div>

                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                  >
                    {isMuted ? <FiVolumeX className="w-4 h-4" /> : <FiVolume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teams and Roles Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Join Our <span className="text-yellow-500">Worship Team</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover your place in creating powerful worship experiences
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${role.color} rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3">
                    <role.icon className="w-6 h-6 text-church-sage" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-church-sage-dark mb-3">
                    {role.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-church-sage-dark mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {role.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-church-sage-dark mb-2">Requirements:</h4>
                    <p className="text-sm text-gray-600">{role.requirements}</p>
                  </div>
                  
                  <button 
                    onClick={() => setVolunteerForm(prev => ({ ...prev, role: role.title }))}
                    className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <FiUsers className="w-4 h-4 mr-2" />
                    Join the Team
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
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
                Worship <span className="text-yellow-500">Resources</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Tools and resources to enhance your worship experience at home and church
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="bg-church-sage text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-church-sage-dark transition-colors duration-300">
                  <resource.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-church-sage-dark mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                
                {resource.type === 'playlist' && (
                  <div className="space-y-2">
                    {resource.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="flex items-center text-church-sage hover:text-purple-800 font-medium text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.platform === 'Spotify' ? <FiMusic className="w-4 h-4 mr-2" /> : <FiYoutube className="w-4 h-4 mr-2" />}
                        {link.platform}
                      </a>
                    ))}
                  </div>
                )}
                
                {resource.type === 'download' && (
                  <div className="space-y-1">
                    {resource.files.map((file, idx) => (
                      <div key={idx} className="flex items-center text-church-sage font-medium text-sm">
                        <FiDownload className="w-4 h-4 mr-2" />
                        {file}
                      </div>
                    ))}
                  </div>
                )}
                
                {(resource.type === 'blog' || resource.type === 'audio') && (
                  <Link 
                    to={resource.link}
                    className="flex items-center text-church-sage hover:text-purple-800 font-medium text-sm"
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Access Resource
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-8 text-church-yellow" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of the Worship Movement!
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our team and help create powerful worship experiences that touch hearts and transform lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Volunteer Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Sign Up to Serve
              </h3>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <FiMusic className="w-16 h-16 mx-auto mb-4 text-church-yellow" />
                  <h4 className="text-xl font-bold text-church-sage-dark mb-2">Application Received!</h4>
                  <p className="text-gray-700">We'll contact you soon about joining our worship team. God bless!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={volunteerForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={volunteerForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={volunteerForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none"
                      required
                    />
                    <select
                      value={volunteerForm.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none"
                      required
                    >
                      <option value="">Select Preferred Role</option>
                      <option value="Vocal Team">Vocal Team</option>
                      <option value="Instrumental Team">Instrumental Team</option>
                      <option value="Tech & Sound">Tech & Sound</option>
                      <option value="Creative Team">Creative Team</option>
                      <option value="Any Role">Any Role</option>
                    </select>
                  </div>
                  
                  <textarea
                    placeholder="Tell us about your musical background, heart for worship, and availability..."
                    value={volunteerForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none resize-none"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <FiSend className="w-5 h-5 mr-2" />
                    Sign Up to Serve
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-church-sage-dark mb-6">
                Other Ways to Connect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-church-sage/10 rounded-lg hover:bg-church-sage/20 transition-colors duration-200 cursor-pointer">
                  <FiCalendar className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Attend Rehearsals</h4>
                    <p className="text-sm text-gray-600">Wednesdays 7:00-9:00 PM • Sanctuary</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-yellow/10 rounded-lg hover:bg-church-yellow/20 transition-colors duration-200 cursor-pointer">
                  <FiMic className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Monthly Auditions</h4>
                    <p className="text-sm text-gray-600">First Saturday of each month • 10:00 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-gray/10 rounded-lg hover:bg-church-gray/20 transition-colors duration-200 cursor-pointer">
                  <FiUsers className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Team Fellowship</h4>
                    <p className="text-sm text-gray-600">Monthly team dinners and bonding activities</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-church-cream/30 rounded-lg hover:bg-church-cream/50 transition-colors duration-200 cursor-pointer">
                  <FiStar className="w-6 h-6 text-church-sage mr-4" />
                  <div>
                    <h4 className="font-semibold text-church-sage-dark">Special Events</h4>
                    <p className="text-sm text-gray-600">Christmas, Easter & conference worship leading</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-church-sage-dark mb-3">Contact Our Team</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <FiMail className="w-4 h-4 mr-2" />
                    <span className="text-sm">worship@jtc.com</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiPhone className="w-4 h-4 mr-2" />
                    <span className="text-sm">(256) 414-3737</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FiInstagram className="w-4 h-4 mr-2" />
                    <span className="text-sm">@jtcworship</span>
                  </div>
                </div>
              </div>
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
                Frequently Asked <span className="text-yellow-500">Questions</span>
              </h2>
              <p className="text-xl text-gray-700">
                Everything you need to know about joining our worship ministry
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
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-church-sage/10 transition-colors duration-200"
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
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">Have more questions?</p>
            <Link 
              to="/contact" 
              className="bg-church-sage hover:bg-church-sage-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              <FiMail className="w-4 h-4 mr-2" />
              Contact Our Worship Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorshipMinistry;