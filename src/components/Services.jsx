import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Building dynamic and well-structured websites using HTML, CSS, PHP, and JavaScript.'
        },
        {
            title: 'Backend & Database Management',
            description: 'Designing and managing MySQL databases with secure and efficient PHP backend logic.'
        },
        {
            title: 'Responsive Web Design',
            description: 'Creating responsive interfaces that adapt smoothly to all screen sizes and devices.'
        },
        {
            title: 'Web Applications & Systems',
            description: 'Developing practical web applications such as management systems, forms, and dashboards.'
        }
    ];


    return (
        <section id="services">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card card" key={index}>
                            <div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;