import { useState, useEffect } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          background: rgba(0, 242, 255, 0.1); 
          color: #00f2ff;
          border: 1px solid rgba(0, 242, 255, 0.3);
          border-radius: 50%;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 242, 255, 0.1);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .back-to-top.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .back-to-top:hover {
          background: #00f2ff;
          color: #000;
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 242, 255, 0.4);
          border-color: #fff;
        }

        .back-to-top::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #00f2ff;
          opacity: 0;
          animation: pulseBtn 2s infinite;
        }

        @keyframes pulseBtn {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 18px;
          }
        }
      `}</style>

      <button 
        className={`back-to-top ${visible ? 'show' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}

export default BackToTop;