import { useState } from "react";

function Contact() {
    const [state, setState] = useState({
        submitting: false,
        succeeded: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState({ ...state, submitting: true });

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mkopqrko", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setState({ submitting: false, succeeded: true });
                form.reset();
                setTimeout(() => setState(prev => ({ ...prev, succeeded: false })), 5000);
            } else {
                setState({ ...state, submitting: false });
                alert("Oops! There was a problem submitting your form");
            }
        } catch (error) {
            setState({ ...state, submitting: false });
            alert("Network error, please try again later.");
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');

                .contact-hub { 
                    background: #020202; 
                    color: white; 
                    padding: 140px 0; 
                    position: relative; 
                    overflow: hidden; 
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }

                .glow-sphere { 
                    position: absolute; 
                    width: 500px; 
                    height: 500px; 
                    background: radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%); 
                    filter: blur(100px); 
                    pointer-events: none; 
                    z-index: 1;
                }
                .sphere-1 { top: -10%; right: -5%; }
                .sphere-2 { bottom: -10%; left: -5%; }

                .contact-title { 
                    font-family: 'Syncopate', sans-serif;
                    font-size: clamp(35px, 5vw, 55px); 
                    font-weight: 500; 
                    line-height: 1; 
                    margin-bottom: 50px;
                }

                .contact-card-container { 
                    position: relative; 
                    padding: 2px; 
                    border-radius: 32px; 
                    z-index: 2; 
                    background: rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                }

                .contact-card-container::before { 
                    content: ''; 
                    position: absolute; 
                    top: -50%; left: -50%; 
                    width: 200%; height: 200%; 
                    background: conic-gradient(from 0deg, transparent 0 300deg, #00f2ff 360deg); 
                    animation: rotate-border 4s linear infinite; 
                    z-index: -1; 
                }

                @keyframes rotate-border { 100% { transform: rotate(360deg); } }

                .contact-box { 
                    background: #080808; 
                    padding: 60px; 
                    border-radius: 30px; 
                    backdrop-filter: blur(30px);
                }

                .input-group-modern { position: relative; margin-bottom: 35px; }

                .input-modern { 
                    width: 100%; 
                    background: rgba(255, 255, 255, 0.03); 
                    border: 1px solid rgba(255, 255, 255, 0.08); 
                    padding: 22px; 
                    border-radius: 16px; 
                    color: white; 
                    font-size: 16px; 
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .input-modern:focus { 
                    outline: none; 
                    background: rgba(0, 242, 255, 0.02); 
                    border-color: #00f2ff;
                    box-shadow: 0 0 25px rgba(0, 242, 255, 0.15);
                }

                .label-modern { 
                    position: absolute; 
                    left: 22px; top: 22px; 
                    color: #555; 
                    pointer-events: none; 
                    transition: 0.3s all; 
                }

                .input-modern:focus + .label-modern, 
                .input-modern:not(:placeholder-shown) + .label-modern { 
                    transform: translateY(-45px) scale(0.85); 
                    color: #00f2ff; 
                    font-weight: 700;
                }

                .submit-btn-pro { 
                    background: #00f2ff; 
                    border: none; 
                    padding: 22px; 
                    border-radius: 16px; 
                    color: #000; 
                    font-weight: 800; 
                    width: 100%; 
                    cursor: pointer; 
                    transition: 0.5s; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    gap: 15px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .submit-btn-pro:hover:not(:disabled) { 
                    background: #fff; 
                    transform: translateY(-5px); 
                    box-shadow: 0 15px 40px rgba(0, 242, 255, 0.4); 
                }

                .contact-info-footer { 
                    margin-top: 50px; 
                    padding-top: 30px; 
                    border-top: 1px solid rgba(255,255,255,0.05); 
                }

                .success-msg { 
                    background: rgba(0, 255, 136, 0.1);
                    color: #00ff88; 
                    padding: 20px;
                    border-radius: 12px;
                    text-align: center; 
                    margin-top: 25px; 
                    font-weight: 600; 
                    border: 1px solid rgba(0, 255, 136, 0.2);
                    animation: slideIn 0.5s ease forwards; 
                }

                @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

                @media (max-width: 991px) {
                    .contact-box { padding: 40px 30px; }
                    .contact-title { text-align: center; }
                    .col-lg-5 { text-align: center; margin-bottom: 50px; }
                }
            `}</style>

            <section className="contact-hub" id="contact">
                <div className="glow-sphere sphere-1"></div>
                <div className="glow-sphere sphere-2"></div>

                <div className="container">
                    <div className="skills-header">
                        <span className="section-tag">Contact With Me</span>
                    </div>
                    <div className="row align-items-center">

                        <div className="col-lg-5">
                            <h2 className="contact-title">
                                Have a project? <br />
                                <span style={{ color: '#00f2ff', WebkitTextStroke: '1px #00f2ff', WebkitTextFillColor: 'transparent' }}>Let's talk.</span>
                            </h2>
                            <p style={{ color: '#888', fontSize: '18px', lineHeight: '1.7' }} className="mb-5">
                                Contact With Me and let's Start Professional Project.
                            </p>
                            <div className="contact-info-footer">
                                <span style={{ color: '#444', fontSize: '15px', fontWeight: 900, letterSpacing: '3px' }}> Get in Touch</span>
                                <p style={{ color: '#fff', fontSize: '15px', marginTop: '10px' }}>zizosobhy306@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-card-container">
                                <div className="contact-box">
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group-modern">
                                            <input type="text" name="name" className="input-modern" placeholder=" " required />
                                            <label className="label-modern">Your Full Name</label>
                                        </div>
                                        <div className="input-group-modern">
                                            <input type="email" name="email" className="input-modern" placeholder=" " required />
                                            <label className="label-modern">Email Address</label>
                                        </div>
                                        <div className="input-group-modern">
                                            <textarea name="message" className="input-modern" rows="4" placeholder=" " required></textarea>
                                            <label className="label-modern">Tell me about the project</label>
                                        </div>
                                        <button type="submit" className="submit-btn-pro" disabled={state.submitting}>
                                            {state.submitting ? "Sending Signal..." : "Launch Message"}
                                            <i className="fas fa-paper-plane"></i>
                                        </button>

                                        {state.succeeded && (
                                            <div className="success-msg">
                                                Signal Received! I'll get back to you shortly. 🚀
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;