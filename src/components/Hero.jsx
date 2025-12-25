import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="intro">Hey, I'm Hajar</p>
                        <h1>A Web Developper</h1>
                        <p className="description">
                            Transforming ideas into stunning web-sites that captivates, engages, and delivers results.
                        </p>
                        <a href="#footer" className="btn">Contact Me</a>
                    </div>
                    <div className="hero-image">
                        <div className="portrait-frame">
                            <img src="/My_Image.png"
                                alt="Hajar Lotfi - Full-Stack Developer"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;