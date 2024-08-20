import React from 'react';
import './FeaturesSection.css'; // Import the CSS file

const features = [
  {
    title: "Drag-and-Drop Builder",
    description: "Easily create and customize your website with our intuitive drag-and-drop interface",
  },
  {
    title: "Template Library",
    description: "Choose from a variety of professionally designed templates to get started quickly",
  },
  {
    title: "Responsive Design",
    description: "Ensure your website looks great on all devices with our responsive design tools",
  },
  {
    title: "SEO Optimization",
    description: "Optimize your website for search engines to increase visibility and attract more visitors",
  },
];

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2 className="features-title">Our tool provides the best features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;