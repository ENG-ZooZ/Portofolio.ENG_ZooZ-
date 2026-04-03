import React from 'react';

function About() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <style>{`
        .about-section {
          background: #050505;
          color: white;
          padding: 100px 0; /* تقليل البادينج الابتدائي */
          position: relative;
          overflow: hidden;
        }

        /* تحسين الإضاءة الخلفية للموبايل */
        .about-section::before {
          content: "";
          position: absolute;
          width: 300px; /* تصغير القطر للموبايل */
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%);
          top: -5%;
          right: -5%;
          filter: blur(80px);
          animation: pulse-glow 8s infinite alternate;
          z-index: 0;
        }

        @keyframes pulse-glow {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.3); }
        }

        .about-header-center {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
          padding: 0 20px; /* مسافة أمان للجوانب */
        }

        .section-tag {
          color: #329ca2;
          font-size: 12px; 
          font-weight: 800;
          letter-spacing: 3px; /* تقليل المسافات للموبايل */
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0.9;
        }

        .section-tag::before, .section-tag::after {
          content: "";
          width: 30px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #30a1a7, transparent);
        }

        .about-description {
          font-size: 1rem;
          color: #b0b0b0;
          line-height: 1.7;
          max-width: 800px;
          font-weight: 300;
        }

        .about-description b { 
          color: #00f2ff; /* تغيير اللون ليكون متناسق مع النيون */
          font-weight: 600;
        }

        /* --- LED Neon Card Effect --- */
        .stat-card-modern {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 35px;
          overflow: hidden;
          padding: 1.5px; /* تنحيف الإطار قليلاً */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          z-index: 1;
          transition: transform 0.4s ease;
        }
        
        .stat-card-modern:hover {
            transform: translateY(-10px);
        }

        .stat-card-modern::before {
          content: '';
          position: absolute;
          width: 180%;
          height: 180%;
          background-image: conic-gradient(transparent, transparent, transparent, #00f2ff);
          animation: rotate-neon 4s linear infinite;
          z-index: -2;
        }

        @keyframes rotate-neon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .card-inner {
          background: #0a0a0a;
          width: 100%;
          height: 100%;
          border-radius: 33px;
          padding: 40px 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
        }

        .icon-box-neon {
          width: 65px;
          height: 65px;
          background: rgba(0, 242, 255, 0.1);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #00f2ff;
          margin-bottom: 25px;
          border: 1px solid rgba(0, 242, 255, 0.2);
          animation: pulse-icon 2s ease-in-out infinite;
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0px rgba(0, 242, 255, 0); }
          50% { transform: scale(1.1); box-shadow: 0 0 15px rgba(0, 242, 255, 0.2); }
        }

        .stat-card-modern h3 {
          font-size: 40px; /* تصغير الخط للموبايل */
          font-weight: 900;
          margin-bottom: 8px;
          background: linear-gradient(to bottom, #fff 40%, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-card-modern h4 {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #00f2ff;
          margin-bottom: 15px;
        }

        .stat-card-modern p {
          color: #888;
          line-height: 1.6;
          font-size: 14px;
          margin: 0;
          text-align: center;
        }

        /* --- Responsive Breakpoints --- */
        @media (min-width: 768px) {
          .about-section { padding: 140px 0; }
          .about-section::before { width: 600px; height: 600px; }
          .section-tag { font-size: 14px; letter-spacing: 5px; gap: 20px; }
          .about-description { font-size: 1.15rem; }
          .card-inner { padding: 50px 40px; }
          .stat-card-modern h3 { font-size: 55px; }
          .stat-card-modern h4 { font-size: 16px; }
        }

        @media (max-width: 576px) {
            .stat-card-modern { margin: 0 10px; }
            .about-header-center { margin-bottom: 40px; }
            .icon-box-neon { width: 55px; height: 55px; font-size: 24px; }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="container">

          <div className="about-header-center">
            <span className="section-tag">About ME</span>
            <div className="about-description">
              Hi! I'm <b>Zyad Mohamed Sobhy</b>, a Full-Stack Developer dedicated to turning complex problems into elegant digital solutions.
              I specialize in building reactive <b>React</b> interfaces and robust <b>PHP, Laravel</b> backends.
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="stat-card-modern">
                <div className="card-inner">
                  <div className="icon-box-neon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3>+3</h3>
                  <h4>Years in Development</h4>
                  <p>
                    Crafting <b>scalable</b> applications using <b>React.js</b>, <b>PHP Laravel</b>,
                    and optimized <b>SQL</b> architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-12">
              <div className="stat-card-modern">
                <div className="card-inner">
                  <div className="icon-box-neon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h3>+25</h3>
                  <h4>Projects Delivered</h4>
                  <p>
                    Building intuitive platforms and dashboards, focusing on <b>UX</b>, <b>reliability</b>, and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
