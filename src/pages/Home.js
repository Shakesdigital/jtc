import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHeart,
  FiClock,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import ContentCarousel from '../components/ContentCarousel';
import '../styles/carousel.css';

const Home = () => {
  // Static content mode - API calls disabled for initial deployment
  
  // Hero carousel images - using authentic church photos
  const heroImages = [
    {
      id: 1,
      url: "/images/full-church-congregation.jpg",
      title: "Welcome to Arise Africa Jinja Town Church – Where All Are Welcome in Christ's Love",
      subtitle: "Join our diverse community in Jinja, Uganda, as we worship, grow, and serve together. Experience the transformative power of Jesus every Sunday and beyond."
    },
    {
      id: 2,
      url: "/images/diverse-community.jpg",
      title: "A Welcoming Christian Community",
      subtitle: "Breaking down barriers of race, upbringing, and social status"
    },
    {
      id: 3,
      url: "/images/joyful-fellowship.jpg",
      title: "Richly Diverse Church Family",
      subtitle: "People of all ethnicities and backgrounds worshipping together"
    }
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  

  // Sample data for sections with additional items for carousel
  const sampleSermons = [
    {
      id: 1,
      title: "Breaking Down Barriers",
      speaker: "Pr. Richard",
      image: "/images/pr-richard-authentic.jpg",
      description: "Unity in Christ transcends race, upbringing, and social status. A powerful message about how the church breaks down walls that divide us."
    },
    {
      id: 2,
      title: "All People Can Be Saved",
      speaker: "Pr. Jonathan",
      image: "/images/full-church-congregation.jpg",
      description: "Exploring John 3:16 and God's inclusive love. Discover how Christ's sacrifice opens the door of salvation to everyone."
    },
    {
      id: 3,
      title: "Building Diverse Community",
      speaker: "Pr. Kenneth",
      image: "/images/diverse-community.jpg",
      description: "How diversity strengthens the body of Christ. Learn about the beauty of different cultures coming together in worship."
    },
    {
      id: 4,
      title: "From Guesthouse to Church",
      speaker: "Elder Joshua",
      image: "/images/church-congregation-authentic.jpg",
      description: "God's unexpected ways of building His kingdom. The amazing story of how our church began in a simple guesthouse."
    },
    {
      id: 5,
      title: "Living Water for All Nations",
      speaker: "Pr. Richard",
      image: "/images/charity-worship.jpg",
      description: "Jesus offers living water to everyone who thirsts. A message about spiritual fulfillment across all backgrounds."
    },
    {
      id: 6,
      title: "Unity in the Spirit",
      speaker: "Pr. Sarah",
      image: "/images/joyful-fellowship.jpg",
      description: "How the Holy Spirit unites believers from every tribe and tongue. Celebrating our diversity in Christ."
    }
  ];

  const sampleEvents = [
    {
      id: 1,
      title: "Annual Youth Jam",
      date: "September 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Church Sanctuary",
      image: "/images/young-community.jpg",
      description: "A lively celebration of Jesus through music, dance, and testimonies. Join us for an evening of worship designed especially for young people."
    },
    {
      id: 2,
      title: "Mega Fellowship",
      date: "Every Quarter",
      time: "10:00 AM - 2:00 PM",
      location: "Church Grounds",
      image: "/images/full-church-congregation.jpg",
      description: "Quarterly celebration with worship, preaching, and community meals. A time for the entire church family to come together in fellowship."
    },
    {
      id: 3,
      title: "Tuesday Prayer Meeting",
      date: "Every Tuesday",
      time: "4:00 PM - 6:00 PM",
      location: "Church Sanctuary",
      image: "/images/pray-together.jpg",
      description: "Breaking fast, prayer, and fellowship with our church community family. Experience the power of corporate prayer and intercession."
    },
    {
      id: 4,
      title: "Family Groups Meetup",
      date: "Weekly",
      time: "6:00 PM - 9:00 PM",
      location: "Various Homes",
      image: "/images/joyful-fellowship.jpg",
      description: "Home-based fellowship for deeper connections and Bible study. Build lasting relationships in a small group setting."
    },
    {
      id: 5,
      title: "Women's Conference",
      date: "October 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Church Hall",
      image: "/images/worship-gathering.jpg",
      description: "Empowering women to grow in faith and purpose. A day of worship, teaching, and fellowship designed for women of all ages."
    },
    {
      id: 6,
      title: "Community Outreach Day",
      date: "Monthly",
      time: "8:00 AM - 1:00 PM",
      location: "Jinja Community",
      image: "/images/diverse-community.jpg",
      description: "Serving our local community with love and practical support. Join us as we demonstrate Christ's love through action."
    }
  ];

  const sampleArticles = [
    {
      id: 1,
      title: "How Do We Measure Devotion?",
      excerpt: "Cultivating the root for better fruit. Exploring what true devotion to God looks like in our daily lives and how we can grow deeper in our faith.",
      image: "/images/dealing-with-temptation.jpg",
      slug: "how-do-we-measure-devotion",
      author: "Richard van de Ruit"
    },
    {
      id: 2,
      title: "Follow Him to Calvary",
      excerpt: "Counting the cost of living for Jesus. Understanding the sacrificial love of Christ and what it means to take up our cross daily.",
      image: "/images/pr-richard-preaching.jpg",
      slug: "follow-him-to-calvary",
      author: "Richard van de Ruit"
    },
    {
      id: 3,
      title: "The Opinion Virus",
      excerpt: "Are we building up or voicing unhelpful judgments? Learning to speak life and encouragement in a world full of criticism.",
      image: "/images/sermon-2.jpg",
      slug: "the-opinion-virus",
      author: "Richard van de Ruit"
    },
    {
      id: 4,
      title: "Dunk or Sprinkle?",
      excerpt: "What is the pattern of Scripture when it comes to water baptism? An in-depth look at biblical baptism and its significance.",
      image: "/images/sermons.jpg",
      slug: "dunk-or-sprinkle",
      author: "Richard van de Ruit"
    },
    {
      id: 5,
      title: "Grace Under Pressure",
      excerpt: "Finding God's strength in challenging times. Discovering how God's grace sustains us through life's most difficult moments.",
      image: "/images/pray-together.jpg",
      slug: "grace-under-pressure",
      author: "Richard van de Ruit"
    },
    {
      id: 6,
      title: "The Power of Forgiveness",
      excerpt: "Breaking free from the chains of unforgiveness. Learn how forgiveness transforms both the forgiver and the forgiven.",
      image: "/images/charity-worship.jpg",
      slug: "the-power-of-forgiveness",
      author: "Richard van de Ruit"
    }
  ];

  const ministries = [
    {
      id: 1,
      title: "Children Ministry",
      image: "/images/ministries/children-ministry.jpg",
      description: "Creating a fun, safe environment where children learn about God's love through stories, songs, and activities that build their faith foundation."
    },
    {
      id: 2,
      title: "Worship Ministry",
      image: "/images/ministries/worship-ministry.jpg",
      description: "Leading the congregation in heartfelt worship through music, praise, and creating an atmosphere of reverence and spiritual connection."
    },
    {
      id: 3,
      title: "Family Groups Ministry",
      image: "/images/ministries/family-groups-ministry.jpg",
      description: "Building strong family bonds and community connections through small group fellowship, prayer, and mutual support in faith."
    },
    {
      id: 4,
      title: "Discipleship Equip Ministry",
      image: "/images/ministries/discipleship-equip-ministry.jpg",
      description: "Equipping believers with biblical knowledge, spiritual disciplines, and practical skills for Christian living and ministry service."
    },
    {
      id: 5,
      title: "Media and Tech Ministry",
      image: "/images/ministries/media-tech-ministry.jpg",
      description: "Supporting worship services and church communications through audio-visual technology, live streaming, and digital outreach."
    },
    {
      id: 6,
      title: "Men's Ministry",
      image: "/images/ministries/mens-ministry.jpg",
      description: "Building strong Christian men through brotherhood, accountability, service projects, and spiritual growth in community."
    },
    {
      id: 7,
      title: "Outreach Ministry",
      image: "/images/ministries/outreach-ministry.jpg",
      description: "Reaching out to the community with God's love through evangelism, charity work, and social services that make a difference."
    },
    {
      id: 8,
      title: "Women's Ministry",
      image: "/images/ministries/womens-ministry.jpg",
      description: "Empowering women to grow in faith, connect in community, and serve with purpose through fellowship and spiritual development."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Banner Section with Carousel */}
      <section className="relative min-h-screen h-screen hero-content-center overflow-hidden">
        {/* Carousel Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="hero-image"
                style={{
                  filter: 'brightness(0.6)'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-church-yellow' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg">
              {heroImages[currentSlide].title}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow">
              {heroImages[currentSlide].subtitle}
            </p>

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg mb-3 sm:mb-4 opacity-95">Join us for worship every Sunday</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center text-sm sm:text-base">
                <div className="flex items-center justify-center">
                  <FiClock className="w-4 h-4 mr-2" />
                  Prayer & Fellowship: 9:00 AM
                </div>
                <div className="flex items-center justify-center">
                  <FiClock className="w-4 h-4 mr-2" />
                  Main Service: 10:00 AM - 12:30 PM
                </div>
              </div>
              <p className="text-sm opacity-90 mt-3">Tuesday Prayer Meetings: 4:00 PM - 6:00 PM</p>
            </div>

            <div className="pt-6 sm:pt-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link 
                  to="/church-service"
                  className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl btn-hero w-full sm:w-auto border-2 sm:border-3"
                >
                  Join Us This Sunday at 10:00 AM
                </Link>
                
                <Link 
                  to="/about"
                  className="bg-transparent border-2 sm:border-3 border-white text-white hover:bg-white hover:text-church-sage-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl btn-hero w-full sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </section>


      {/* About the Church Section */}
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
                  About <span className="text-church-yellow">Our Church</span>
                </h2>
                <div className="w-20 h-1 bg-church-yellow rounded-full mb-6"></div>
              </div>
              
              <p className="text-lg text-church-gray leading-relaxed">
                Our story began almost by accident. We initially held Sunday services for the staff at the Arise Africa Guesthouse, as they were unable to attend church due to work commitments. 
                As attendance grew, we recognized a deep hunger in the Jinja community for a church that embraces 
                diversity and unity in Christ. Today, we are a richly diverse family, with people of various ethnicities, backgrounds, and life experiences coming together to worship, pray, and serve.
              </p>

              <Link 
                to="/about"
                className="inline-flex items-center bg-church-sage hover:bg-church-sage-dark text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read More About Us
                <FiArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
                  src="/images/church-welcome.jpg"
                  alt="Church Welcome"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-church-sage-dark/30 to-transparent"></div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Church Ministries Section */}
      <section className="py-20 bg-white">
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
                Connect, grow, and serve through our diverse ministry opportunities designed for every stage of life
              </p>
            </motion.div>
          </div>

          <div className="ministry-grid">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ministry-card"
              >
                <div className="relative overflow-hidden ministry-card-image">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-48 object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="ministry-card-content">
                  <h3 className="text-xl font-bold text-church-sage-dark mb-3">{ministry.title}</h3>
                  <p className="text-church-gray mb-6 leading-relaxed ministry-card-description">{ministry.description}</p>
                  
                  <div className="ministry-card-actions">
                    <Link 
                      to={
                        ministry.title === "Children Ministry" ? "/ministries/childrens-ministry" :
                        ministry.title === "Worship Ministry" ? "/ministries/worship-ministry" :
                        ministry.title === "Family Groups Ministry" ? "/ministries/family-groups" :
                        ministry.title === "Outreach Ministry" ? "/ministries/outreach-ministry" :
                        ministry.title === "Discipleship Equip Ministry" ? "/ministries/discipleship-equip" :
                        ministry.title === "Media and Tech Ministry" ? "/ministries/media-tech-ministry" :
                        ministry.title === "Men's Ministry" ? "/ministries/mens-ministry" :
                        ministry.title === "Women's Ministry" ? "/ministries/womens-ministry" :
                        "/ministries"
                      }
                      className="inline-flex items-center text-church-sage hover:text-church-sage-dark font-semibold transition-colors duration-300"
                    >
                      Learn More
                      <FiArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/ministries"
              className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore All Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sermons Section with Carousel */}
      <div className="bg-gray-50">
        <ContentCarousel
          title={<>Recent <span className="text-church-yellow">Sermons</span></>}
          subtitle="Be inspired by God's word through our powerful messages and teachings"
          items={sampleSermons}
          type="sermons"
          ctaLink="/sermons/archive"
          ctaText="View All Sermons"
        />
      </div>

      {/* Resources Section with Carousel */}
      <div className="bg-gray-50">
        <ContentCarousel
          title={<>Latest <span className="text-church-yellow">Articles</span></>}
          subtitle="Discover inspiring articles by Richard van de Ruit and other spiritual resources to deepen your faith journey"
          items={sampleArticles}
          type="articles"
          ctaLink="/resources/articles/archive"
          ctaText="View All Articles"
        />
      </div>

      {/* Upcoming Events Section with Carousel */}
      <div className="bg-white">
        <ContentCarousel
          title={<>Upcoming <span className="text-church-yellow">Events</span></>}
          subtitle="Join us for fellowship, worship, and community activities that bring us closer together"
          items={sampleEvents}
          type="events"
          ctaLink="/events/archive"
          ctaText="See Full Calendar"
        />
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <FiHeart className="w-16 h-16 mx-auto mb-8 text-church-yellow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Diverse Family?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
              Whether you're new to faith or a lifelong believer, we invite you to experience 
              the life-changing love of Jesus with us. Come as you are - everyone is welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-church-yellow hover:bg-church-yellow-dark text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
              >
                Contact Us or Visit This Sunday!
              </Link>
              <Link 
                to="/about"
                className="bg-transparent border-3 border-church-yellow text-church-yellow hover:bg-church-yellow hover:text-church-sage-dark font-bold text-lg px-12 py-5 rounded-full shadow-xl transition-all duration-300"
              >
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;