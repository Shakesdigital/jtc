import React from 'react';
import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi';

const ErrorMessage = ({ 
  title = 'Something went wrong', 
  message = 'An error occurred while loading the content.',
  onRetry,
  showRetry = true 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <FiAlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{message}</p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="btn-primary flex items-center"
        >
          <FiRefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;