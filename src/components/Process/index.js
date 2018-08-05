import React from 'react';

import './styles.css';

const Process = () => {
  return (
    <div className="process">
      <h2 className="process__title">Our Recipe for Success</h2>
      <div className="process__grid">
        <div className="process__grid-item">
          <h3 className="process__step-title">
            <div className="process__step-number">
              <span>1</span>
            </div>
            Gathering requirements
          </h3>
          <p className="process__step-details">
            We meet with you either face to face or over the phone to create a vision of how you would like to see your business online.
            This ensures that we understand every requirement you have and that they are fully fleshed out, from end to end, before starting any development or design.
          </p>
        </div>
        <div className="process__grid-item">
          <h3 className="process__step-title">
            <div className="process__step-number">
              <span>2</span>
            </div>
            Prototyping design
          </h3>
          <p className="process__step-details">
            Through an interative process we build a design based around your requirements which depends heavily on what type of online presence you want to have. The sky is the limit here and we like to provide inspiration as to how you can further build relationships with your audience via all avenues of interaction.
          </p>
        </div>
        <div className="process__grid-item">
          <h3 className="process__step-title">
            <div className="process__step-number">
              <span>3</span>
            </div>
            Developing the website
          </h3>
          <p className="process__step-details">
            Building your website is the key to obtaining and maintaining relevancy online. We ensure your website is a shining example for search engine optimization, clean and user friendly responsive design, usability, performance and full accessibility. This helps you rank higher and reach your audience faster than your competitors.
          </p>
        </div>
        <div className="process__grid-item">
          <h3 className="process__step-title">
            <div className="process__step-number">
              <span>4</span>
            </div>
            Going live &amp; building an audience
          </h3>
          <p className="process__step-details">
            Once you're up and running online we help you to start directing traffic to your new website. Using analytics we target your specific market, opening the flood gates for all the potential customers. We can also help in running marketing campaigns and creating advertisements for your social media accounts to drive even more traffic to your site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
