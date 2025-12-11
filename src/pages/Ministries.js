import React from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';

const Ministries = () => {
  const ministries = [
    {
      id: 1,
      title: "Children Ministry",
      image: "/images/ministries/children-ministry.jpg",
      description: "Creating a fun, safe environment where children learn about God's love through stories, songs, and activities that build their faith foundation.",
      ageRange: "Ages 0-12",
      meetingTime: "Sundays during services & Annual kids camps",
      highlights: ["Bible Stories", "Interactive Worship", "Age-appropriate Activities", "Safe Environment"]
    },
    {
      id: 2,
      title: "Worship Ministry",
      image: "/images/ministries/worship-ministry.jpg",
      description: "Leading the congregation in heartfelt worship through music, praise, and creating an atmosphere of reverence and spiritual connection.",
      ageRange: "All Ages",
      meetingTime: "Sundays & Worship rehearsals",
      highlights: ["Contemporary Music", "Traditional Hymns", "Team Collaboration", "Spiritual Connection"]
    },
    {
      id: 3,
      title: "Family Groups Ministry",
      image: "/images/ministries/family-groups-ministry.jpg",
      description: "Building strong family bonds and community connections through small group fellowship, prayer, and mutual support in faith.",
      ageRange: "Families of All Sizes",
      meetingTime: "Weekly in Homes",
      highlights: ["Small Group Fellowship", "Family Support", "Shared Meals", "Prayer Partnership"]
    },
    {
      id: 4,
      title: "Discipleship Equip Ministry",
      image: "/images/ministries/discipleship-equip-ministry.jpg",
      description: "Equipping believers with biblical knowledge, spiritual disciplines, and practical skills for Christian living and ministry service.",
      ageRange: "Teen & Adult",
      meetingTime: "Bi-weekly Saturdays & Community outreach",
      highlights: ["Bible Study", "Leadership Training", "Mentorship", "Spiritual Gifts Discovery"]
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
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
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight responsive-text-balance text-shadow-lg text-center">
              Our Ministries: <span className="text-church-yellow">Serving Together in Faith</span>
            </h1>

            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed responsive-text-balance text-shadow text-center">
              Discover how you can get involved and grow in community through our diverse ministry opportunities
            </p>

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

                    <p className="text-church-gray mb-4 leading-relaxed text-base ministry-card-description">
                      {ministry.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-base text-church-gray">
                        <FiClock className="w-5 h-5 mr-2 text-church-sage" />
                        {ministry.meetingTime}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Ministries;