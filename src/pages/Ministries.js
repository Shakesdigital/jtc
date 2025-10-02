import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiHeart,
  FiClock,
  FiArrowRight,
  FiMail,
  FiSend
} from 'react-icons/fi';

const Ministries = () => {
  // Static ministry data based on the church's actual ministries
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ministry: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const ministries = [
    {
      id: 1,
      title: "Children Ministry",
      image: "/images/ministries/children-ministry.jpg",
      description: (
        <>
          Our Children Ministry is dedicated to helping young ones (ages 3-12) grow in faith through fun, interactive Bible lessons, prayer times, and creative activities. We aim to instill a lifelong love for God and His Word, drawing from Proverbs 22:6: 'Train up a child in the way he should go...' We also partner with{' '}
          <a
            href="https://four12global.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-church-yellow hover:text-church-yellow-dark transition-colors duration-300"
          >
            Four12 Global's
          </a>{' '}
          community development programs for outreach.
        </>
      ),
      ageRange: "Ages 0-12",
      meetingTime: "Sundays during services & Annual kids camps",
      highlights: ["Bible Stories", "Interactive Worship", "Age-appropriate Activities", "Safe Environment"]
    },
    {
      id: 2,
      title: "Worship Ministry",
      image: "/images/ministries/worship-ministry.jpg",
      description: "Leading heartfelt praise and music to connect the congregation with God. Our worship team creates an atmosphere of reverence and joy through contemporary Christian music, traditional hymns, and spirit-led worship that invites everyone to encounter God's presence.",
      ageRange: "All Ages",
      meetingTime: "Sundays & Worship rehearsals",
      highlights: ["Contemporary Music", "Traditional Hymns", "Team Collaboration", "Spiritual Connection"]
    },
    {
      id: 3,
      title: "Family Groups Ministry",
      image: "/images/ministries/family-groups-ministry.jpg",
      description: "This ministry oversees our scattered family groups, building strong bonds within the church family through regular home-based fellowships. Inspired by Acts 2:46-47, we emphasize breaking bread, prayer, and mutual support to create a sense of belonging.",
      ageRange: "Families of All Sizes",
      meetingTime: "Weekly in Homes",
      highlights: ["Small Group Fellowship", "Family Support", "Shared Meals", "Prayer Partnership"]
    },
    {
      id: 4,
      title: "Discipleship Equip Ministry",
      image: "/images/ministries/discipleship-equip-ministry.jpg",
      description: "Focused on training church members to share the Gospel confidently, this ministry equips believers to disciple others and lead souls to Christ. Based on Matthew 28:19-20, we prepare you to 'go and make disciples of all nations' through bi-weekly training sessions every other Saturday, evangelism workshops, role-playing scenarios, and community outreach events.",
      ageRange: "Teen & Adult",
      meetingTime: "Bi-weekly Saturdays & Community outreach",
      highlights: ["Bible Study", "Leadership Training", "Mentorship", "Spiritual Gifts Discovery"]
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
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', ministry: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    // Clear status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const scrollToMinistries = () => {
    document.getElementById('ministries-grid').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-screen hero-content-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/ministries-theme.jpg"
            alt="Ministries Hero"
            className="hero-image"
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
            <FiHeart className="w-20 h-20 mx-auto mb-3 sm:mb-4 text-church-yellow" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg">
              Our Ministries: <span className="text-church-yellow">Serving Together in Faith</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow">
              Discover how you can get involved and grow in community through our diverse ministry opportunities
            </p>

            <div className="pt-6 sm:pt-8">
              <button 
                onClick={scrollToMinistries}
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl btn-hero w-full sm:w-auto border-2 sm:border-3"
              >
                Explore Ministries
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministries Overview Section */}
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
                  Serving <span className="text-church-yellow">Together</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                At Arise Jinja Town Church, our ministries are the heartbeat of our community. They equip believers, nurture growth, and extend God's love to Jinja and beyond. Whether you're passionate about children, media, or outreach, there's a place for you to serve.
              </p>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our ministries provide meaningful ways for every member to connect with God, grow in faith, and serve others with purpose and joy. Whether you're looking to use your talents, develop new skills, or simply find your place in our church family, there's a ministry where you can make a difference and experience the fulfillment that comes from serving together.
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
                  src="/images/worship-theme-serving.jpg"
                  alt="Worship and Serving Together"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/30 to-transparent"></div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministries Grid Section */}
      <section id="ministries-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-church-sage-dark mb-6">
                Our <span className="text-church-yellow">Ministries</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray max-w-3xl mx-auto">
                Find your place to serve, grow, and make a meaningful impact in our church community
              </p>
            </motion.div>
          </div>

          <div className="ministry-grid">
            {ministries.map((ministry, index) => {
              return (
                <motion.div
                  key={ministry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group ministry-card"
                >
                  <div className="relative overflow-hidden ministry-card-image">
                    <img
                      src={ministry.image}
                      alt={ministry.title}
                      className="w-full h-48 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-church-sage-dark px-3 py-1 rounded-full text-sm font-medium">
                      {ministry.ageRange}
                    </div>
                  </div>
                  
                  <div className="ministry-card-content">
                    <h3 className="text-xl font-bold text-church-sage-dark mb-3 group-hover:text-church-yellow transition-colors duration-300">
                      {ministry.title}
                    </h3>
                    
                    <p className="text-church-gray mb-4 leading-relaxed text-sm ministry-card-description">
                      {ministry.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-church-gray">
                        <FiClock className="w-4 h-4 mr-2 text-church-sage" />
                        {ministry.meetingTime}
                      </div>
                    </div>

                    <div className="flex space-x-2 ministry-card-actions">
                      <Link
                        to={
                          ministry.title === "Children Ministry" ? "/ministries/childrens-ministry" :
                          ministry.title === "Worship Ministry" ? "/ministries/worship-ministry" :
                          ministry.title === "Family Groups Ministry" ? "/ministries/family-groups" :
                          ministry.title === "Discipleship Equip Ministry" ? "/ministries/discipleship-equip" :
                          "/contact"
                        }
                        className="flex-1 bg-church-sage hover:bg-church-sage-dark text-white font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300 text-sm"
                      >
                        Learn More
                      </Link>
                      {(ministry.title === "Children Ministry" || ministry.title === "Worship Ministry" || ministry.title === "Family Groups Ministry" || ministry.title === "Discipleship Equip Ministry") ? (
                        <Link
                          to={
                            ministry.title === "Children Ministry" ? "/ministries/childrens-ministry" :
                            ministry.title === "Worship Ministry" ? "/ministries/worship-ministry" :
                            ministry.title === "Family Groups Ministry" ? "/ministries/family-groups" :
                            ministry.title === "Discipleship Equip Ministry" ? "/ministries/discipleship-equip" :
                            "/contact"
                          }
                          className="flex-1 bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300 text-sm"
                        >
                          Join Now
                        </Link>
                      ) : (
                        <button 
                          onClick={() => setFormData(prev => ({ ...prev, ministry: ministry.title }))}
                          className="flex-1 bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-semibold text-center py-3 px-4 rounded-lg transition-all duration-300 text-sm"
                        >
                          Join Now
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join a Ministry Section */}
      <section className="py-20 bg-gradient-to-br from-church-sage-light to-church-sage">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Serve? Join a Ministry Today!
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Take the next step in your faith journey and make a difference in our community
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="ministry" className="block text-sm font-semibold text-church-sage-dark mb-2">
                    Preferred Ministry
                  </label>
                  <select
                    id="ministry"
                    name="ministry"
                    value={formData.ministry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a ministry</option>
                    <option value="Children Ministry">Children Ministry</option>
                    <option value="Worship Ministry">Worship Ministry</option>
                    <option value="Family Groups Ministry">Family Groups Ministry</option>
                    <option value="Discipleship Equip Ministry">Discipleship Equip Ministry</option>
                    <option value="Media & Tech Ministry">Media & Tech Ministry</option>
                    <option value="Men's Ministry">Men's Ministry</option>
                    <option value="Women's Ministry">Women's Ministry</option>
                    <option value="Outreach Ministry">Outreach Ministry</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-sage focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your interests, availability, or any questions you have..."
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
                      Sign Up Now
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
                      ? "Thank you! We'll contact you soon about ministry opportunities." 
                      : "There was an error submitting your form. Please try again."}
                  </div>
                )}
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-church-gray mb-4">Or reach out to us directly:</p>
              <Link 
                to="/contact"
                className="inline-flex items-center text-church-sage hover:text-church-sage-dark font-semibold transition-colors duration-300"
              >
                <FiMail className="w-4 h-4 mr-2" />
                Contact Us to Join
                <FiArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Ministries;