import { useEffect, useRef } from "react";

function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll('.progress-bar-fill');
                        bars.forEach(bar => {
                            bar.style.width = bar.getAttribute('data-value');
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) observer.observe(currentSection);

        return () => {
            if (currentSection) observer.unobserve(currentSection);
            observer.disconnect();
        };
    }, []);

    const skillData = [
        { name: "HTML5", value: "100%", icon: "devicon-html5-plain colored", color: "#e34c26" },
        { name: "JavaScript", value: "98%", icon: "devicon-javascript-plain colored", color: "#f7df1e" },
        { name: "CSS3", value: "100%", icon: "devicon-css3-plain colored", color: "#264de4" },
        { name: "Bootstrap", value: "100%", icon: "devicon-bootstrap-plain colored", color: "#7952b3" },
        { name: "Laravel", value: "88%", icon: "devicon-laravel-original colored", color: "#ff2d20" },
        { name: "React.js", value: "95%", icon: "devicon-react-original colored", color: "#61dbfb" },
        { name: "Node.js", value: "85%", icon: "devicon-nodejs-plain colored", color: "#68a063" },
        { name: "PHP", value: "95%", icon: "devicon-php-plain colored", color: "#777bb4" },
        { name: "MySQL", value: "100%", icon: "devicon-mysql-plain colored", color: "#4479a1" },
        { name: "WordPress", value: "100%", icon: "devicon-wordpress-plain colored", color: "#21759b" },
        { name: "Photoshop", value: "90%", icon: "devicon-photoshop-plain colored", color: "#31A8FF" },
        { name: "Illustrator", value: "90%", icon: "devicon-illustrator-plain colored", color: "#FF9A00" },
    ];

    return (
        <>
            <style>{`
                .skills-section {
                    background: #050505;
                    color: white;
                    padding: 120px 0;
                    overflow: hidden;
                }

                .section-tag {
                    color: #00f2ff;
                    font-size: clamp(30px, 5vw, 45px);
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-bottom: 50px;
                    text-align: center;
                    display: block;
                    letter-spacing: 3px;
                }

                /* الـ Slider المحسن */
                .slider-wrapper {
                    width: 100%;
                    margin-bottom: 80px;
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }

                .infinite-slider {
                    display: flex;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                }

                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .slide-icon {
                    width: 150px;
                    padding: 20px;
                    text-align: center;
                    filter: grayscale(1) opacity(0.5);
                    transition: 0.4s;
                }

                .slide-icon:hover {
                    filter: grayscale(0) opacity(1);
                    transform: scale(1.1);
                }

                .slide-icon i { font-size: 50px; }

                /* الـ Progress Cards */
                .skill-card {
                    background: rgba(15, 15, 15, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 20px 25px;
                    border-radius: 16px;
                    margin-bottom: 20px;
                    transition: 0.3s ease;
                }

                .skill-card:hover {
                    background: rgba(20, 20, 20, 0.8);
                    transform: translateX(10px);
                }

                .skill-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                }

                .skill-name {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 600;
                    font-size: 15px;
                }

                .progress-container {
                    background: rgba(255, 255, 255, 0.03);
                    height: 8px;
                    border-radius: 10px;
                    overflow: hidden;
                }

                .progress-bar-fill {
                    height: 100%;
                    width: 0%;
                    border-radius: 10px;
                    transition: width 2s cubic-bezier(0.22, 1, 0.36, 1);
                    box-shadow: 0 0 10px rgba(0, 242, 255, 0.2);
                }
            `}</style>

            <section className="skills-section" id="skills" ref={sectionRef}>
                <div className="container">
                    <span className="section-tag">Technical <span style={{color: '#fff'}}>Skills</span></span>

                    <div className="slider-wrapper">
                        <div className="infinite-slider">
                            {[...skillData, ...skillData].map((skill, index) => (
                                <div className="slide-icon" key={index}>
                                    <i className={skill.icon} style={{ color: skill.color }}></i>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {skillData.map((skill, index) => (
                            <div className="col-lg-5 col-md-6" key={index}>
                                <div className="skill-card" style={{ 
                                    borderLeft: `3px solid ${skill.color}33` 
                                }}>
                                    <div className="skill-info">
                                        <span className="skill-name">
                                            <i className={skill.icon} style={{ color: skill.color, fontSize: '20px' }}></i>
                                            {skill.name}
                                        </span>
                                        <span style={{ color: skill.color, fontWeight: '700' }}>{skill.value}</span>
                                    </div>
                                    <div className="progress-container">
                                        <div
                                            className="progress-bar-fill"
                                            data-value={skill.value}
                                            style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}55` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
