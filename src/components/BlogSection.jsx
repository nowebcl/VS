import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const postImages = [
  '/image/blog/blog_01.jpg',
  '/image/blog/blog_02.jpg',
  '/image/blog/blog_03.jpg'
];

export default function BlogSection() {
  const { t } = useLanguage();
  const [currentTweet, setCurrentTweet] = useState(0);

  const posts = t.blog.posts.map((post, idx) => ({
    ...post,
    image: postImages[idx]
  }));

  const tweets = t.blog.tweets;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTweet((prev) => (prev + 1) % tweets.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [tweets.length]);

  return (
    <li className="page-blog" id="page-blog">
      <div className="main blog">
        {/* Header */}
        <div className="section-title-logo-box">
          <img src="/logoblanco.png" alt="VS International Group" className="section-title-logo" />
        </div>
        <h2 className="underline">
          <span>{t.blog.title}</span>
          <span></span>
        </h2>

        {/* Posts list */}
        <ul className="post-list post-list-1">
          {posts.map((post, index) => (
            <li key={index} className={`clear-fix tvs-reveal-up tvs-delay-${Math.min((index + 1) * 100, 400)}`}>
              {/* Date */}
              <div className="post-list-date">
                <div className="post-date-box">
                  <h3>{post.day}</h3>
                  <span>{post.month}</span>
                </div>
              </div>

              {/* Image + comments count */}
              <div className="post-list-image">
                <div className="post-comment-count-box">
                  <h3>{post.replies}</h3>
                  <span>{t.blog.repliesLabel}</span>
                </div>

                <div className="image">
                  <img src={post.image} alt={post.title} style={{ width: '100%', display: 'block' }} />
                </div>
              </div>

              {/* Content */}
              <div className="post-list-content">
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '700', lineHeight: '1.4', marginBottom: '14px', letterSpacing: '0.2px' }}>
                    {post.title}
                  </h4>

                  <p>{post.excerpt}</p>

                  <div className="post-info-bar">
                    <div className="post-info-bar-category">
                      {post.categories.map((cat, cIdx) => (
                        <React.Fragment key={cIdx}>
                          <span style={{ color: '#B0B8C1' }}>{cat}</span>
                          {cIdx < post.categories.length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="post-info-bar-author">
                      <span style={{ color: '#CBD5E1', fontWeight: '500' }}>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Twitter Timeline / News Ticker */}
      <div className="twitter-user-timeline">
        <div className="main clear-fix">
          <div className="twitter-user-timeline-list clear-fix">
            <ul className="quotation-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {tweets.map((tw, tIdx) => (
                <li
                  key={tIdx}
                  style={{
                    display: tIdx === currentTweet ? 'block' : 'none',
                    opacity: tIdx === currentTweet ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                >
                  <span className="quotation-list-icon-up" />
                  <span className="quotation-list-text">{tw.text}</span>
                  <span className="quotation-list-icon-dn" />
                  <span className="quotation-list-author" style={{ marginLeft: '10px', color: '#FFFFFF', fontWeight: '600' }}>
                    {tw.author}
                  </span>
                  <span className="quotation-list-datetime" style={{ marginLeft: '8px', color: '#B0B8C1' }}>
                    {tw.time}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pagination clear-fix" style={{ marginTop: '20px' }}>
              {tweets.map((_, idx) => (
                <a
                  key={idx}
                  href={`#tweet-${idx}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentTweet(idx);
                  }}
                  className={idx === currentTweet ? 'selected' : ''}
                  style={{
                    width: '30%',
                    marginRight: idx < 2 ? '5%' : '0',
                    cursor: 'pointer'
                  }}
                >
                  {idx + 1}
                </a>
              ))}
            </div>
          </div>
          <div className="twitter-user-timeline-background" />
        </div>
      </div>
    </li>
  );
}
