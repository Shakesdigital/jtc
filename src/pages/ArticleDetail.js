import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiArrowLeft, FiShare2 } from 'react-icons/fi';

const ArticleDetail = () => {
  const { slug } = useParams();

  // Article data - in a real app, this would come from an API or CMS
  const articles = {
    "how-do-we-measure-devotion": {
      title: "How Do We Measure Devotion?",
      author: "Richard van de Ruit",
      date: "2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      excerpt: "Cultivating the root for better fruit.",
      content: `
        <p>In our journey of faith, we often find ourselves asking fundamental questions about our spiritual life. One such question that deserves careful consideration is: How do we measure devotion?</p>
        
        <h3>The Root of True Devotion</h3>
        <p>True devotion isn't measured by external activities or religious performance. Rather, it springs from the condition of our heart - the root from which all spiritual fruit grows. Jesus himself emphasized this when he spoke about trees being known by their fruit (Matthew 7:16).</p>
        
        <p>When we focus on cultivating the root - our relationship with God, our love for Him, and our surrender to His will - the fruit naturally follows. This includes:</p>
        <ul>
          <li>A genuine love for God and others</li>
          <li>Obedience that flows from love rather than duty</li>
          <li>Peace and joy in the midst of circumstances</li>
          <li>A transformed character that reflects Christ</li>
        </ul>
        
        <h3>Beyond External Measurements</h3>
        <p>It's tempting to measure our devotion by external markers - how often we pray, how much we read the Bible, how many church services we attend. While these practices are important, they are means to an end, not the end itself.</p>
        
        <p>The Pharisees of Jesus' time were masters of external religious performance, yet Jesus criticized them for neglecting the weightier matters of the law: justice, mercy, and faithfulness (Matthew 23:23).</p>
        
        <h3>Cultivating the Heart</h3>
        <p>So how do we cultivate this root? How do we develop genuine devotion?</p>
        <ol>
          <li><strong>Honest Self-Examination:</strong> Regularly examine your heart and motives before God.</li>
          <li><strong>Authentic Prayer:</strong> Spend time in honest conversation with God, not just requesting but listening.</li>
          <li><strong>Meditative Scripture Reading:</strong> Read God's word not just for knowledge but for transformation.</li>
          <li><strong>Community Fellowship:</strong> Engage with other believers in authentic relationships.</li>
          <li><strong>Service to Others:</strong> Let your faith express itself through love in action.</li>
        </ol>
        
        <h3>The Fruit Will Follow</h3>
        <p>When we focus on cultivating the root - our heart's devotion to God - the fruit will naturally follow. We don't need to strain to produce spiritual fruit; we need to ensure our roots are deep in God's love and grace.</p>
        
        <p>Remember, devotion is not about perfection but about direction. It's about a heart that is oriented toward God, growing in love and surrender each day. As we cultivate this root, we can trust that God will produce the fruit He desires in our lives.</p>
        
        <p><em>May we be people who measure our devotion not by external standards but by the genuine condition of our hearts before God. For it is from the heart that true spiritual fruit grows.</em></p>
      `,
      tags: ["devotion", "spiritual growth", "heart", "faith"],
      readTime: "5 min read"
    },
    "follow-him-to-calvary": {
      title: "Follow Him to Calvary",
      author: "Richard van de Ruit",
      date: "2024",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&h=400&fit=crop",
      excerpt: "Counting the cost of living for Jesus.",
      content: `
        <p>Jesus made it clear that following Him would come at a cost. "Whoever wants to be my disciple must deny themselves and take up their cross and follow me" (Matthew 16:24). This call to follow Him to Calvary is both an invitation and a challenge.</p>
        
        <h3>Understanding the Cost</h3>
        <p>When Jesus spoke about taking up our cross, He wasn't speaking metaphorically about minor inconveniences. The cross represented the ultimate sacrifice - death to self. Following Jesus to Calvary means:</p>
        
        <ul>
          <li>Dying to our selfish ambitions and desires</li>
          <li>Surrendering our will to God's will</li>
          <li>Being willing to suffer for righteousness' sake</li>
          <li>Laying down our lives in service to others</li>
        </ul>
        
        <h3>The Path of Sacrifice</h3>
        <p>The way to Calvary is a path of sacrifice. Just as Jesus "did not come to be served, but to serve, and to give his life as a ransom for many" (Matthew 20:28), we are called to live sacrificial lives.</p>
        
        <p>This doesn't mean we seek suffering for its own sake, but rather that we willingly accept the cost that comes with living according to God's standards in a fallen world.</p>
        
        <h3>The Promise Beyond the Cross</h3>
        <p>While the call to follow Jesus to Calvary speaks of sacrifice, it also carries the promise of resurrection. Just as Jesus conquered death and rose again, those who follow Him in death will also share in His resurrection life.</p>
        
        <p>"For whoever wants to save their life will lose it, but whoever loses their life for me will find it" (Matthew 16:25). This paradox is at the heart of the Christian faith - in dying to ourselves, we truly find life.</p>
        
        <h3>Daily Calvary</h3>
        <p>Following Jesus to Calvary isn't just about being willing to die physically for our faith (though some are called to that ultimate sacrifice). It's about a daily choice to die to self and live for Christ.</p>
        
        <p>This might mean:</p>
        <ul>
          <li>Forgiving those who have wronged us</li>
          <li>Speaking truth even when it's costly</li>
          <li>Serving others when we'd rather be served</li>
          <li>Choosing God's way over our own preferences</li>
        </ul>
        
        <h3>Counting the Cost</h3>
        <p>Jesus himself taught us to count the cost: "Suppose one of you wants to build a tower. Won't you first sit down and estimate the cost to see if you have enough money to complete it?" (Luke 14:28).</p>
        
        <p>Following Jesus isn't easy, and He never pretended it would be. But for those who are willing to pay the price, the reward is incomparable - eternal life with Him and the joy of participating in God's redemptive work in the world.</p>
        
        <p><em>The call to follow Jesus to Calvary is a call to the highest form of living - a life of love, sacrifice, and ultimate victory through Christ.</em></p>
      `,
      tags: ["discipleship", "sacrifice", "cross", "following Jesus"],
      readTime: "6 min read"
    },
    "the-opinion-virus": {
      title: "The Opinion Virus",
      author: "Richard van de Ruit",
      date: "2024",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c46a?w=800&h=400&fit=crop",
      excerpt: "Are we building up or voicing unhelpful judgments?",
      content: `
        <p>In our age of social media and instant communication, opinions spread faster than ever before. Like a virus, opinions can be contagious, spreading from person to person with remarkable speed. But the question we must ask ourselves is: Are our opinions building up or tearing down?</p>
        
        <h3>The Power of Words</h3>
        <p>The Bible has much to say about the power of our words. Proverbs 18:21 tells us that "The tongue has the power of life and death." Our opinions, when voiced, carry tremendous power - power to heal or harm, to build up or tear down.</p>
        
        <p>James warns us about the tongue: "Likewise, the tongue is a small part of the body, but it makes great boasts. Consider what a great forest is set on fire by a small spark" (James 3:5).</p>
        
        <h3>The Opinion Epidemic</h3>
        <p>We live in a culture where everyone has an opinion about everything, and platforms exist to broadcast these opinions to the world. This has led to what we might call an "opinion epidemic" - a constant stream of judgments, critiques, and commentary on every aspect of life.</p>
        
        <p>While having opinions isn't inherently wrong, we must examine:</p>
        <ul>
          <li>The motivation behind our opinions</li>
          <li>The manner in which we express them</li>
          <li>The effect they have on others</li>
          <li>Whether they align with Christ's character</li>
        </ul>
        
        <h3>Constructive vs. Destructive Opinions</h3>
        <p>Not all opinions are created equal. There's a significant difference between constructive feedback and destructive criticism. Constructive opinions:</p>
        <ul>
          <li>Are motivated by love and a desire to help</li>
          <li>Are offered with humility and gentleness</li>
          <li>Include practical suggestions for improvement</li>
          <li>Consider the other person's feelings and dignity</li>
        </ul>
        
        <p>Destructive opinions, on the other hand:</p>
        <ul>
          <li>Are driven by pride, anger, or superiority</li>
          <li>Seek to tear down rather than build up</li>
          <li>Show little regard for the person being criticized</li>
          <li>Often reveal more about the speaker than the subject</li>
        </ul>
        
        <h3>The Antidote</h3>
        <p>So how do we combat the opinion virus? How do we ensure our words build up rather than tear down?</p>
        
        <ol>
          <li><strong>Practice the Golden Rule:</strong> Before expressing an opinion, ask yourself, "Would I want to be spoken to in this way?"</li>
          <li><strong>Check Your Heart:</strong> Examine your motives. Are you speaking out of love or out of frustration, pride, or anger?</li>
          <li><strong>Choose Your Words Carefully:</strong> "Let your conversation be always full of grace, seasoned with salt" (Colossians 4:6).</li>
          <li><strong>Listen More Than You Speak:</strong> "Everyone should be quick to listen, slow to speak and slow to become angry" (James 1:19).</li>
          <li><strong>Focus on Building Up:</strong> "Therefore encourage one another and build each other up" (1 Thessalonians 5:11).</li>
        </ol>
        
        <h3>The Cure</h3>
        <p>The cure for the opinion virus is simple but profound: love. When our opinions are filtered through love - love for God and love for others - they become tools of edification rather than weapons of destruction.</p>
        
        <p>Paul provides the perfect prescription in Ephesians 4:29: "Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen."</p>
        
        <p><em>Let us be people whose opinions heal rather than harm, whose words build up rather than tear down. In a world infected with the opinion virus, let us be carriers of love, grace, and truth.</em></p>
      `,
      tags: ["communication", "words", "judgment", "love"],
      readTime: "5 min read"
    },
    "dunk-or-sprinkle": {
      title: "Dunk or Sprinkle?",
      author: "Richard van de Ruit",
      date: "2024",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=800&h=400&fit=crop",
      excerpt: "What is the pattern of Scripture when it comes to water baptism?",
      content: `
        <p>The question of how to properly administer baptism - by immersion (dunking) or sprinkling - has been a topic of discussion in Christian circles for centuries. To find the answer, we must turn to Scripture and examine what the Bible teaches about baptism.</p>
        
        <h3>The Biblical Meaning of Baptism</h3>
        <p>The Greek word "baptizo" (βαπτίζω) used in the New Testament literally means "to immerse," "to submerge," or "to dip." This word was commonly used in ancient Greek literature to describe the dyeing of cloth, where the fabric was completely immersed in dye.</p>
        
        <p>When the New Testament writers chose this word to describe Christian baptism, they were conveying a specific image - complete immersion in water.</p>
        
        <h3>Jesus' Example</h3>
        <p>When we look at Jesus' baptism, we see the pattern clearly established. Matthew 3:16 tells us that "As soon as Jesus was baptized, he went up out of the water." The phrase "out of the water" suggests that Jesus was in the water, not merely having water sprinkled on him.</p>
        
        <p>Mark's account is even more explicit: "Just as Jesus was coming up out of the water, he saw heaven being torn open" (Mark 1:10). This language clearly indicates immersion.</p>
        
        <h3>The Symbolism</h3>
        <p>Paul explains the deeper meaning of baptism in Romans 6:3-4: "Or don't you know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life."</p>
        
        <p>The symbolism is clear:</p>
        <ul>
          <li><strong>Going under the water</strong> represents death to sin and burial with Christ</li>
          <li><strong>Coming up from the water</strong> represents resurrection to new life in Christ</li>
        </ul>
        
        <p>This powerful symbolism is best expressed through complete immersion, which visually demonstrates the believer's death, burial, and resurrection with Christ.</p>
        
        <h3>Early Church Practice</h3>
        <p>Historical evidence shows that the early church practiced baptism by immersion. The Didache, an early Christian document from the first century, describes baptism in "living water" (flowing water like rivers) and mentions going down into the water.</p>
        
        <p>Archaeological evidence from early Christian baptisteries also supports immersion, as these structures were designed as pools deep enough for adults to stand in.</p>
        
        <h3>Other Biblical Examples</h3>
        <p>Throughout the New Testament, we see examples that support immersion:</p>
        
        <ul>
          <li><strong>Philip and the Ethiopian eunuch:</strong> "They went down into the water and Philip baptized him. When they came up out of the water..." (Acts 8:38-39)</li>
          <li><strong>John's baptisms:</strong> He baptized in the Jordan River and in Aenon "because there was plenty of water there" (John 3:23)</li>
        </ul>
        
        <h3>Addressing Common Objections</h3>
        <p>Some point to instances like the Philippian jailer (Acts 16:33) or Cornelius' household (Acts 10:47-48) as examples where sprinkling might have occurred. However:</p>
        
        <ol>
          <li>These accounts don't specify the method used</li>
          <li>The absence of detail doesn't negate the clear examples elsewhere</li>
          <li>The consistent pattern in Scripture is immersion</li>
        </ol>
        
        <h3>The Heart of the Matter</h3>
        <p>While the method of baptism is important, we must remember that the heart behind baptism is what matters most. Baptism is an act of obedience to Christ's command (Matthew 28:19) and a public declaration of faith in Him.</p>
        
        <p>However, if we desire to follow the biblical pattern as closely as possible, the evidence clearly points to baptism by immersion as the New Testament norm.</p>
        
        <h3>Conclusion</h3>
        <p>Based on the biblical evidence - the meaning of the Greek word, Jesus' example, the symbolism Paul describes, and the consistent pattern in the New Testament - baptism by immersion (dunking) appears to be the biblical method.</p>
        
        <p>This doesn't diminish the faith of those baptized differently, but it does call us to consider following the biblical pattern as closely as possible in our obedience to Christ.</p>
        
        <p><em>Let us approach baptism with reverence, understanding both its symbolic meaning and its biblical method, as we seek to follow Christ faithfully in all things.</em></p>
      `,
      tags: ["baptism", "immersion", "biblical practice", "obedience"],
      readTime: "7 min read"
    }
  };

  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-church-sage-dark mb-4">Article Not Found</h1>
          <p className="text-church-gray mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/resources" className="bg-church-sage text-white px-6 py-3 rounded-lg">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-church-sage to-church-sage-dark text-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/resources"
            className="inline-flex items-center text-church-yellow hover:text-white transition-colors duration-300 mb-8"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-90 mb-4">
              <div className="flex items-center">
                <FiUser className="w-4 h-4 mr-1" />
                {article.author}
              </div>
              <div className="flex items-center">
                <FiCalendar className="w-4 h-4 mr-1" />
                {article.date}
              </div>
              <div>{article.readTime}</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl opacity-95 mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-church-yellow bg-opacity-20 text-church-yellow px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg max-w-none"
            style={{
              '--tw-prose-headings': 'rgb(var(--church-sage-dark))',
              '--tw-prose-body': 'rgb(var(--church-gray))',
              '--tw-prose-links': 'rgb(var(--church-sage))',
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share Section */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-church-gray mb-2">Share this article:</p>
                <button className="flex items-center text-church-sage hover:text-church-sage-dark transition-colors duration-300">
                  <FiShare2 className="w-4 h-4 mr-2" />
                  Share Article
                </button>
              </div>
              <div className="text-right">
                <p className="text-church-gray text-sm">
                  By {article.author}
                </p>
                <p className="text-church-gray text-xs">
                  Courtesy of Four12 Global
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-church-sage-dark mb-8">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(articles)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedArticle]) => (
                  <Link
                    key={key}
                    to={`/resources/articles/${key}`}
                    className="block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-church-sage-dark mb-2">{relatedArticle.title}</h4>
                      <p className="text-sm text-church-gray">{relatedArticle.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;