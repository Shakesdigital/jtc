import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiArrowLeft, FiMail, FiUser, FiPhone, FiCheck } from 'react-icons/fi';
import { apiService } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const EventDetail = () => {
  const { id } = useParams();
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState('');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const { data: event, isLoading, error } = useQuery(
    ['event', id],
    () => apiService.getEvent(id),
    {
      enabled: !!id,
    }
  );

  const onSubmit = async (data) => {
    setIsRegistering(true);
    setRegistrationError('');

    try {
      await apiService.registerForEvent(id, data);
      setRegistrationSuccess(true);
      reset();
      
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 5000);
    } catch (error) {
      setRegistrationError(
        error.response?.data?.message || 
        'Failed to register for event. Please try again.'
      );
    } finally {
      setIsRegistering(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" message="Loading event details..." />
      </div>
    );
  }

  if (error || !event?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorMessage
          title="Event Not Found"
          message="The event you're looking for doesn't exist or has been moved."
        />
      </div>
    );
  }

  const eventData = event.data;
  const isUpcoming = new Date(eventData.startDate) > new Date();
  const canRegister = eventData.registrationRequired && isUpcoming && 
                     (!eventData.registrationLimit || 
                      (eventData.registrationCount || 0) < eventData.registrationLimit);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link 
            to="/events"
            className="flex items-center text-church-red hover:text-church-burgundy transition-colors duration-200"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card overflow-hidden mb-8"
            >
              {eventData.featuredImage && (
                <img
                  src={eventData.featuredImage}
                  alt={eventData.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              )}
              
              <div className="p-8">
                {eventData.category && (
                  <p className="text-sm text-church-red font-medium mb-2 uppercase tracking-wide">
                    {eventData.category}
                  </p>
                )}
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {eventData.title}
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FiCalendar className="w-5 h-5 mr-3 text-church-red" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p>{new Date(eventData.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <FiClock className="w-5 h-5 mr-3 text-church-red" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p>{eventData.startTime} - {eventData.endTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <FiMapPin className="w-5 h-5 mr-3 text-church-red" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p>{eventData.location}</p>
                      {eventData.address && (
                        <p className="text-sm text-gray-500">{eventData.address}</p>
                      )}
                    </div>
                  </div>
                  
                  {eventData.registrationRequired && (
                    <div className="flex items-center text-gray-600">
                      <FiUsers className="w-5 h-5 mr-3 text-church-red" />
                      <div>
                        <p className="font-medium">Registration</p>
                        <p>
                          {eventData.registrationCount || 0}
                          {eventData.registrationLimit ? ` / ${eventData.registrationLimit}` : ''} registered
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>{eventData.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Event Gallery */}
            {eventData.gallery && eventData.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {eventData.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${eventData.title} gallery ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration Form */}
            {canRegister && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Register for Event</h3>
                
                {registrationSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center">
                    <FiCheck className="w-5 h-5 mr-3 text-green-600" />
                    <div>
                      <p className="font-semibold mb-1">Registration Successful!</p>
                      <p className="text-sm">You've been registered for this event.</p>
                    </div>
                  </div>
                )}
                
                {registrationError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                    <p className="font-semibold">Registration Failed</p>
                    <p className="text-sm">{registrationError}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiUser className="w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                      disabled={isRegistering}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiMail className="w-4 h-4 mr-2" />
                      Email
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
                      placeholder="Enter your email"
                      disabled={isRegistering}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiPhone className="w-4 h-4 mr-2" />
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="form-input"
                      placeholder="Enter your phone number"
                      disabled={isRegistering}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isRegistering}
                    className="w-full btn-primary py-3 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isRegistering ? (
                      <>
                        <LoadingSpinner size="small" />
                        <span className="ml-3">Registering...</span>
                      </>
                    ) : (
                      'Register Now'
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {/* Event Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${
                    isUpcoming ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {isUpcoming ? 'Upcoming' : 'Past Event'}
                  </span>
                </div>
                {eventData.contactEmail && (
                  <div>
                    <span className="text-gray-600">Contact:</span>
                    <a 
                      href={`mailto:${eventData.contactEmail}`}
                      className="block text-church-red hover:text-church-burgundy transition-colors duration-200"
                    >
                      {eventData.contactEmail}
                    </a>
                  </div>
                )}
                {eventData.contactPhone && (
                  <div>
                    <span className="text-gray-600">Phone:</span>
                    <a 
                      href={`tel:${eventData.contactPhone}`}
                      className="block text-church-red hover:text-church-burgundy transition-colors duration-200"
                    >
                      {eventData.contactPhone}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;