import { Link } from "react-router-dom";
import "../styles/page.css"; // Standard CSS for text pages
import React, { useState } from "react";

const Policies = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="standard-container">
      <header className="header">
        <div className="header-content">
          <div className="home-links-wrapper">
            <div className="menu-toggle" onClick={() => setShowMenu(prev => !prev)}>
              ☰
            </div>

            <div className={`home-links ${showMenu ? "show" : ""}`}>
              <Link to="/home">Home</Link>
              <Link to="/support">Customer Support</Link>
              <Link to="/policies">Policies</Link>
            </div>
          </div>
          <div className="logo-container">
            <img src="/logo2.gif" alt="ACETWO Logo" className="home-logo" />
          </div>
        </div>
      </header>

      <div className="text-content">
        <h1>ACE Policies</h1>

        <h2>Return and Refund Policy</h2>
        <p>Thank you for supporting ACE! We're committed to ensuring you're happy with your order.</p>
        <p>Since we no longer process purchases directly through our website, all orders are handled manually after direct communication via Instagram or email.</p>
        
        <h3>Returns</h3>
        <p>You may request a return within 14 days of receiving your order. To be eligible, the item must be unused, in original condition, and returned with proof of purchase (e.g., your invoice or order confirmation from our email).</p>
        
        <h3>Refunds</h3>
        <p>Refunds will be issued after we've received and inspected your returned item. If approved, the refund will be processed to your original payment method within 14 business days.</p>
        
        <h3>Return Shipping</h3>
        <p>Customers are responsible for the cost of return shipping. If your refund is approved, return shipping will be deducted from the total refund amount.</p>


        <h2>Privacy Policy</h2>
        <p><em>Last updated: 13/06/2025</em></p>
        <p>Your privacy matters to us at ACE. Our website now functions solely as a visual showcase of our products and does not collect personal data or user activity.</p>
        <p>We do not request or collect any personally identifiable information via our website. However, when you communicate with us via Instagram or email, we may receive your name, handle, and contact details voluntarily provided by you. This information is used only to respond to your inquiries and complete your order.</p>
        <p>We do not use cookies or tracking tools on this site. No account registration or newsletter subscription is required.</p>
        <p>If you have concerns about your personal information shared through Instagram or email, please refer to the privacy policies of those respective platforms.</p>


        <h2>Terms and Conditions</h2>
        <p><em>Last updated: 13/06/2025</em></p>
        <ul>
          <li>The website is a <strong>visual catalog only</strong>. All purchasing inquiries are handled externally via Instagram or email.</li>
          <li>You agree not to misuse or attempt to access restricted areas of our site.</li>
          <li>All content, including product photos and descriptions, is owned by ACE and may not be reproduced without permission.</li>
        </ul>
        <p>We reserve the right to update or change these Terms at any time. Continued use of the site after any change constitutes acceptance of those updates.</p>


        <h2>Shipping Policy</h2>
        <p>Since purchases are handled manually, specific shipping details (timeframes, pricing, courier options) will be provided in your custom quote. Here's how shipping typically works:</p>
        <ul>
          <li><strong>Processing Time:</strong> Orders are usually dispatched within 5–10 business days after confirmation and payment.</li>
          <li><strong>Delivery Estimates:</strong> Timeframes vary by location and courier; we'll provide tracking details once available.</li>
          <li><strong>Shipping Costs:</strong> Quoted individually with your order.</li>
          <li><strong>Lost or Damaged Items:</strong> Once handed over to the shipping carrier, ACE is not responsible for lost or stolen parcels. We'll always provide tracking and assist you where possible.</li>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
