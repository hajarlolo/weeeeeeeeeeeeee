import React from 'react';
import './AboutStats.css';

const AboutStats = () => {
    const stats = [
        { number: '1+', label: 'Year Learning & Practice' },
        { number: '8+', label: 'Academic & Personal Projects' },
        { number: '6', label: 'Different Certificates' }
    ];

    return (
        <section className="about-stats-section" id="AboutStats">
            {/* Stats Section - EXACT OLD STYLE */}
            <div className="stats-section">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Section */}
            <div className="about-section">
                <div className="about-content">
                    <div className="about-header">
                        <h2 className="about-title">Building Functional & Elegant Web Solutions</h2>
                    </div>
                    <div className="about-text">
                        <p>Hi, I'm Hajar, a junior web developer and digital development student passionate about building dynamic, user-friendly web applications.</p>
                        <p>I work mainly with HTML, CSS, PHP, MySQL, JavaScript, and I enjoy transforming ideas into structured, functional, and visually clean web solutions. From designing responsive interfaces to developing database-driven systems, I focus on clarity, usability, and efficiency. Curious, motivated, and constantly learning, I love taking on new challenges and improving my skills through real-world projects.</p>
                        <p>Let's build something smart and impactful together.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;