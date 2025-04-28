import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      section: 'President',
      members: [
        {
          name: 'Eman',
          role: 'President',
          linkedin: 'https://www.linkedin.com/in/johndoe',
          img: '/images/noprofile.png',
        },
      ],
    },
    {
      section: 'PM',
      members: [
        {
          name: 'Ellie',
          role: 'VP',
          linkedin: 'https://www.linkedin.com/in/janesmith',
          img: '/images/noprofile.png',
        },
        {
          name: 'Akshejen',
          role: 'TL',
          linkedin: 'https://www.linkedin.com/in/akshejen',
          img: '/images/noprofile.png',
        },
        {
          name: 'Jannelle',
          role: 'Member',
          linkedin: 'https://www.linkedin.com/in/jannelle',
          img: '/images/noprofile.png',
        },
        {
          name: 'Edom',
          role: 'Member',
          linkedin: 'https://www.linkedin.com/in/edom',
          img: '/images/noprofile.png',
        },
      ],
    },
    {
      section: 'IGT',
      members: [
        {
          name: 'Anzish',
          role: 'VP',
          linkedin: 'https://www.linkedin.com/in/anzish',
          img: '/images/noprofile.png',
        },
        {
          name: 'Name',  // Replace with actual name when available
          role: 'TL',
          linkedin: 'https://www.linkedin.com/in/yourlink',
          img: '/images/noprofile.png',
        },
      ],
    },
    {
      section: 'OGX',
      members: [
        {
          name: 'Sonal',
          role: 'VP',
          linkedin: 'https://www.linkedin.com/in/sonal',
          img: '/images/noprofile.png',
        },
        {
          name: 'Name',  // Replace with actual name when available
          role: 'TL',
          linkedin: 'https://www.linkedin.com/in/yourlink',
          img: '/images/noprofile.png',
        },
        {
          name: 'Mithura',
          role: 'Member',
          linkedin: 'https://www.linkedin.com/in/mithura',
          img: '/images/noprofile.png',
        },
      ],
    },
    {
      section: 'B2C',
      members: [
        {
          name: 'Tanvie',
          role: 'VP',
          linkedin: 'https://www.linkedin.com/in/tanvie',
          img: '/images/noprofile.png',
        },
        {
          name: 'Rehan',
          role: 'TL',
          linkedin: 'https://www.linkedin.com/in/rehan',
          img: '/images/noprofile.png',
        },
      ],
    },
  ];

  return (
    <div className="team-section">
      <h1>Meet the Team </h1>
      <h1>25/26</h1>

      {teamMembers.map((section, sectionIndex) => (
        <div key={sectionIndex} className="team-section__group">
          <h2>{section.section}</h2>
          <div className="team-section__members">
            {section.members.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.img}  // Placeholder image path
                  alt={member.name}
                  className="profile-pic"
                />
                <h3>{member.name}</h3>
                <p><strong>{member.role}</strong></p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="linkedin-icon"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
