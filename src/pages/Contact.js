import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiSend, 
  FiCheck,
  FiUser,
  FiMessageSquare,
  FiHeart,
  FiCheckCircle
} from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await apiService.submitContactForm(data);
      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        error.response?.data?.message || 
        'Failed to send message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: [
        'Arise Jinja Town Church, at Bendith School a left turn off Kiira',
        'to Arton Street, and right off Wilson Avenue to Arton street  (15-minute walk from town center)'
      ],
      action: {
        text: 'Get Directions',
        href: 'https://maps.google.com/?q=Bendith+School+Arton+Street+Jinja+Uganda'
      }
    },
    {
      icon: FiPhone,
      title: 'Call Our Leaders',
      details: [
        'Pr. Richard: +31627997562',
        'Pr. Jonathan: +256784805817',
        'Elder Joshua: +256774775058'
      ],
      action: {
        text: 'Call Now',
        href: 'tel:+31627997562'
      }
    },
    {
      icon: FiMail,
      title: 'Email Us',
      details: [
        'info@ariseafricajinja.org',
        'Contact us for ministry involvement'
      ],
      action: {
        text: 'Send Email',
        href: 'mailto:info@ariseafricajinja.org'
      }
    },
    {
      icon: FiClock,
      title: 'Service Times',
      details: [
        'Sunday: 9:00 AM (Prayer), 10:00 AM - 12:30 PM (Service)',
        'Tuesday: 5:30 PM - 6:30 PM (Prayer Meeting)',
        'Family Groups: Various times (see Family Groups page)'
      ]
    }
  ];

  const serviceSchedule = [
    {
      day: 'Sunday',
      services: [
        { name: 'Prayer & Fellowship', time: '9:00 AM' },
        { name: 'Main Church Service', time: '10:00 AM - 12:30 PM' }
      ]
    },
    {
      day: 'Tuesday',
      services: [
        { name: 'Prayer Meeting', time: '5:30 PM - 6:30 PM' }
      ]
    },
    {
      day: 'Special Events',
      services: [
        { name: 'Bring, Share, Braai Family Group Gathering', time: 'Thursday, 9th October 2025' },
        { name: 'Game Night with Worship & Fellowship', time: 'Friday, 10th October 2025' },
        { name: 'Leadership Teaching with Sue & Lance McIntosh', time: 'Saturday, 11th October 2025' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contact-us.jpg"
            alt="Contact Us Hero"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed text-shadow">
              We'd love to hear from you. Reach out with questions, prayer requests,
              or to learn more about our church community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="card p-4 sm:p-6 md:p-8">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Send Us a Message</h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 flex items-center"
                  >
                    <FiCheck className="w-5 h-5 mr-3 text-green-600" />
                    <div>
                      <h3 className="font-semibold mb-1">Message Sent Successfully!</h3>
                      <p className="text-sm">Thank you for reaching out. We'll respond to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6"
                  >
                    <p className="font-semibold">Error</p>
                    <p className="text-sm">{submitError}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="flex items-center text-sm sm:text-base font-medium text-gray-700 mb-2"
                    >
                      <FiUser className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName', {
                        required: 'First name is required'
                      })}
                      className={`form-input text-base sm:text-base ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="Enter your first name"
                      disabled={isSubmitting}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm sm:text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="flex items-center text-sm sm:text-base font-medium text-gray-700 mb-2"
                    >
                      <FiUser className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName', {
                        required: 'Last name is required'
                      })}
                      className={`form-input text-base sm:text-base ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Enter your last name"
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm sm:text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center text-sm sm:text-base font-medium text-gray-700 mb-2"
                  >
                    <FiMail className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className={`form-input text-base sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm sm:text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center text-sm sm:text-base font-medium text-gray-700 mb-2"
                  >
                    <FiPhone className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="form-input text-base sm:text-base"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="flex items-center text-sm sm:text-base font-medium text-gray-700 mb-2"
                  >
                    <FiMessageSquare className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                    Subject
                  </label>
                  <select
                    id="subject"
                    {...register('subject', {
                      required: 'Please select a subject'
                    })}
                    className={`form-input text-base sm:text-base ${errors.subject ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="ministry">Ministry Information</option>
                    <option value="pastoral">Pastoral Care</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="events">Events & Activities</option>
                    <option value="technical">Website/Technical Issue</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm sm:text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', {
                      required: 'Please enter your message'
                    })}
                    className={`form-textarea text-base sm:text-base ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell us how we can help you..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm sm:text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="small" />
                      <span className="ml-3">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                </form>
              </div>

              {/* Interactive Map */}
              <div className="card p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=33.198851,0.431247,33.202851,0.435247&layer=mapnik&marker=0.433247,33.200851"
                    width="100%"
                    height="200"
                    className="sm:h-[250px] md:h-[300px]"
                    style={{ border: 0 }}
                    title="Arise Jinja Town Church Location - Bendith School, Arton Street, Jinja"
                  ></iframe>
                </div>
                <div className="mt-3 flex items-center justify-center">
                  <a
                    href="https://maps.app.goo.gl/YqFfYmQy5KZkHv73A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-church-red hover:text-church-burgundy font-medium text-sm transition-colors duration-200"
                  >
                    <FiMapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-12 sm:h-12 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 sm:w-6 sm:h-6 text-church-red" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm sm:text-sm md:text-base text-gray-600 mb-1 break-words">{detail}</p>
                        ))}
                        {info.action && (
                          <a
                            href={info.action.href}
                            target={info.action.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm sm:text-sm md:text-base text-church-red hover:text-church-burgundy font-medium inline-flex items-center mt-2 transition-colors duration-200"
                          >
                            {info.action.text}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Schedule */}
              <div className="card p-4 sm:p-6">
                <h3 className="text-xl sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                  <FiClock className="w-6 h-6 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-church-red" />
                  Service Schedule
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {serviceSchedule.map((schedule, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 sm:pb-4 last:pb-0">
                      <h4 className="text-base sm:text-base font-semibold text-gray-900 mb-2">{schedule.day}</h4>
                      <div className="space-y-1 sm:space-y-2">
                        {schedule.services.map((service, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                            <span className="text-sm sm:text-sm text-gray-600">{service.name}</span>
                            <span className="text-sm sm:text-sm text-church-red font-medium">{service.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Give Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-sage-dark mb-6">
              Support Our <span className="text-church-yellow">Ministry</span>
            </h2>
            <div className="w-20 h-1 bg-church-yellow rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-church-gray max-w-3xl mx-auto">
              Your generosity transforms lives in Jinja and beyond. Give securely through Mobile Money and support worship, community outreach, youth programs, and missions.
            </p>
          </motion.div>

          {/* MoMo Payment Instructions */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 border-2 border-church-sage shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-church-sage-dark text-center mb-6">
                Give via Mobile Money (MoMo)
              </h3>

              <div className="space-y-6">
                {/* Recipient Number */}
                <div className="text-center bg-church-yellow bg-opacity-10 rounded-xl p-5">
                  <p className="text-sm font-semibold text-church-gray mb-2">Send your tithes and offerings to:</p>
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
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 text-church-gray text-sm mt-12"
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

          {/* Link to Full Give Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="/give"
              className="inline-flex items-center bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FiHeart className="w-5 h-5 mr-2" />
              Learn More About Giving
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;