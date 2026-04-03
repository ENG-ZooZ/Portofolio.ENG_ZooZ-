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
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

const skillData = [
    { name: "HTML5", value: "100%", icon: "devicon-html5-plain colored", color: "#e34c26" },
    { name: "JavaScript", value: "100%", icon: "devicon-javascript-plain colored", color: "#f7df1e" },
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
          background: #020202;
          color: white;
          padding: 140px 0;
          overflow: hidden;
          position: relative;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-tag {
          color: #00f2ff;
          font-size: 50px;
          font-weight: 800;
          letter-spacing: 5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .section-tag::before, .section-tag::after {
          content: "";
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00f2ff, transparent);
        }

        .slider-wrapper {
          position: relative;
          margin-bottom: 100px;
          width: 100%;
        }

        .slider-wrapper::before, .slider-wrapper::after {
          content: "";
          position: absolute;
          z-index: 2;
          pointer-events: none;
        }
        .slider-wrapper::before { left: 0; background: linear-gradient(to right, #000000, transparent); }
        .slider-wrapper::after { right: 0; background: linear-gradient(to left, #020202, transparent); }

        .infinite-slider {
          display: flex;
          width: calc(200px * 16);
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * 8)); }
        }

        .slide-icon {
          width: 200px;
          text-align: center;
          opacity: 0.4;
          transition: 0.4s ease;
        }

        .slide-icon:hover {
          opacity: 1;
          transform: scale(1.2);
        }

        .slide-icon i {
          font-size: 55px;
          margin-bottom: 10px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 25px;
          border-radius: 20px;
          margin-bottom: 25px;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 242, 255, 0.3);
          background: rgba(255, 255, 255, 0.04);
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .progress-container {
          background: rgba(255, 255, 255, 0.05);
          height: 6px;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          width: 0%;
          border-radius: 10px;
          transition: width 2.5s cubic-bezier(0.1, 1, 0.1, 1);
          position: relative;
          box-shadow: 0 0 15px currentColor;
        }

      `}</style>

            <section className="skills-section" id="skills" ref={sectionRef}>
                <div className="container">

                    <div className="skills-header">
                        <span className="section-tag">Skills</span>

                    </div>

                    <div className="slider-wrapper">
                        <div className="infinite-slider">
                            {[...skillData, ...skillData].map((skill, index) => (
                                <div className="slide-icon" key={index} style={{ color: skill.color }}>
                                    <i className={skill.icon}></i>
                                    <p style={{ fontSize: '12px', fontWeight: '700', color: '#666', marginTop: '10px' }}>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {skillData.map((skill, index) => (
                            <div className="col-lg-5 col-md-6" key={index}>
                                <div className="skill-card">
                                    <div className="skill-info">
                                        <span className="skill-name">
                                            <i className={skill.icon} style={{ color: skill.color }}></i>
                                            {skill.name}
                                        </span>
                                        <span style={{ color: skill.color, fontWeight: '800' }}>
                                            {skill.value}
                                        </span>
                                    </div>
                                    <div className="progress-container">
                                        <div
                                            className="progress-bar-fill"
                                            data-value={skill.value}
                                            style={{
                                                backgroundColor: skill.color,
                                                color: skill.color
                                            }}
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
