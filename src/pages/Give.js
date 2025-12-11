import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiDollarSign, FiMail, FiCheckCircle } from 'react-icons/fi';

const Give = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate form submission
    setSubmitStatus('sending');

    // In production, you would send this to your backend
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', amount: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/community-banner.jpg"
            alt="Community giving and worship"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-church-sage-dark/40 via-church-sage/30 to-church-sage-dark/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shadow-lg">
              Partner with Us in <span className="text-church-yellow">Ministry</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-shadow">
              Your generosity transforms lives in Jinja and beyond. Give securely and joyfully today.
            </p>

            <div className="pt-6">
              <a
                href="#give-now"
                className="inline-flex items-center bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FiHeart className="w-5 h-5 mr-2" />
                Give Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Give Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-sage-dark mb-6">
              Why <span className="text-church-yellow">Give?</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-8"></div>

            <p className="text-lg md:text-xl text-church-gray leading-relaxed mb-12">
              At Arise Jinja Town Church, every gift supports worship, community outreach, youth programs,
              and missions in Uganda. Join us in building God's kingdom—100% of donations go directly to His work.
            </p>

            {/* Impact Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-church-sage rounded-full flex items-center justify-center mb-4">
                  <FiHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-church-sage-dark mb-2">Community Impact</h3>
                <p className="text-church-gray">Supporting families and building stronger communities</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-church-sage rounded-full flex items-center justify-center mb-4">
                  <FiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-church-sage-dark mb-2">Missions & Outreach</h3>
                <p className="text-church-gray">Spreading the gospel throughout Uganda and beyond</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-church-sage rounded-full flex items-center justify-center mb-4">
                  <FiDollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-church-sage-dark mb-2">Ministry Programs</h3>
                <p className="text-church-gray">Empowering worship, youth, and discipleship ministries</p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="give-now" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-sage-dark mb-6">
              Ways to <span className="text-church-yellow">Give</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-church-gray">
              Choose your preferred giving method below. All donations are secure and go directly to ministry work.
            </p>
          </motion.div>

          {/* MoMo Payment Instructions */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 border-2 border-church-sage hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-church-sage-dark text-center mb-6">
                Give via Mobile Money (MoMo)
              </h3>

              <div className="space-y-6">
              {/* Recipient Number */}
              <div className="text-center bg-church-yellow bg-opacity-10 rounded-xl p-5">
                <p className="text-sm font-semibold text-church-gray mb-2">Send your gift to:</p>
                <div className="bg-church-sage text-white px-6 py-3 rounded-full font-bold text-2xl inline-block">
                  614144
                </div>
                <p className="text-xs text-church-gray mt-2">Arise Jinja Town Church</p>
              </div>

              {/* Instructions */}
              <div className="space-y-5">
                <h4 className="text-lg font-semibold text-church-sage-dark text-center mb-4">How to Give:</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="font-semibold text-church-sage-dark mb-3 text-center">Method 1: Using MoMo App</p>
                    <ol className="space-y-2 text-sm text-church-gray">
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Open your Mobile Money app</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Select "Send Money" or "Transfer"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Enter <strong className="text-church-sage-dark">614144</strong> as recipient</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Enter amount and confirm with PIN</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <p className="font-semibold text-church-sage-dark mb-3 text-center">Method 2: Using USSD Code</p>
                    <ol className="space-y-2 text-sm text-church-gray">
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Dial <strong className="text-church-sage-dark">*165*3#</strong> on your phone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Select "Send Money" from menu</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Enter <strong className="text-church-sage-dark">614144</strong> as recipient</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-church-sage mr-2">•</span>
                        <span>Enter amount and complete with PIN</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-church-yellow bg-opacity-20 rounded-lg p-4 text-center">
                  <p className="text-church-sage-dark font-semibold text-sm">
                    Fast, secure, and no fees for you. Your entire gift goes directly to ministry work!
                  </p>
                </div>
              </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 text-church-gray text-sm"
          >
            <div className="flex items-center">
              <FiCheckCircle className="w-5 h-5 text-church-sage mr-2" />
              <span>Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <FiCheckCircle className="w-5 h-5 text-church-sage mr-2" />
              <span>100% Goes to Ministry</span>
            </div>
            <div className="flex items-center">
              <FiCheckCircle className="w-5 h-5 text-church-sage mr-2" />
              <span>Trusted by Our Community</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Give - Contact Form */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-church-sage-dark mb-4">
                Other Ways to <span className="text-church-yellow">Give</span>
              </h2>
              <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-church-gray">
                Have questions or want to explore alternative giving methods? Contact us below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-church-sage-dark font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-church-sage-dark font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-church-sage-dark font-semibold mb-2">
                    Intended Amount (Optional)
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., 100,000 UGX or $50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-church-sage-dark font-semibold mb-2">
                    Message or Question <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us how you'd like to give or ask any questions..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center"
                  >
                    <FiCheckCircle className="w-5 h-5 mr-2" />
                    <span>Thank you! We'll be in touch soon.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-church-sage hover:bg-church-sage-dark text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'sending' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiMail className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-6 text-church-yellow" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Thank You for Sowing Seeds of <span className="text-church-yellow">Hope</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              Your generous support empowers Arise Jinja Town Church to continue sharing God's love,
              building community, and transforming lives. Together, we're making a lasting impact in Uganda and beyond.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Give;
