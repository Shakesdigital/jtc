import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiHeart, FiSend, FiCheck, FiUser, FiMail, FiMessageSquare, FiUsers } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';

const PrayerRequests = () => {
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
      await apiService.createPrayerRequest(data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        error.response?.data?.message || 
        'Failed to submit prayer request. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const prayerCategories = [
    'healing',
    'family',
    'guidance',
    'salvation',
    'financial',
    'relationship',
    'work',
    'other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-church-red to-church-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-6 text-church-gold" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Prayer Requests
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Submit your prayer requests and know that our church family is lifting you up in prayer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-8 flex items-center"
              >
                <FiCheck className="w-5 h-5 mr-3 text-green-600" />
                <div>
                  <h3 className="font-semibold mb-1">Prayer Request Submitted!</h3>
                  <p className="text-sm">Thank you for sharing your prayer request. Our church family is praying for you.</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-8"
              >
                <p className="font-semibold">Error</p>
                <p className="text-sm">{submitError}</p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Share Your Prayer Request
                </h2>
                <p className="text-gray-600">
                  Your privacy is important to us. Choose whether you'd like your request to be shared 
                  with our prayer team or kept anonymous.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="requesterName" 
                    className="flex items-center text-sm font-medium text-gray-700 mb-2"
                  >
                    <FiUser className="w-4 h-4 mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="requesterName"
                    {...register('requesterName', {
                      required: 'Please enter your name'
                    })}
                    className={`form-input ${errors.requesterName ? 'border-red-500' : ''}`}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                  {errors.requesterName && (
                    <p className="text-red-500 text-sm mt-1">{errors.requesterName.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="requesterEmail" 
                    className="flex items-center text-sm font-medium text-gray-700 mb-2"
                  >
                    <FiMail className="w-4 h-4 mr-2" />
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="requesterEmail"
                    {...register('requesterEmail', {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className={`form-input ${errors.requesterEmail ? 'border-red-500' : ''}`}
                    placeholder="Enter your email (optional)"
                    disabled={isSubmitting}
                  />
                  {errors.requesterEmail && (
                    <p className="text-red-500 text-sm mt-1">{errors.requesterEmail.message}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-1">
                    We may use this to follow up on your prayer request
                  </p>
                </div>

                {/* Title Field */}
                <div>
                  <label 
                    htmlFor="title" 
                    className="flex items-center text-sm font-medium text-gray-700 mb-2"
                  >
                    <FiMessageSquare className="w-4 h-4 mr-2" />
                    Prayer Request Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register('title', {
                      required: 'Please provide a title for your prayer request'
                    })}
                    className={`form-input ${errors.title ? 'border-red-500' : ''}`}
                    placeholder="Brief title for your prayer request"
                    disabled={isSubmitting}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                {/* Category Field */}
                <div>
                  <label 
                    htmlFor="category" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    {...register('category')}
                    className="form-input"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a category (optional)</option>
                    {prayerCategories.map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Content Field */}
                <div>
                  <label 
                    htmlFor="content" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prayer Request Details
                  </label>
                  <textarea
                    id="content"
                    rows={6}
                    {...register('content', {
                      required: 'Please describe your prayer request'
                    })}
                    className={`form-textarea ${errors.content ? 'border-red-500' : ''}`}
                    placeholder="Share the details of your prayer request..."
                    disabled={isSubmitting}
                  />
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                  )}
                </div>

                {/* Privacy Options */}
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900">Privacy Settings</h3>
                  
                  <div className="space-y-2">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        value="false"
                        {...register('isAnonymous')}
                        className="mt-1 text-church-red focus:ring-church-red border-gray-300"
                        disabled={isSubmitting}
                        defaultChecked
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900">Share my name</span>
                        <p className="text-xs text-gray-600">
                          Include my name with the prayer request
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        value="true"
                        {...register('isAnonymous')}
                        className="mt-1 text-church-red focus:ring-church-red border-gray-300"
                        disabled={isSubmitting}
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900">Keep anonymous</span>
                        <p className="text-xs text-gray-600">
                          Don't include my name with the prayer request
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('isPublic')}
                        className="mt-1 text-church-red focus:ring-church-red border-gray-300 rounded"
                        disabled={isSubmitting}
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900">
                          Add to prayer wall
                        </span>
                        <p className="text-xs text-gray-600">
                          Share this request on our public prayer wall for the whole congregation
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="small" />
                        <span className="ml-3">Submitting Prayer Request...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5 mr-2" />
                        Submit Prayer Request
                      </>
                    )}
                  </button>
                </div>

                {/* Support Text */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600">
                    All prayer requests are confidential and handled with care. 
                    If you need immediate assistance, please contact our church office.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prayer Wall Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Us in Prayer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When we pray together, we grow stronger as a community. 
              Your prayers and support make a difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8 text-church-red" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confidential Support</h3>
              <p className="text-gray-600">
                All prayer requests are treated with complete confidentiality and handled with care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8 text-church-red" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Prayer</h3>
              <p className="text-gray-600">
                Join our dedicated prayer team as they lift up requests during weekly prayer meetings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-church-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMessageSquare className="w-8 h-8 text-church-red" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Up Care</h3>
              <p className="text-gray-600">
                Our pastoral team may follow up on your request to provide additional support and care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerRequests;