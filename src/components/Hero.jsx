import React, { useState, useEffect } from "react";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;600;900&display=swap');

        .hero {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #050505;
          color: white;
          overflow: hidden;
          position: relative;
          padding: 80px 0; /* إضافة بادينج افتراضي */
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(0, 242, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
        }

        .glow-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 242, 255, 0.08), transparent 70%);
          filter: blur(80px);
          animation: moveOrb 15s infinite alternate;
          z-index: 0;
        }

        @keyframes moveOrb {
          0% { top: 10%; left: 10%; }
          100% { top: 60%; left: 70%; }
        }

        .hero-content { position: relative; z-index: 2; }

        .hero h3 {
          font-size: clamp(40px, 10vw, 95px); /* تحجيم مرن للعنوان */
          font-weight: 900; 
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 20px;
          text-transform: uppercase;
          position: relative;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
          background: linear-gradient(180deg, #fff 0%, #fff 50%, rgba(0, 242, 255, 0.5) 50%, #0072ff 100%);
          background-size: 100% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: flowText 5s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(0, 242, 255, 0.1));
        }

        @media (min-width: 992px) {
            .hero h3 { letter-spacing: -4px; }
        }

        @keyframes flowText {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 0% 100%; }
        }

        .typing-container {
          font-size: clamp(1.1rem, 4vw, 1.5rem);
          font-weight: 300;
          color: #00f2ff;
          margin-bottom: 25px;
          display: block;
          min-height: 1.5em;
        }

        .typing-container::after {
          content: "|";
          animation: blink 1s infinite;
        }

        @keyframes blink { 50% { opacity: 0; } }

        .hero p {
          color: #888;
          font-size: clamp(0.95rem, 3vw, 1.1rem);
          max-width: 550px;
          line-height: 1.8;
          margin-bottom: 35px;
          font-weight: 300;
        }

        .hero-btns { 
          display: flex; 
          flex-wrap: wrap; /* للسماح بالالتفاف في الشاشات الصغيرة */
          gap: 15px; 
          margin-bottom: 35px; 
        }
        
        .btn-modern {
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 12px;
          transition: 0.5s;
          text-decoration: none;
          text-align: center;
        }

        .btn-primary-neon {
          background: #00f2ff;
          color: #000;
          box-shadow: 0 10px 25px rgba(0, 242, 255, 0.15);
        }

        .avatar-wrap {
          position: relative;
          width: clamp(250px, 40vw, 380px);
          height: clamp(250px, 40vw, 380px);
          margin: 40px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 20px;
        }

        .avatar-wrap::before, .avatar-wrap::after {
          content: "";
          position: absolute;
          width: 150%;
          height: 150%;
          background: conic-gradient(transparent, transparent, transparent, #00f2ff);
          animation: rotateNeon 4s linear infinite;
        }

        .avatar-wrap::after { animation-delay: -2s; }

        @keyframes rotateNeon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .main-avatar {
          position: absolute;
          inset: 4px;
          background: #050505;
          border-radius: 16px;
          z-index: 1;
          overflow: hidden;
        }

        .main-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(110%);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #00ff88;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          box-shadow: 0 0 10px #00ff88;
          animation: pulse-center 1s ease-in-out infinite;
        }

        @keyframes pulse-center {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        /* --- Responsive Tweaks --- */
        @media(max-width:991px){
          .hero { text-align: center; }
          .hero h3 { margin-top: 20px; }
          .hero p { margin-left: auto; margin-right: auto; }
          .hero-btns { justify-content: center; }
          .avatar-wrap { margin-bottom: 30px; }
        }

        @media(max-width:480px){
          .hero-btns .btn-modern { width: 100%; } /* أزرار كاملة العرض في الموبايل الصغير */
          .hero { padding: 60px 0; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="glow-orb"></div>

        <div className="container hero-content">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            
            <div className="col-lg-7">
              <h3 className="animate__animated animate__fadeInDown">
                I Build <br />
                <span className="gradient-text">Worlds.</span>
              </h3>

              <div className="typing-container">
                {text}
              </div>

              <p className="animate__animated animate__fadeInUp">
                Hi, I'm <b>ZYAD</b>. A developer who loves crafting
                dynamic digital solutions and turning ideas into
                interactive, high-performance realities.
              </p>

              <div className="hero-btns animate__animated animate__fadeInUp">
                <a href="#contact" className="btn-modern btn-primary-neon">
                  Start a Project
                </a>
                <a href="#projects" className="btn-modern" style={{ border: '1px solid #333', color: '#fff' }}>
                  View Work
                </a>
              </div>

              <div className="neon-badge-wrapper animate__animated animate__fadeInUp" style={{ display: 'inline-block' }}>
                <div className="available-badge" style={{ background: '#111', padding: '8px 20px', borderRadius: '100px', fontSize: '11px', border: '1px solid #222' }}>
                  <span className="pulse-dot"></span>
                  Available for projects
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="avatar-wrap animate__animated animate__zoomIn">
                <div className="main-avatar">
                  <img src="/zooz.jpeg" alt="Zyad" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
