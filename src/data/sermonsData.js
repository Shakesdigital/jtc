// Real sermon data from JTC Sermons
export const sermonsData = [
  {
    id: 1,
    slug: 'be-encouraged',
    title: 'Be Encouraged',
    speaker: 'Pr. Jonathan',
    date: '2025-09-28',
    dateFormatted: 'September 28, 2025',
    image: '/sermons/images/be-encouraged.png',
    summary: 'In times of difficulty and discouragement, God wants to lift your spirit and renew your strength. Discover how to find encouragement in His promises.',
    category: 'Encouragement',
    hasAudio: true,
    hasVideo: false,
    hasNotes: false,
    audioUrl: '/sermons/audio/be-encouraged.wav',
    videoUrl: null,
    notesUrl: null,
    scripture: 'Isaiah 40:28-31',
    duration: 'TBD',
    description: `Life can be overwhelming, and discouragement can weigh heavily on our hearts. But God's Word offers us powerful encouragement and hope. In this uplifting message, Pr. Jonathan shares how we can find strength in the Lord, overcome discouragement, and walk in the confidence that God is with us. Learn practical ways to encourage yourself in the Lord, draw strength from His promises, and encourage others who are going through difficult times. Remember, with God, you are never alone, and His grace is sufficient for every challenge you face.`
  },
  {
    id: 2,
    slug: 'finding-your-soulmate',
    title: 'Finding Your Soulmate',
    speaker: 'Pr. Richard',
    date: '2025-09-21',
    dateFormatted: 'September 21, 2025',
    image: '/sermons/images/finding-your-soulmate.png',
    summary: 'A powerful message about God\'s guidance in finding your life partner. Discover biblical principles for relationships and marriage, understanding God\'s plan for companionship.',
    category: 'Relationships',
    hasAudio: true,
    hasVideo: false,
    hasNotes: true,
    audioUrl: '/sermons/audio/finding-your-soulmate.m4a',
    videoUrl: null,
    notesUrl: '/sermons/notes/finding-your-soulmate.docx',
    scripture: 'Genesis 2:18-24',
    duration: 'TBD',
    description: `This sermon explores God's design for relationships and marriage. Learn how to trust God in your search for a life partner, understand biblical principles for godly relationships, and discover how God prepares us for the covenant of marriage. Whether you're single, dating, or preparing for marriage, this message offers practical wisdom and spiritual guidance for one of life's most important decisions.`
  },
  {
    id: 3,
    slug: 'wind-and-waves',
    title: 'Wind and Waves',
    speaker: 'Pr. Jonathan',
    date: '2025-09-14',
    dateFormatted: 'September 14, 2025',
    image: '/sermons/images/wind-and-waves.png',
    summary: 'When life\'s storms threaten to overwhelm you, remember that Jesus has authority over every wind and wave. Find peace in the midst of your trials.',
    category: 'Faith & Trust',
    hasAudio: true,
    hasVideo: false,
    hasNotes: false,
    audioUrl: '/sermons/audio/wind-and-waves.m4a',
    videoUrl: null,
    notesUrl: null,
    scripture: 'Mark 4:35-41',
    duration: 'TBD',
    description: `In this inspiring message, we examine the story of Jesus calming the storm and discover how His power extends over every circumstance in our lives. When you're facing life's storms - financial struggles, health challenges, relationship difficulties, or spiritual battles - Jesus speaks "Peace, be still" to your situation. Learn to trust in His authority and find rest even when the winds are howling and the waves are crashing around you.`
  },
  {
    id: 4,
    slug: 'why-are-you-hiding',
    title: 'Why Are You Hiding?',
    speaker: 'Pr. Richard',
    date: '2025-09-06',
    dateFormatted: 'September 6, 2025',
    image: '/sermons/images/why-are-you-hiding.png',
    summary: 'God is calling you out of hiding. Stop running from His presence and discover the freedom that comes from walking in the light with Him.',
    category: 'Spiritual Growth',
    hasAudio: true,
    hasVideo: false,
    hasNotes: true,
    audioUrl: '/sermons/audio/why-are-you-hiding.m4a',
    videoUrl: null,
    notesUrl: '/sermons/notes/why-are-you-hiding.docx',
    scripture: 'Genesis 3:8-10',
    duration: 'TBD',
    description: `Just as Adam and Eve hid from God in the Garden of Eden, many of us today are hiding from God's presence due to shame, guilt, fear, or sin. This transformative message addresses why we hide, what we're hiding from, and how God lovingly calls us out of hiding into His marvelous light. Discover the freedom and restoration that comes when we stop running and start walking transparently with God. No matter what you've done or where you've been, God is saying "Where are you?" - not because He doesn't know, but because He wants you back in fellowship with Him.`
  }
];

// Helper function to get sermon by slug
export const getSermonBySlug = (slug) => {
  return sermonsData.find(sermon => sermon.slug === slug);
};

// Helper function to get recent sermons
export const getRecentSermons = (count = 3) => {
  return sermonsData.slice(0, count);
};

// Helper function to get sermons by category
export const getSermonsByCategory = (category) => {
  return sermonsData.filter(sermon => sermon.category === category);
};
