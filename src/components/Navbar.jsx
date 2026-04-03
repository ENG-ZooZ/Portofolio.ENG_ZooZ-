import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .custom-navbar {
          background: ${scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent"};
          backdrop-filter: ${scrolled ? "blur(15px)" : "none"};
          padding: ${scrolled ? "12px 0" : "20px 0"};
          border-bottom: ${scrolled ? "1px solid rgba(0, 242, 255, 0.2)" : "none"};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-brand {
          color: #fff !important;
          font-size: 24px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .cyan-text {
          color: #00f2ff;
          text-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
        }

        /* --- استايل الروابط --- */
        .nav-link {
          color: #e0e0e0 !important;
          margin: 0 12px;
          font-weight: 500;
          font-size: 15px;
          position: relative;
          transition: 0.3s;
          text-align: center; 
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #00f2ff;
          transition: 0.3s;
          box-shadow: 0 0 10px #00f2ff;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 80%;
        }

        .nav-link:hover, .nav-link.active {
          color: #00f2ff !important;
        }

        .btn-cv {
          background: transparent !important;
          color: #00f2ff !important;
          border: 1px solid #00f2ff !important;
          padding: 10px 28px !important;
          border-radius: 50px !important;
          font-size: 14px;
          font-weight: 600;
          transition: 0.4s;
          text-align: center;
          display: inline-block;
        }

        .btn-cv:hover {
          color: #0b0b0b !important;
          background: #00f2ff !important;
          box-shadow: 0 0 25px rgba(0, 242, 255, 0.5);
          transform: translateY(-2px);
        }

        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(10, 10, 10, 0.98);
            margin-top: 15px;
            padding: 30px;
            border-radius: 20px;
            border: 1px solid rgba(0, 242, 255, 0.1);
            backdrop-filter: blur(20px);
          }

          .navbar-nav {
            text-align: center; 
            align-items: center;
          }

          .nav-item {
            width: 100%;
            margin-bottom: 15px;
          }

          .nav-link {
            font-size: 18px;
            padding: 10px 0;
          }

          .nav-link::after {
            bottom: 5px;
          }

          .btn-cv {
            width: 80%; 
            margin-top: 10px;
          }
        }

        .navbar-toggler {
          border: none !important;
          padding: 0;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-toggler-icon {
          filter: invert(1) sepia(1) saturate(5) hue-rotate(170deg); 
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0b0b0b; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00f2ff, #0072ff);
          border-radius: 10px;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Žø<span className="cyan-text">.</span>øŽ
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className={`nav-link text-capitalize ${active === item ? "" : ""}`}
                    href={`#${item}`}
                    onClick={() => {
                      setActive(item);
                      const navCollapse = document.getElementById('navbarNav');
                      if (window.innerWidth < 992) navCollapse.classList.remove('show');
                    }}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-4 mt-2 mt-lg-0"><a className="btn btn-cv" href="#">CV</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;