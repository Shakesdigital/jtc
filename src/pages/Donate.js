import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiHeart, FiCreditCard, FiRepeat, FiGift, FiShield } from 'react-icons/fi';
import LoadingSpinner from '../components/LoadingSpinner';

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const suggestedAmounts = [25, 50, 100, 250, 500, 1000];
  const donationPurposes = [
    { value: 'general', label: 'General Fund' },
    { value: 'building', label: 'Building Fund' },
    { value: 'missions', label: 'Missions & Outreach' },
    { value: 'youth', label: 'Youth Ministry' },
    { value: 'children', label: "Children's Ministry" },
    { value: 'community', label: 'Community Outreach' }
  ];

  const onSubmit = async (data) => {
    setIsProcessing(true);
    // Here you would integrate with payment processor (Stripe, PayPal, etc.)
    console.log('Donation data:', {
      ...data,
      amount: selectedAmount || customAmount,
      type: donationType
    });
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Thank you for your donation! (This is a demo)');
    }, 2000);
  };

  const finalAmount = selectedAmount || customAmount;

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
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
              Give with Joy
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Your generous donations help us serve our community and spread God's love 
              throughout Jinja and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Make a Donation</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Donation Type */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Donation Type
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setDonationType('one-time')}
                          className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                            donationType === 'one-time'
                              ? 'border-church-red bg-church-red bg-opacity-10 text-church-red'
                              : 'border-gray-300 text-gray-600 hover:border-church-red hover:text-church-red'
                          }`}
                        >
                          <FiGift className="w-6 h-6 mx-auto mb-2" />
                          <span className="font-medium">One-time</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDonationType('recurring')}
                          className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                            donationType === 'recurring'
                              ? 'border-church-red bg-church-red bg-opacity-10 text-church-red'
                              : 'border-gray-300 text-gray-600 hover:border-church-red hover:text-church-red'
                          }`}
                        >
                          <FiRepeat className="w-6 h-6 mx-auto mb-2" />
                          <span className="font-medium">Monthly</span>
                        </button>
                      </div>
                    </div>

                    {/* Amount Selection */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Select Amount (USD)
                      </label>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {suggestedAmounts.map(amount => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amount.toString());
                              setCustomAmount('');
                            }}
                            className={`p-3 border-2 rounded-lg text-center font-medium transition-all duration-200 ${
                              selectedAmount === amount.toString()
                                ? 'border-church-red bg-church-red text-white'
                                : 'border-gray-300 text-gray-700 hover:border-church-red hover:text-church-red'
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Enter custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount('');
                          }}
                          className="form-input"
                          min="1"
                        />
                      </div>
                    </div>

                    {/* Purpose */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Donation Purpose
                      </label>
                      <select
                        {...register('purpose', { required: 'Please select a purpose' })}
                        className={`form-input ${errors.purpose ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select donation purpose</option>
                        {donationPurposes.map(purpose => (
                          <option key={purpose.value} value={purpose.value}>
                            {purpose.label}
                          </option>
                        ))}
                      </select>
                      {errors.purpose && (
                        <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>
                      )}
                    </div>

                    {/* Donor Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900">Donor Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            {...register('firstName', { required: 'First name is required' })}
                            className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                            placeholder="Enter your first name"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            {...register('lastName', { required: 'Last name is required' })}
                            className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                            placeholder="Enter your last name"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email'
                            }
                          })}
                          className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          {...register('anonymous')}
                          className="h-4 w-4 text-church-red focus:ring-church-red border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                          Make this donation anonymous
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isProcessing || !finalAmount}
                        className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? (
                          <>
                            <LoadingSpinner size="small" />
                            <span className="ml-3">Processing...</span>
                          </>
                        ) : (
                          <>
                            <FiCreditCard className="w-5 h-5 mr-2" />
                            Donate ${finalAmount || '0'}
                          </>
                        )}
                      </button>
                      
                      <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                        <FiShield className="w-4 h-4 mr-2" />
                        Secure payment processing
                      </div>
                    </div>
                  </form>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Impact */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card p-6 bg-church-red text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-church-gold">$50</div>
                      <div className="text-sm opacity-90">Provides meals for 10 families</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-church-gold">$100</div>
                      <div className="text-sm opacity-90">Supports youth programs for a month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-church-gold">$250</div>
                      <div className="text-sm opacity-90">Helps fund community outreach</div>
                    </div>
                  </div>
                </motion.div>

                {/* Other Ways to Give */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Give</h3>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div>
                      <p className="font-medium text-gray-900">Bank Transfer</p>
                      <p>Contact our office for bank details</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Mobile Money</p>
                      <p>Available for Uganda residents</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">In Person</p>
                      <p>Drop off donations at the church office</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tax Information */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Donation Receipt</h3>
                  <p className="text-sm text-gray-600">
                    All donations are recorded for your records. You will receive an email 
                    confirmation and annual giving statement for tax purposes.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;