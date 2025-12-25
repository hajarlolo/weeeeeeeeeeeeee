import React from 'react';
import './Certificates.css';

const Certificates = () => {
    // All certificates with extracted skills from your descriptions
    const certificates = [
        {
            id: 1,
            name: 'HTML – Introduction',
            organization: 'SoloLearn',
            photo: "html introduction.jpg", // Utilisez seulement le nom du fichier
            skills: ['HTML5', 'Semantic HTML', 'Forms & Inputs', 'Media Embedding', 'Lists & Tables', 'Canvas Basics'],
            description: 'Mastered foundational web page structure including semantic markup, forms, media embedding, and table creation.'
        },
        {
            id: 2,
            name: 'CSS – Introduction',
            organization: 'SoloLearn',
            photo: "css introduction.jpg",
            skills: ['CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design', 'CSS Animations', 'Box Model', 'Selectors'],
            description: 'Learned visual presentation control including modern layout systems, transitions, and responsive design principles.'
        },
        {
            id: 3,
            name: 'JavaScript – Introduction',
            organization: 'SoloLearn',
            photo: "java script introduction.jpg",
            skills: ['JavaScript ES6+', 'DOM Manipulation', 'Data Types', 'Functions & Objects', 'Control Structures', 'Variables'],
            description: 'Acquired fundamental programming concepts including DOM manipulation, functions, objects, and control flow.'
        },
        {
            id: 4,
            name: 'SQL – Introduction',
            organization: 'SoloLearn',
            photo: "sql introduction.jpg",
            skills: ['SQL Queries', 'Data Filtering', 'Aggregate Functions', 'Data Types', 'Database Fundamentals', 'Pattern Matching'],
            description: 'Gained proficiency in basic database operations, data retrieval, filtering, and aggregation techniques.'
        },
        {
            id: 5,
            name: 'SQL – Intermediate',
            organization: 'SoloLearn',
            photo: "sql intermédiaire.jpg",
            skills: ['Advanced SQL', 'Table Joins', 'Constraints', 'String Functions', 'CASE Statements', 'Data Integrity'],
            description: 'Advanced database management including multi-table operations, joins, constraints, and data manipulation functions.'
        },
        {
            id: 6,
            name: 'Beginner T-SQL Course',
            organization: 'SQL Climber',
            photo: 'sql beginner.png',
            skills: ['T-SQL', 'SQL Server', 'Stored Procedures', 'Indexes', 'Sub-queries', 'Data Management'],
            description: 'Specialized training in Microsoft SQL Server T-SQL dialect for practical database development and administration.'
        }
    ];

    // Fonction pour ouvrir l'image dans un nouvel onglet
    const openCertificateImage = (photoName) => {
        // Assurez-vous que les images sont dans le dossier public
        const imagePath = `${process.env.PUBLIC_URL}/${photoName}`;
        window.open(imagePath, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="certificates-section" id="certificates">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div className="certificate-card" key={cert.id}>
                            <div className="certificate-header">
                                <div className="organization-badge">{cert.organization}</div>
                                <button
                                    className="view-certificate-btn"
                                    onClick={() => openCertificateImage(cert.photo)}
                                    title="Voir le certificat"
                                >
                                    Voir
                                </button>
                            </div>
                            <h3 className="certificate-name">{cert.name}</h3>
                            <p className="certificate-description">{cert.description}</p>
                            <div className="skills-container">
                                <h4 className="skills-title">Skills Acquired:</h4>
                                <div className="skills-tags">
                                    {cert.skills.map((skill, index) => (
                                        <span className="skill-tag" key={index}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;