import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiCalendar, 
  FiClock, 
  FiMapPin, 
  FiShare2, 
  FiDownload, 
  FiArrowLeft,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiClock as FiTime
} from 'react-icons/fi';
import { getEventBySlug } from '../data/eventsData';

const EventDetail = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const foundEvent = getEventBySlug(slug);
    setEvent(foundEvent);
  }, [slug]);

  // Calculate time left if event has a future date
  useEffect(() => {
    if (event && event.displayDate) {
      const calculateTimeLeft = () => {
        const eventDate = new Date(event.displayDate);
        const now = new Date();
        
        if (eventDate > now) {
          const difference = eventDate - now;
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          
          setTimeLeft({ days, hours, minutes });
        } else {
          setTimeLeft(null);
        }
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
      
      return () => clearInterval(timer);
    }
  }, [event]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = event?.title || '';
    const text = `Check out this event: ${title}`;

    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this event: ${url}`)}`;
        break;
      default:
        break;
    }
  };

  const addToCalendar = () => {
    // Simple Google Calendar integration
    if (event && event.displayDate) {
      const startDate = new Date(event.displayDate);
      const endDate = new Date(startDate);
      endDate.setHours(endDate.getHours() + 2); // Assuming 2-hour events
      
      const start = startDate.toISOString().replace(/-|:|\.\d+/g, '');
      const end = endDate.toISOString().replace(/-|:|\.\d+/g, '');
      
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
      
      window.open(calendarUrl, '_blank');
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
          <Link to="/events" className="bg-church-sage text-white px-6 py-3 rounded-lg hover:bg-church-sage-dark transition-colors">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back to Events Link */}
        <Link 
          to="/events"
          className="inline-flex items-center text-church-sage hover:text-church-sage-dark transition-colors duration-300 mb-8"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>

        {/* Event Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <FiClock className="w-4 h-4 mr-1.5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="w-4 h-4 mr-1.5" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {event.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            <span className="bg-church-sage bg-opacity-10 text-church-sage px-3 py-1 rounded-full text-sm font-medium">
              {event.category}
            </span>
            {event.tags.map(tag => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Event Image */}
        <div className="mb-10">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-auto rounded-lg shadow-md max-w-3xl mx-auto"
          />
        </div>

        {/* Countdown Timer for Upcoming Events */}
        {timeLeft && (
          <div className="mb-10 bg-gradient-to-r from-church-sage to-church-sage-dark rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-4">Event Starts In</h3>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm opacity-90">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm opacity-90">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm opacity-90">Minutes</div>
              </div>
            </div>
          </div>
        )}

        {/* Event Details */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          {event.description}
        </div>

        {/* Event Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-church-sage-dark mb-4">Event Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FiCalendar className="w-5 h-5 mr-3 text-church-sage" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="w-5 h-5 mr-3 text-church-sage" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="w-5 h-5 mr-3 text-church-sage" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <FiTime className="w-5 h-5 mr-3 text-church-sage" />
              <span>{event.category}</span>
            </div>
          </div>
        </div>

        {/* Share and Calendar Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-gray-700 font-medium">Share this event:</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share on Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share on Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share on LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-church-sage hover:text-white transition-all duration-300"
                  title="Share via Email"
                >
                  <FiMail className="w-5 h-5" />
                </button>
                <button
                  onClick={addToCalendar}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-church-sage text-white hover:bg-church-sage-dark transition-all duration-300 ml-0 sm:ml-2"
                  title="Add to Calendar"
                >
                  <FiCalendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Add to Calendar</span>
                </button>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-gray-700 text-sm">
                Arise Jinja Town Church
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Join us for fellowship and worship
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EventDetail;