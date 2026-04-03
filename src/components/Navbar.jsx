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

        .custom-navbar {
          background: ${scrolled ? "rgba(5, 5, 5, 0.9)" : "transparent"};
          backdrop-filter: ${scrolled ? "blur(15px)" : "none"};
          padding: ${scrolled ? "10px 0" : "20px 0"};
          border-bottom: ${scrolled ? "1px solid rgba(0, 242, 255, 0.1)" : "none"};
          transition: all 0.4s ease;
          z-index: 9999; /* لضمان ظهورها فوق كل العناصر */
        }

        .navbar-brand {
          color: #fff !important;
          font-size: 22px;
          letter-spacing: 2px;
          text-decoration: none;
        }

        .cyan-dot {
          color: #00f2ff;
          text-shadow: 0 0 10px #00f2ff;
        }

        .nav-link {
          color: #bbb !important;
          margin: 0 5px;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: 0.3s;
          position: relative;
        }

        .nav-link:hover, .nav-link.active-link {
          color: #00f2ff !important;
        }

        /* خط الـ Hover */
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background: #00f2ff;
          transition: 0.3s;
          box-shadow: 0 0 8px #00f2ff;
        }

        .nav-link:hover::after, .nav-link.active-link::after {
          width: 60%;
        }

        .btn-cv {
          border: 1px solid #00f2ff !important;
          color: #00f2ff !important;
          border-radius: 50px !important;
          padding: 8px 25px !important;
          font-size: 13px;
          font-weight: 600;
          transition: 0.4s;
          text-transform: uppercase;
        }

        .btn-cv:hover {
          background: #00f2ff !important;
          color: #000 !important;
          box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
        }

        /* --- تحسينات الموبايل --- */
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(10, 10, 10, 0.98);
            margin-top: 15px;
            padding: 25px;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            text-align: center;
          }

          .nav-item {
            margin: 15px 0;
          }

          .btn-cv {
            display: inline-block;
            width: 150px;
            margin-top: 10px;
          }
        }

        .navbar-toggler {
          border: none;
          outline: none !important;
        }

        .navbar-toggler-icon {
          filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            ŽØ<span className="cyan-dot">.</span>øŽ
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
            <ul className="navbar-nav ms-auto align-items-center">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className={`nav-link ${active === item ? "active-link" : ""}`}
                    href={`#${item}`}
                    onClick={() => {
                      setActive(item);
                      // غلق القائمة تلقائياً بعد الاختيار في الموبايل
                      if (window.innerWidth < 992) {
                        document.getElementById('navbarNav').classList.remove('show');
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-4">
                <a className="btn btn-cv" href="/path-to-your-cv.pdf" target="_blank">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
