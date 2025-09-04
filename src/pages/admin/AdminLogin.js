import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiShield } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      const from = location.state?.from?.pathname || '/admin/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, loading, navigate, location]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError('');

    try {
      const result = await login(data.email, data.password);
      
      if (result.success) {
        const from = location.state?.from?.pathname || '/admin/dashboard';
        navigate(from, { replace: true });
      } else {
        setLoginError(result.error);
      }
    } catch (error) {
      setLoginError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="large" message="Checking authentication..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-church-red to-church-burgundy flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-church-red rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FiShield className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Admin Login
            </h2>
            <p className="text-gray-600">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            {/* Error Message */}
            {loginError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
              >
                <p className="text-sm font-medium">{loginError}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="flex items-center text-sm font-medium text-gray-700 mb-2"
                >
                  <FiMail className="w-4 h-4 mr-2" />
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
                  className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Enter your email"
                  disabled={isLoading}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label 
                  htmlFor="password" 
                  className="flex items-center text-sm font-medium text-gray-700 mb-2"
                >
                  <FiLock className="w-4 h-4 mr-2" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                    className={`form-input pr-12 ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5" />
                    ) : (
                      <FiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('rememberMe')}
                    className="h-4 w-4 text-church-red focus:ring-church-red border-gray-300 rounded"
                    disabled={isLoading}
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                
                <button
                  type="button"
                  className="text-sm text-church-red hover:text-church-burgundy font-medium transition-colors duration-200"
                  disabled={isLoading}
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="small" />
                    <span className="ml-3">Signing In...</span>
                  </>
                ) : (
                  <>
                    <FiShield className="w-5 h-5 mr-2" />
                    Sign In
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Protected area for authorized personnel only
              </p>
            </div>
          </div>
        </div>

        {/* Back to Site Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => navigate('/')}
            className="text-white hover:text-church-gold font-medium transition-colors duration-200 flex items-center justify-center mx-auto"
            disabled={isLoading}
          >
            ← Back to Main Site
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;