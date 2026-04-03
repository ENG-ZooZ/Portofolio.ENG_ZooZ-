function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .main-footer {
          background: #030303;
          padding: 60px 0 30px;
          border-top: 1px solid rgba(0, 242, 255, 0.1);
          position: relative;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: 2px;
          color: white;
          text-decoration: none;
        }

        .footer-logo span {
          color: #00f2ff;
          text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
        }

        /* التنسيق الأساسي للأيقونات */
        .social-container {
          display: flex;
          gap: 15px;
        }

        .footer-social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-size: 18px;
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .footer-social-link:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
        }

        /* ألوان الـ Hover المخصصة لكل منصة */
        .whatsapp:hover { 
          color: #25D366 !important; 
          border-color: #25D366 !important;
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.3);
        }

        .github:hover { 
          color: #ffffff !important; 
          border-color: #ffffff !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

        .linkedin:hover { 
          color: #0077b5 !important; 
          border-color: #0077b5 !important;
          box-shadow: 0 0 15px rgba(0, 119, 181, 0.3);
        }

        .facebook:hover { 
          color: #1877f2 !important; 
          border-color: #1877f2 !important;
          box-shadow: 0 0 15px rgba(24, 119, 242, 0.3);
        }

        .instagram:hover { 
          color: #e4405f !important; 
          border-color: #e4405f !important;
          box-shadow: 0 0 15px rgba(228, 64, 95, 0.3);
        }

        .back-to-top {
          cursor: pointer;
          width: 40px;
          height: 40px;
          background: transparent;
          border: 1px solid rgba(0, 242, 255, 0.3);
          border-radius: 50%;
          color: #00f2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          margin-bottom: 10px;
        }

        .back-to-top:hover {
          background: #00f2ff;
          color: black;
          box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
        }

        .copyright-text {
          color: #555;
          font-size: 14px;
          margin-top: 20px;
          letter-spacing: 1px;
        }

        .footer-divider {
          width: 50px;
          height: 2px;
          background: #00f2ff;
          border-radius: 2px;
        }
      `}</style>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">

            <div className="back-to-top" onClick={scrollToTop} title="Back to Top">
              <i className="fas fa-chevron-up"></i>
            </div>

            <a href="/" className="footer-logo">
              <span>ËŇĞ</span> . <span>ŽööŽ</span>
            </a>

            <div className="footer-divider"></div>

            <div className="social-container">
              <a href="https://wa.me/201033748811" className="footer-social-link whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/eng._.zooz?igsh=MWJvcWsxb3diMWhidQ%3D%3D&utm_source=qr" className="footer-social-link instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/1avtJDgLsF/?mibextid=wwXIfr" className="footer-social-link facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/" className="footer-social-link github">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/zyad-mohamed-sobhy-7ba8b8337?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="footer-social-link linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="copyright-text">
              &copy; {currentYear} Designed & Built by <span style={{ color: '#3e9ca1' }}>ZYAD SOBHY</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;