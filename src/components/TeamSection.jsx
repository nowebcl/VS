import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const memberImages = [
  '/_sample/team/image_01.jpg',
  '/_sample/team/image_02.jpg'
];

const memberSocials = [
  [
    { class: 'social-list-linkedin', link: 'https://www.linkedin.com/in/raquel-cantero-184641158' }
  ],
  [
    { class: 'social-list-email', link: 'mailto:michele@vsinternationalllc.com' }
  ]
];

export default function TeamSection() {
  const { t } = useLanguage();
  const [animated, setAnimated] = useState(false);
  const teamRef = useRef(null);

  const teamMembers = t.team.executives.map((exec, idx) => ({
    ...exec,
    image: memberImages[idx],
    socials: memberSocials[idx]
  }));

  const managementTeam = t.team.roster;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <li className="page-team" id="page-team" ref={teamRef}>
      <div className="main">
        {/* Header */}
        <h2 className="underline">
          <span>{t.team.title}</span>
          <span></span>
        </h2>

        {/* Team members list */}
        <ul className="team-list clear-fix">
          {teamMembers.map((member, index) => (
            <li key={index}>
              <div className="layout-p-33x66 clear-fix">
                {/* Left column */}
                <div className="column-left">
                  <div className="image image-overlay-image">
                    <a href={member.image} className="image-overlay-container" onClick={(e) => e.preventDefault()}>
                      <img src={member.image} alt={member.name} style={{ width: '100%', display: 'block' }} />
                      <div className="overlay-curtain">
                        <span
                          style={{
                            width: '80px',
                            height: '80px',
                            display: 'block',
                            background: "url('/image/icon_media/image.png') no-repeat center center"
                          }}
                        />
                      </div>
                    </a>

                    <div className="image-description">
                      <h5>{member.name}</h5>
                      <span className="team-position">{member.role}</span>
                    </div>
                  </div>

                  {/* Social icon list */}
                  <ul className="social-list social-list-style-1">
                    {member.socials.map((soc, sIdx) => (
                      <li key={sIdx}>
                        <a
                          href={soc.link}
                          className={soc.class}
                          target={soc.link.startsWith('http') ? '_blank' : undefined}
                          rel={soc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          title={soc.class.includes('linkedin') ? 'LinkedIn' : 'Email'}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column */}
                <div className="column-right">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="occupation-name">{member.role}</span>

                  <p>{member.bio}</p>

                  <div style={{ margin: '8px 0 16px', fontSize: '14px', color: '#00214E', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#00214E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href={`mailto:${member.email}`} style={{ color: '#00214E', textDecoration: 'none' }}>{member.email}</a>
                  </div>

                  {/* Skills list */}
                  <ul className="skill-list list-0">
                    {member.skills.map((skill, kIdx) => (
                      <li key={kIdx}>
                        <span>{skill.name}</span>
                        <span className="progress-bar">
                          <span
                            style={{
                              width: animated ? `${skill.value}%` : '0%',
                              transition: 'width 1.4s cubic-bezier(0.25, 1, 0.5, 1)',
                              display: 'block'
                            }}
                          />
                          <span />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Extended Management Roster */}
        <div style={{ marginTop: '50px', borderTop: '1px solid #E6E6DF', paddingTop: '40px' }}>
          <h4 className="underline" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span>{t.team.rosterTitle}</span>
            <span></span>
          </h4>

          <ul className="feature-list feature-list-style-1 feature-list-icon-small feature-list-icon-left clear-fix layout-p-50x50">
            {managementTeam.map((officer, oIdx) => (
              <li key={oIdx} className={oIdx % 2 === 0 ? 'column-left' : 'column-right'}>
                <span className="icon icon-people" />
                <h5>{officer.name}</h5>
                <p style={{ margin: '2px 0 4px', fontWeight: '600', color: '#555' }}>{officer.role}</p>
                <p style={{ margin: 0 }}>
                  <a href={`mailto:${officer.email}`} style={{ color: '#00214E', textDecoration: 'none', fontSize: '13px' }}>
                    {officer.email}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
