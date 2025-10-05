/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function MissionVisionGoals() {
  return (
    <div className="container">
      <div className="header">
        <span className="our-text">OUR</span>
        <h1 className="main-title">Mission • Vision • Future Goals</h1>
      </div>

      <div className="content-section">
        <div className="left-side">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop&crop=center" 
              alt="Person in tunnel" 
              className="main-image"
            />
            <div className="person-info">
              <h3>James Canon</h3>
              <p className="role">React Developer</p>
              <p className="company">&quot;Worked at Microsoft&quot;</p>
            </div>
          </div>

          <div className="transform-button">
            <div className="button-icon">🔄</div>
            <div className="button-text">
              Transform Your Career<br />
              With Sirtifai
            </div>
          </div>

          <div className="team-image-container">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&crop=center" 
              alt="Team collaboration" 
              className="team-image"
            />
            <div className="person-info-right">
              <h3>Stacy Larin</h3>
              <p className="role">UI/UX Designer</p>
              <p className="company">&quot;Worked at Target&quot;</p>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="step">
            <div className="step-header">
              <div className="step-icon">🤝</div>
              <div>
                <span className="step-label">STEP 1</span>
                <h2 className="step-title">Mission:</h2>
              </div>
            </div>
            <p className="step-description">
              Skill → Practice → Progress – Practical skills, paid project experience, lifetime job access.
            </p>
          </div>

          <div className="step">
            <div className="step-header">
              <div className="step-icon">⚙️</div>
              <div>
                <span className="step-label">STEP 2</span>
                <h2 className="step-title">Vision:</h2>
              </div>
            </div>
            <p className="step-description">
              Job-First Education for Bharat – Careers with skills, work history, and networks for all.
            </p>
          </div>

          <div className="step">
            <div className="step-header">
              <div className="step-icon">📊</div>
              <div>
                <span className="step-label">STEP 3</span>
                <h2 className="step-title">Future Goals:</h2>
              </div>
            </div>
            <div className="goals-list">
              <p>1 Million Paid Learners by 2026.</p>
              <p>Global career access with visa sponsorship support.</p>
              <p>School-to-career readiness pipeline.</p>
              <p>Real company briefs integrated into training.</p>
              <p>AI-driven career tracking.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
        }

        .header {
          margin-bottom: 60px;
        }

        .our-text {
          color: #ff4500;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 10px;
          display: block;
        }

        .main-title {
          font-size: 48px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
          line-height: 1.2;
        }

        .content-section {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        .left-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .right-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .image-container {
          position: relative;
          display: flex;
          align-items: flex-end;
          gap: 20px;
        }

        .main-image {
          width: 200px;
          height: 300px;
          border-radius: 100px;
          object-fit: cover;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .person-info {
          flex: 1;
          padding-bottom: 20px;
        }

        .person-info h3 {
          font-size: 24px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0 0 8px 0;
        }

        .role {
          color: #16a085;
          font-size: 16px;
          font-weight: 500;
          margin: 0 0 4px 0;
        }

        .company {
          color: #7f8c8d;
          font-size: 14px;
          margin: 0;
          font-style: italic;
        }

        .transform-button {
          background: linear-gradient(135deg, #ff4500, #ff6b35);
          color: white;
          padding: 20px 30px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 10px 30px rgba(255, 69, 0, 0.3);
          cursor: pointer;
          transition: transform 0.3s ease;
          max-width: 300px;
        }

        .transform-button:hover {
          transform: translateY(-2px);
        }

        .button-icon {
          font-size: 24px;
          background: rgba(255,255,255,0.2);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-text {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .team-image-container {
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .team-image {
          width: 120px;
          height: 120px;
          border-radius: 60px;
          object-fit: cover;
        }

        .person-info-right h3 {
          font-size: 20px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0 0 8px 0;
        }

        .step {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .step-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 15px;
        }

        .step-icon {
          font-size: 24px;
          background: #f8f9fa;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-label {
          color: #ff4500;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 5px;
        }

        .step-title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
        }

        .step-description {
          color: #7f8c8d;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .goals-list {
          color: #7f8c8d;
          font-size: 16px;
          line-height: 1.8;
        }

        .goals-list p {
          margin: 0 0 8px 0;
        }

        @media (max-width: 768px) {
          .content-section {
            flex-direction: column;
            gap: 40px;
          }

          .main-title {
            font-size: 36px;
          }

          .image-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .team-image-container {
            flex-direction: column;
            text-align: center;
          }

          .transform-button {
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
}