import { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [projects] = useState([
        {
            id: 1,
            title: 'Cooking Expert',
            description: 'A flavorful journey through kitchens, ingredients, and recipes that spark joy in every bite.',
            image: '/id1.png',
            link1: 'https://cooking-expert.vercel.app/',
            link2: 'https://github.com/hajarlolo/Cooking_Expert/blob/7fcb67e2e36c4fb239982b5946a5894c03d4f976/README.md'
        },
        {
            id: 2,
            title: 'ZEEPHARMACIE',
            description: 'Your go-to online pharmacy! Explore medicines, place orders, and get them delivered right to your door.',
            image: '/id2.png',
            link1: '#',
            link2: 'https://github.com/hajarlolo/ZEEPHARMACIE/blob/ec63e32b0fb30a70668f298a8c379d0d9ff348aa/README.md'
        },
        {
            id: 3,
            title: 'LoueTout',
            description: 'Easily rent and lend items with people. Track users, items, requests, and contracts all in one place.',
            image: '/id3.png',
            link1: '#',
            link2: 'https://github.com/hajarlolo/LoueTout/blob/00c2302f26d3df6f90c5e3f9135c46167ed9dc5e/README.md'
        }
    ]);

    return (
        <section id="work" className="portfolio-section">
            <div className="container">
                <h2 className="section-title">Portfolio</h2>
                <div className="projects-list">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-logo">
                                <img src={project.image} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                </div>
                                <div className="project-links">
                                    <a href={project.link1} className="project-link">
                                        View Live Demo
                                    </a>
                                    <a href={project.link2} className="project-link">
                                        View Documentation
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="portfolio-footer">
                    <a href='https://github.com/hajarlolo?tab=repositories' className="footer-btn">
                        View All Projects
                    </a>
                    <a href='#b' className='footer-btn'>
                        Download CV (FR)
                    </a>
                    <a href='#a' className='footer-btn'>
                        Download CV (EN)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;