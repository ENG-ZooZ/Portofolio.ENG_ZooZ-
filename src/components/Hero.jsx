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
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 242, 255, 0.08), transparent 70%);
          filter: blur(80px);
          animation: moveOrb 15s infinite alternate;
          z-index: 0;
        }

        @keyframes moveOrb {
          0% { top: 10%; left: 10%; }
          100% { top: 60%; left: 80%; }
        }

        .hero-content { position: relative; z-index: 2; }

        .hero h3 {
          font-size: clamp(50px, 8vw, 95px); 
          font-weight: 900; 
          line-height: 1;
          letter-spacing: -4px;
          margin-bottom: 25px;
          text-transform: uppercase;
          position: relative;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          background: linear-gradient(180deg, #fff 0%, #fff 50%, rgba(0, 242, 255, 0.5) 50%, #0072ff 100%);
          background-size: 100% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: flowText 5s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(0, 242, 255, 0.1));
          transition: 0.5s ease;
        }

        .hero h3:hover {
          -webkit-text-stroke: 1px #00f2ff;
          filter: drop-shadow(0 0 30px rgba(0, 242, 255, 0.4));
          letter-spacing: -2px;
        }

        @keyframes flowText {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 0% 100%; }
        }

        .hero h3::before {
          position: absolute;
          top: -20px;
          left: 5px;
          font-size: 12px;
          letter-spacing: 5px;
          color: #00f2ff;
          font-weight: 300;
          -webkit-text-stroke: 0;
        }

        .typing-container {
          font-size: 1.5rem;
          font-weight: 300;
          color: #00f2ff;
          margin-bottom: 30px;
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
          font-size: 1.1rem;
          max-width: 550px;
          line-height: 1.8;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .hero-btns { display: flex; gap: 20px; margin-bottom: 35px; }
        
        .btn-modern {
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          transition: 0.5s;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .btn-primary-neon {
          background: #00f2ff;
          color: #000;
          box-shadow: 0 10px 30px rgba(0, 242, 255, 0.2);
        }

        .btn-primary-neon:hover {
          background: #fff;
          transform: translateY(-5px);
        }

        .avatar-wrap {
          position: relative;
          width: 400px;
          height: 400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 20px;
        }

        .avatar-wrap::before {
          content: "";
          position: absolute;
          width: 150%;
          height: 150%;
          background: conic-gradient(transparent, transparent, transparent, #27b1b8);
          animation: rotateNeon 4s linear infinite;
        }

        .avatar-wrap::after {
          content: "";
          position: absolute;
          width: 150%;
          height: 150%;
          background: conic-gradient(transparent, transparent, transparent, #2b63a7);
          animation: rotateNeon 4s linear infinite;
          animation-delay: -2s;
        }

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
          transition: 0.5s ease;
        }

        .main-avatar:hover img {
          transform: scale(1.1);
        }

        .neon-badge-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1.5px; 
          border-radius: 100px;
          overflow: hidden;
          z-index: 1;
        }

        .neon-badge-wrapper::before {
          content: "";
          position: absolute;
          width: 250%;
          height: 250%;
          background: conic-gradient(transparent, #00f2ff, transparent 40%);
          animation: rotateNeon 3s linear infinite;
          z-index: -1;
        }

        .available-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #050505;
          padding: 8px 22px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #ffffff;
          text-transform: uppercase;
          box-shadow: inset 0 0 10px rgba(0, 242, 255, 0.05);
        }

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #00ff88;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 10px #00ff88; 
  display: inline-block;
}

.pulse-dot::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #00ff88;
  animation: pulse-ripple 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  opacity: 0;
}

.pulse-dot {
  animation: pulse-center 1s ease-in-out infinite;
}

@keyframes pulse-ripple {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.8;
  }
  80% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes pulse-center {
  0%, 100% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.1); filter: brightness(1.3); }
}

        @keyframes breathing {
          0%, 100% { transform: scale(1); opacity: 1; filter: brightness(1.2); }
          50% { transform: scale(1.3); opacity: 0.6; filter: brightness(1); }
        }

        @media(max-width:991px){
          .hero { text-align: center; padding: 100px 0; }
          .hero-btns { justify-content: center; }
          .avatar-wrap { width: 280px; height: 280px; margin-top: 50px; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="glow-orb"></div>

        <div className="container hero-content">
          <div className="row align-items-center">


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
              <div className="neon-badge-wrapper animate__animated animate__fadeInUp">
                <div className="available-badge">
                  <span className="pulse-dot"></span>
                  Available for projects
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="avatar-wrap animate__animated animate__zoomIn">
                <div className="main-avatar">
                  <img src="/ZooZ_Photo_Ai.jpg" alt="ZooZ" />
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
