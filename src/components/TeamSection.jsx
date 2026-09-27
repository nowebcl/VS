import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const memberImages = [
  '/image/team/raquel_cantero.jpg',
  '/image/team/carlos_ibarra.jpg',
  '/image/team/michele_carvalho.jpg',
  '/image/team/betania_biagini.jpg',
  '/image/team/fredd_ortega.jpg',
  '/image/team/eva_garcia.jpg',
  '/image/team/jorge_eger.jpg'
];

const memberSocials = [
  [
    { class: 'social-list-linkedin', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7509987707868082176' }
  ],
  [],
  [],
  [],
  [],
  [],
  []
];

export default function TeamSection() {
  const { t } = useLanguage();
  const [animated, setAnimated] = useState(false);
  const teamRef = useRef(null);

  const teamMembers = (t.team.executives || []).map((exec, idx) => ({
    ...exec,
    image: memberImages[idx] || '/image/team/raquel_cantero.jpg',
    socials: memberSocials[idx] || []
  }));

  const managementTeam = t.team.roster || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
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
        <div className="section-title-logo-box">
          <img src="/logoblanco.png" alt="VS International Group" className="section-title-logo" />
        </div>
        <h2 className="underline">
          <span>{t.team.title}</span>
          <span></span>
        </h2>

        {t.team.subtitle && (
          <p className="subheader" style={{ maxWidth: '850px', marginBottom: '35px', color: '#666' }}>
            {t.team.subtitle}
          </p>
        )}

        {/* Team members list */}
        <ul className="team-list clear-fix">
          {teamMembers.map((member, index) => (
            <li key={index}>
              <div className="layout-p-33x66 clear-fix">
                {/* Left column */}
                <div className="column-left">
                  <div className="image team-member-image" style={{ borderRadius: '2px', overflow: 'hidden' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        display: 'block',
                        borderRadius: '2px 2px 0 0',
                        objectFit: 'cover'
                      }}
                    />

                    <div className="image-description">
                      <h5>{member.name}</h5>
                      <span className="team-position">{member.role}</span>
                    </div>
                  </div>

                  {/* Social icon list */}
                  {member.socials && member.socials.length > 0 && (
                    <ul className="social-list social-list-style-1">
                      {member.socials.map((soc, sIdx) => (
                        <li key={sIdx}>
                          <a
                            href={soc.link}
                            className={soc.class}
                            target={soc.link.startsWith('http') ? '_blank' : undefined}
                            rel={soc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            title={soc.class.includes('linkedin') ? 'LinkedIn' : undefined}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Right column */}
                <div className="column-right">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="occupation-name">{member.role}</span>

                  <p>{member.bio}</p>

                  {/* Skills list */}
                  <ul className="skill-list list-0">
                    {(member.skills || []).map((skill, kIdx) => (
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

        {/* Extended Management Roster (if items present) */}
        {managementTeam.length > 0 && (
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
                  <p style={{ margin: '2px 0 0', fontWeight: '600', color: '#555' }}>{officer.role}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}
