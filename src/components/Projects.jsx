function Projects() {
  const projects = [
    {
      name: "Godzilla Supplement Store",
      tech: ["PHP", "PDO", "MySQL", "Bootstrap 5", "HTML 5", "CSS 3", "Java Script"],
      img: "./img/godzilla.png",
      live: "https://godzilla-store.infinityfree.me",
      github: "https://github.com/zyadsobhy2462007/Godzilla_Store.git"
    },
    {
      name: "Food Lover Restaurant Menu",
      tech: ["HTML 5", "CSS 3", "Java Script", "Bootstrap 5"],
      img: "./img/restaurant.png",
      live: "https://zyadsobhy2462007.github.io/Restaurant/",
      github: "https://github.com/zyadsobhy2462007/Restaurant.git"
    },
    {
      name: "WEXy",
      tech: ["HTML 5", "CSS 3", "Java Script", "Tailwind CSS"],
      img: "./img/wexy.png",
      live: "https://zyadsobhy2462007.github.io/WEXy/",
      github: "https://github.com/zyadsobhy2462007/WEXy.git"
    },

    {
      name: "FURNI",
      tech: ["HTML 5", "CSS 3", "Java Script", "Bootstrap 5"],
      img: "./img/furni.png",
      live: "https://zyadsobhy2462007.github.io/Furni/",
      github: "https://github.com/zyadsobhy2462007/Furni.git"
    },
    {
      name: "BIG COLA",
      tech: ["HTML 5", "CSS 3", "Bootstrap 5"],
      img: "./img/BigCola.png",
      live: "https://zyadsobhy2462007.github.io/Big_Cola/",
      github: "https://github.com/zyadsobhy2462007/Big_Cola.git"
    },
    {
      name: "STRICT",
      tech: ["HTML 5", "CSS 3", "Bootstrap 5"],
      img: "./img/strict.png",
      live: "https://zyadsobhy2462007.github.io/strict/",
      github: "https://github.com/zyadsobhy2462007/strict.git"
    },

  ];

  return (
    <>
      <style>{`
        .projects-section {
          background: #080808;
          color: white;
          padding: 120px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-header h2 {
          font-size: 50px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .cyan-text {
          color: #00f2ff;
          text-shadow: 0 0 10px rgba(0, 242, 255, 0.3);
        }

        /* كارت المشروع المطور */
        .project-wrapper {
          position: relative;
          border-radius: 25px;
          overflow: hidden;
          margin-bottom: 35px;
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-img-container {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .project-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.8s ease;
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 30px;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.5s ease;
        }

        .project-wrapper:hover .project-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .project-wrapper:hover .project-img-container img {
          transform: scale(1.1);
        }

        .project-info h4 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 15px;
          text-align: center;
        }

        /* الـ Tech Tags */
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 25px;
        }

        .tech-badge {
          background: rgba(0, 242, 255, 0.1);
          color: #00f2ff;
          border: 1px solid rgba(0, 242, 255, 0.2);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .btn-group-custom {
          display: flex;
          gap: 15px;
        }

        .btn-project {
          padding: 10px 25px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-live {
          background: #00f2ff;
          color: #000;
        }

        .btn-live:hover {
          background: #fff;
          box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
        }

        .btn-git {
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
        }

        .btn-git:hover {
          background: #fff;
          color: #000;
        }

        @media (max-width: 991px) {
          .card-overlay { opacity: 1; background: linear-gradient(to top, rgba(0,0,0,0.9) 40%, transparent); }
          .img-box { height: 220px; }
        }

      `}</style>

      <section className="projects-section" id="projects">
        <div className="container">
          <div className="skills-header">
            <span className="section-tag">Projects</span>

          </div>

          <div className="row">
            {projects.map((proj, index) => (
              <div className="col-lg-6 mb-4" key={index}>
                <div className="project-wrapper">
                  <div className="project-img-container">
                    <img src={proj.img} alt={proj.name} />

                    <div className="project-overlay">
                      <div className="project-info">
                        <h4>{proj.name}</h4>
                        <div className="tech-stack">
                          {proj.tech.map((t, i) => (
                            <span key={i} className="tech-badge">{t}</span>
                          ))}
                        </div>
                      </div>

                      <div className="btn-group-custom">
                        <a href={proj.live} className="btn-project btn-live" target="_blank" rel="noreferrer">
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href={proj.github} className="btn-project btn-git" target="_blank" rel="noreferrer">
                          <i className="fab fa-github"></i> Code
                        </a>
                      </div>
                    </div>

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

export default Projects;
