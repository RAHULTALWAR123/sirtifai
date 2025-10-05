import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaFileAlt,
  FaProjectDiagram,
  FaComments,
  FaLanguage,
  FaGlobeAmericas,
  FaPassport,
  FaPlaneDeparture,
  FaHandsHelping,
} from "react-icons/fa";

export const GlobalCareerRoadmap = () => {
  return (
    <>
      <style>{`
        .roadmap-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: 100vh;
        }

        .roadmap-title {
          font-size: 48px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          color: #2d3748;
        }

        .roadmap-timeline {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #ff6b35, #ff6b35);
          transform: translateX(-50%);
          z-index: 1;
        }

        .phase-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          position: relative;
          z-index: 2;
        }

        .phase-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #2d3748;
        }

        .phase-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          font-size: 16px;
          color: #4a5568;
          line-height: 1.5;
        }

        .phase-item:last-child {
          margin-bottom: 0;
        }

        .phase-icon {
          font-size: 20px;
          color: #ff6b35;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .milestone-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
        }

        .milestone-section {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .milestone-title {
          font-size: 18px;
          font-weight: 600;
          color: #ff6b35;
          margin-bottom: 15px;
        }

        .milestone-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 15px;
          color: #4a5568;
        }

        .milestone-item:last-child {
          margin-bottom: 0;
        }

        .milestone-check {
          width: 16px;
          height: 16px;
          background: #48bb78;
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
          position: relative;
        }

        .milestone-check::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 10px;
          font-weight: bold;
        }

        .earning-highlight {
          background: #fff5f0;
          border-left: 4px solid #ff6b35;
          padding: 15px;
          margin: 15px 0;
          border-radius: 6px;
        }

        .earning-text {
          color: #ff6b35;
          font-weight: 600;
          font-size: 15px;
        }

        @media(max-width:480px){
        .roadmap-title{
        width: 100%;
position: relative;
font-size: 32px;
letter-spacing: -0.06em;
line-height: 42px;
text-transform: capitalize;
font-weight: 400;
color: #000;
text-align: center;
display: inline-block;
margin-top: -20%
        }


        .phase-card h2 {
        font-size: 18px;
        font-weight:600;
        }
.phase-item{
 font-size: 12px;
}
 .phase-icon{
 width:12px
 }
 .milestone-title{
 font-size:12px

 }
.milestone-container{
 margin-left: -25%;
 padding:12px;
 width: 48vw;
}
 .milestone-container-2{
 margin-left: -12% !important;
 }
 .milestone-item{
 font-size: 12px;
 }
 .phase-card{
 margin-right: 5vw;
 padding:10px;
 margin-left: -2vw;
 }
 .phase-card-2{
 margin-left:-10vw;
 width: 44vw;
 }
        }
      `}</style>

      <div className="roadmap-container">
        <h1 className="roadmap-title text-2xl">18-Month Global Career Roadmap</h1>

        <div className="roadmap-timeline">
          <div className="timeline-line"></div>

          {/* Row 1 */}
          <div className="phase-card">
            <h2 className="phase-title">Months 1-9: Skill Development</h2>

            <div className="phase-item">
              <FaGraduationCap className="phase-icon" />
              Industry-focused skill training with global standards
            </div>

            <div className="phase-item">
              <FaBriefcase className="phase-icon" />
              Portfolio development with international projects
            </div>

            <div className="phase-item">
              <FaCertificate className="phase-icon" />
              NSQF certification and global skill assessment
            </div>

            <div className="phase-item">
              <FaFileAlt className="phase-icon" />
              International resume preparation
            </div>
          </div>

          <div className="milestone-container">
            <div className="milestone-section">
              <h3 className="milestone-title">Key Milestones:</h3>
              <div className="milestone-item"><div className="milestone-check"></div>Complete skill certification</div>
              <div className="milestone-item"><div className="milestone-check"></div>Build international portfolio</div>
              <div className="milestone-item"><div className="milestone-check"></div>Global resume preparation</div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="milestone-container milestone-container-2">
            <div className="milestone-section">
              <h3 className="milestone-title">Key Milestones:</h3>
              <div className="milestone-item"><div className="milestone-check"></div>Real client project experience</div>
              <div className="milestone-item"><div className="milestone-check"></div>Earn while you prepare</div>
              <div className="milestone-item"><div className="milestone-check"></div>Mock interviews with global companies</div>
            </div>
          </div>

          <div className="phase-card phase-card-2">
            <h2 className="phase-title">Months 10-15: Practice Phase</h2>

            <div className="phase-item">
              <FaProjectDiagram className="phase-icon" />
              Real client projects with international exposure
            </div>

            <div className="earning-highlight">
              <div className="earning-text">
                Earn ₹15K-₹35K/month while preparing for global roles
              </div>
            </div>

            <div className="phase-item">
              <FaComments className="phase-icon" />
              Global interview preparation and mock sessions
            </div>

            <div className="phase-item">
              <FaLanguage className="phase-icon" />
              Cultural and language preparation for target countries
            </div>
          </div>

          {/* Row 3 */}
          <div className="phase-card">
            <h2 className="phase-title">Months 16-18: Progress to Global Placement</h2>

            <div className="phase-item">
              <FaGlobeAmericas className="phase-icon" />
              Direct placement with international employers
            </div>

            <div className="phase-item">
              <FaPassport className="phase-icon" />
              Complete visa application support
            </div>

            <div className="phase-item">
              <FaPlaneDeparture className="phase-icon" />
              Relocation assistance and guidance
            </div>

            <div className="phase-item">
              <FaHandsHelping className="phase-icon" />
              Continuous support during initial months abroad
            </div>
          </div>

          <div className="milestone-container">
            <div className="milestone-section">
              <h3 className="milestone-title">Key Milestones:</h3>
              <div className="milestone-item"><div className="milestone-check"></div>International job offer</div>
              <div className="milestone-item"><div className="milestone-check"></div>Successful visa application</div>
              <div className="milestone-item"><div className="milestone-check"></div>Smooth relocation process</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
