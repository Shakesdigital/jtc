// Events data with details from provided content
export const eventsData = [
  {
    id: 1,
    title: "Bring, Share, Braai – Family Group Gathering",
    slug: "bring-share-braai-family-group",
    date: "Thursday, 9th October 2025",
    displayDate: new Date("2025-10-09"),
    time: "1:00 PM",
    location: "Richard and Sue's place",
    description: "Join us for a fun-filled Bring, Share, Braai on Thursday, 9th October (Bank Holiday) starting at 1:00 PM. This event is open to all Family Group members! Bring your favorite dish to share and enjoy a day of fellowship and great food. We can't wait to see you there!",
    excerpt: "Join us for a fun-filled Bring, Share, Braai on Thursday, 9th October (Bank Holiday) starting at 1:00 PM. Bring your favorite dish to share and enjoy a day of fellowship and great food.",
    image: "/images/events/braai-gathering.jpg",
    category: "Family Group",
    tags: ["Fellowship", "Food", "Family Group"]
  },
  {
    id: 2,
    title: "Leadership Teaching with Sue & Lance McIntosh",
    slug: "leadership-teaching-sue-lance-mcintosh",
    date: "Saturday, 11th October 2025",
    displayDate: new Date("2025-10-11"),
    time: "2:00 PM - 5:00 PM",
    location: "Our place",
    description: "We're excited to welcome Sue and Lance McIntosh, elders from Cape Town, for a special teaching session for Family Group leaders and Equip members. Note: Carpooling is required as parking is limited, and our leaders will already be on-site. The drive from Java takes about 30 minutes. Don't miss this opportunity to learn and grow together!",
    excerpt: "Welcome Sue and Lance McIntosh for a special teaching session for Family Group leaders and Equip members. Carpooling is required due to limited parking.",
    image: "/images/events/leadership-teaching.jpg",
    category: "Leadership",
    tags: ["Teaching", "Leadership", "Family Group"]
  },
  {
    id: 3,
    title: "Game Night with Worship & Fellowship",
    slug: "game-night-worship-fellowship",
    date: "Friday, 10th October 2025",
    displayDate: new Date("2025-10-10"),
    time: "Starting at 7:00 PM",
    location: "Pastor Ken's home in Bugembe",
    description: "Get ready for a night of worship, praise, sharing the Word, and fun games with our church family! Join us for an evening of laughter, connection, and spiritual encouragement!",
    excerpt: "Get ready for a night of worship, praise, sharing the Word, and fun games with our church family!",
    image: "/images/events/game-night.jpg",
    category: "Fellowship",
    tags: ["Worship", "Games", "Fellowship"]
  }
];

// Recurring events
export const recurringEvents = [
  {
    id: 4,
    title: "Weekly Family Group Fellowships",
    slug: "weekly-family-group-fellowships",
    time: "Every Wednesday",
    location: "Various family group locations around town",
    description: "Weekly Family Group Fellowships: Every Wednesday at various family group locations around town. Connect with your group for a time of fellowship and growth.",
    excerpt: "Connect with your group for a time of fellowship and growth every Wednesday at various locations around town.",
    image: "/images/events/family-group-fellowship.jpg",
    category: "Family Group",
    tags: ["Fellowship", "Weekly", "Family Group"]
  },
  {
    id: 5,
    title: "Prayer and Fasting",
    slug: "prayer-and-fasting",
    time: "Every Tuesday",
    location: "Benedith School",
    description: "Prayer and Fasting: Every Tuesday at Benedith School. Come together for a powerful time of prayer and seeking God.",
    excerpt: "Come together for a powerful time of prayer and seeking God every Tuesday at Benedith School.",
    image: "/images/events/prayer-fasting.jpg",
    category: "Prayer",
    tags: ["Prayer", "Fasting", "Weekly"]
  }
];

// Function to get all events (both one-time and recurring)
export const getAllEvents = () => {
  return [...eventsData, ...recurringEvents];
};

// Function to get only one-time events (not recurring)
export const getOneTimeEvents = () => {
  return [...eventsData].sort((a, b) => {
    if (!a.displayDate) return 1; // Events without dates go to end
    if (!b.displayDate) return -1;
    return a.displayDate - b.displayDate;
  });
};

// Function to get upcoming events
export const getUpcomingEvents = (count = 3) => {
  const now = new Date();
  const upcoming = eventsData.filter(event => {
    return event.displayDate && event.displayDate >= now;
  }).sort((a, b) => a.displayDate - b.displayDate);
  
  return upcoming.slice(0, count);
};

// Function to get recurring events only
export const getRecurringEvents = () => {
  return [...recurringEvents];
};

// Function to get event by slug
export const getEventBySlug = (slug) => {
  const allEvents = getAllEvents();
  return allEvents.find(event => event.slug === slug);
};

// Function to get events by category
export const getEventsByCategory = (category) => {
  return getAllEvents().filter(event => event.category === category);
};

// Function to get all unique categories
export const getAllCategories = () => {
  const allEvents = getAllEvents();
  return [...new Set(allEvents.map(event => event.category))];
};

// Function to get all unique tags
export const getAllTags = () => {
  const allEvents = getAllEvents();
  const tags = allEvents.flatMap(event => event.tags);
  return [...new Set(tags)];
};