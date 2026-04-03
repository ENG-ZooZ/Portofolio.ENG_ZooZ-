import { useState } from "react";

function Projects() {
  const projects = [
    {
      name: "Godzilla Supplement Store",
      tech: ["PHP", "PDO", "MySQL", "Bootstrap 5"],
      img: "/godzilla.png",
      live: "https://godzilla-store.infinityfree.me",
      github: "https://github.com/zyadsobhy2462007/Godzilla_Store.git"
    },
    {
      name: "Food Lover Restaurant",
      tech: ["JS", "Bootstrap 5", "HTML 5", "CSS 3"],
      img: "/restaurant.png",
      live: "https://zyadsobhy2462007.github.io/Restaurant/",
      github: "https://github.com/zyadsobhy2462007/Restaurant.git"
    },
    {
      name: "WEXy Agency",
      tech: ["Tailwind CSS", "JS", "HTML 5"],
      img: "/wexy.png",
      live: "https://zyadsobhy2462007.github.io/WEXy/",
      github: "https://github.com/zyadsobhy2462007/WEXy.git"
    },
    {
      name: "FURNI Ecommerce",
      tech: ["Bootstrap 5", "JS", "CSS 3"],
      img: "/furni.png",
      live: "https://zyadsobhy2462007.github.io/Furni/",
      github: "https://github.com/zyadsobhy2462007/Furni.git"
    },
    {
      name: "BIG COLA Landing",
      tech: ["Bootstrap 5", "CSS 3"],
      img: "/BigCola.png",
      live: "https://zyadsobhy2462007.github.io/Big_Cola/",
      github: "https://github.com/zyadsobhy2462007/Big_Cola.git"
    },
    {
      name: "STRICT Business",
      tech: ["Bootstrap 5", "HTML 5"],
      img: "/strict.png",
      live: "https://zyadsobhy2462007.github.io/strict/",
      github: "https://github.com/zyadsobhy2462007/strict.git"
    },
  ];

  return (
    <>
      <style>{`
        .projects-section {
          background: #050505;
          color: white;
          padding: 100px 0;
          position: relative;
        }

        .section-title {
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 900;
          text-align: center;
          margin-bottom: 60px;
          text-transform: uppercase;
        }

        .project-card {
          position: relative;
          background: #0a0a0a;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          border-color: #00f2ff;
          box-shadow: 0 0 30px rgba(0, 242, 255, 0.15);
          transform: translateY(-10px);
        }

        .img-box {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: 0.6s ease;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.4));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 25px;
          opacity: 0;
          transition: 0.4s ease;
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .project-card:hover .img-box img {
          transform: scale(1.05);
          filter: blur(2px);
        }

        .project-name {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #fff;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .t-badge {
          font-size: 10px;
          background: rgba(0, 242, 255, 0.1);
          color: #00f2ff;
          padding: 3px 10px;
          border-radius: 4px;
          border: 1px solid rgba(0, 242, 255, 0.2);
          text-transform: uppercase;
        }

        .action-btns {
          display: flex;
          gap: 12px;
        }

        .link-btn {
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 8px;
          transition: 0.3s;
        }

        .live-link { background: #00f2ff; color: #000; }
        .code-link { border: 1px solid #444; color: #fff; }
        
        .live-link:hover { background: #fff; }
        .code-link:hover { background: #fff; color: #000; border-color: #fff; }

        @media (max-width: 991px) {
          .card-overlay { opacity: 1; background: linear-gradient(to top, rgba(0,0,0,0.9) 40%, transparent); }
          .img-box { height: 220px; }
        }
      `}</style>

      <section className="projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">
            Featured <span style={{ color: '#00f2ff' }}>Projects</span>
          </h2>

          <div className="row g-4">
            {projects.map((proj, idx) => (
              <div className="col-lg-6 col-md-6" key={idx}>
                <div className="project-card">
                  <div className="img-box">
                    <img src={proj.img} alt={proj.name} />
                    <div className="card-overlay">
                      <h4 className="project-name">{proj.name}</h4>
                      <div className="tech-list">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="t-badge">{t}</span>
                        ))}
                      </div>
                      <div className="action-btns">
                        <a href={proj.live} target="_blank" rel="noreferrer" className="link-btn live-link">
                          Live Demo
                        </a>
                        <a href={proj.github} target="_blank" rel="noreferrer" className="link-btn code-link">
                          View Code
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
