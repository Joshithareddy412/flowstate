import React from 'react';
import './WorkflowGallery.css';

export default function WorkflowGallery() {
  return (
    <section className="workflow-section">
      <div className="workflow-container">
        
        <div className="workflow-header">
          <div className="workflow-title-block">
            <div className="workflow-label">Workflow gallery</div>
            <p className="workflow-description">
              Explore real examples of our AI-driven workflow guidance. See how intent detection and predictive tools help streamline your decisions and routines. Browse the gallery to view how our system analyzes input and suggests next steps for smarter productivity.
            </p>
          </div>
          <a href="#" className="demo-btn">
            Demo
          </a>
        </div>

        <div className="gallery-grid">
          <GalleryCard 
            image="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6c3b43192039dbbb1f696_Guided_action_feed_202603272321.jpeg"
            title="Guided action feed"
            description="Receive curated steps based on your interests and recent activity."
          />
          <GalleryCard 
            image="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6b8bc4129dca0b7166257_668fec97-e83b-4a2b-a29f-9bc7e50d8b53.avif"
            title="Intent recognition"
            description="Our AI reviews your input to recommend the most relevant next actions."
          />
          <GalleryCard 
            image="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6c1b5a0872acb7c8126c3_Deadlines_in_phone_202603272312.jpeg"
            title="Priority insights"
            description="View urgency levels and suggested deadlines for each task."
          />
        </div>
        
        {/* Features Checklist */}
        <div className="features-checklist-grid">
          <div className="checklist-items">
            <ChecklistItem text="Get custom next steps for your goals." />
            <div className="checklist-divider"></div>
            <ChecklistItem text="Follow clear, structured action plans." />
            <div className="checklist-divider"></div>
            <ChecklistItem text="See urgency and deadlines instantly." />
          </div>
          <div className="checklist-image-wrapper">
            <img 
              src="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6c11805ff3a0be9b39b64_Wooden_sign_board_202603272309.jpeg"
              alt="Sign board"
              className="checklist-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ image, title, description }) {
  return (
    <a href="#" className="gallery-card">
      <div className="gallery-img-wrapper">
        <img 
          src={image} 
          alt={title}
          className="gallery-img"
        />
      </div>
      <h3 className="gallery-title">{title}</h3>
      <p className="gallery-desc">{description}</p>
    </a>
  );
}

function ChecklistItem({ text }) {
  return (
    <div className="checklist-item">
      <div className="checklist-icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M16.86 11H4V13H16.86L11.82 19H14.44L20.3 12L14.44 5H11.82L16.86 11Z" fill="currentColor"></path>
        </svg>
      </div>
      <span>{text}</span>
    </div>
  );
}
