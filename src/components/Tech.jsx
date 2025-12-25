import './Tech.css';

const Tech = () => {
    const leftTech = [
        { name: 'PHP', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 85 },
        { name: 'Bootstrap', level: 60 },
        { name: 'Laravel', level: 80 },
        { name: 'MySQL', level: 95 },
        { name: 'MongoDB', level: 95 },
    ];

    const rightTech = [
        {
            name: 'Teamwork',
            level: 95,
            description: 'Collaborative academic projects requiring coordination and task delegation.'
        },
        {
            name: 'Autonomy',
            level: 90,
            description: 'Completed full web development projects independently from requirements to testing.'
        },
        {
            name: 'Problem Solving',
            level: 85,
            description: 'Acquired through debugging, fixing errors, and optimizing databases.'
        },
        {
            name: 'Time Managing',
            level: 80,
            description: 'Managing multiple projects simultaneously with strict deadlines.'
        },
        {
            name: 'Adaptability',
            level: 85,
            description: 'Learning new technologies and frameworks as needed for projects.'
        },
        {
            name: 'Responsibility',
            level: 90,
            description: 'Following specifications and applying best practices in code quality.'
        }
    ];

    return (
        <section id='Tech Stack' className="tech-section">
            <h2 className="title">My Skills</h2>
            <div className="container tech-grid">
                {/* LEFT SIDE - Technical Skills */}
                <div className="tech-left">
                    <h3 className="section-subtitle">¤ Technical Skills</h3>
                    <div className="skills-grid">
                        {leftTech.map((tech, index) => (
                            <div className="skill-circle-card" key={index}>
                                <div className="circle-progress-container">
                                    <div className="circle-progress">
                                        <div 
                                            className="circle-fill" 
                                            style={{ 
                                                background: `conic-gradient(#782b94 ${tech.level * 3.6}deg, #f0f0f0 0deg)` 
                                            }}
                                        ></div>
                                        <div className="circle-inner">
                                            <span className="circle-percentage">{tech.level}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-name">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="tech-divider"></div>

                {/* RIGHT SIDE - Soft Skills */}
                <div className="tech-right">
                    <h3 className="section-subtitle">¤ Soft Skills</h3>
                    <div className="soft-skills-grid">
                        {rightTech.map((skill, index) => (
                            <div className="soft-skill-card" key={index}>
                                <div className="soft-skill-header">
                                    <div className="circle-progress-container small">
                                        <div className="circle-progress">
                                            <div 
                                                className="circle-fill" 
                                                style={{ 
                                                    background: `conic-gradient(#782b94 ${skill.level * 3.6}deg, #f0f0f0 0deg)` 
                                                }}
                                            ></div>
                                            <div className="circle-inner">
                                                <span className="circle-percentage">{skill.level}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="soft-skill-title">{skill.name}</div>
                                </div>
                                <p className="soft-skill-description">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tech;