import { Link } from "react-router-dom";
import "../styles/page.css"; // Standard CSS for text pages
import React, { useState } from "react";

const Support = () => {
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
        <h1>Customer Support</h1>

        <section id="order-issues">
          <h2>Order Issues</h2>

          <h3>I have entered the wrong address.</h3>
          <p>
            We will need to fix this for you ASAP before your order gets shipped.
            Please get in touch straight away at <a href="mailto:info@acetwo.store">info@acetwo.store</a>.
            Include your order number, order details, and updated address.
            We will contact you once this has been updated.
            <strong>If your order has been shipped, unfortunately we are unable to update your order</strong>
            and you will need to reach out to the shipping provider directly.
          </p>

          <h3>I am missing an item from my order.</h3>
          <p>
            Please ensure the item isn’t lost inside the parcel. If you still can’t find it,
            contact us at <a href="mailto:info@acetwo.store">info@acetwo.store</a>.
          </p>

          <h3>I didn’t receive an order or shipping confirmation.</h3>
          <p>
            Check your junk and spam folders in case our email was filtered there.
            Tracking numbers are sent from <strong>"AUSPOT"</strong>. Mark us as SAFE
            to ensure you receive future emails. If nothing arrives, contact us at
            <a href="mailto:info@acetwo.store">info@acetwo.store</a>.
          </p>
        </section>

        <section id="returns">
          <h2>Returns &amp; Refunds</h2>

          <p>
            We only refund items if they are <strong>defective or damaged</strong>.
            All other returns will be issued as store credit.
          </p>

          <p>
            You have <strong>30 days</strong> from the date of delivery to return an item.
            To be eligible, items must be unused, in the same condition you received them,
            and in their original packaging.
          </p>

          <p>
            Once we receive and inspect the returned item, we’ll notify you of the outcome.
            If approved, a refund will be issued as store credit within 14 days.
          </p>

          <h3>Discounts &amp; Sale Items</h3>
          <ul>
            <li>
              If your order included a discount code, the relevant discount amount will be
              deducted from any credit or refund issued.
            </li>
            <li>Sale items cannot be refunded or returned.</li>
          </ul>

          <h3>Shipping Costs</h3>
          <p>
            You are responsible for paying your own return shipping costs. Shipping fees are non-refundable.
            If you're eligible for a refund, the cost of return shipping will be deducted from the total.
          </p>
        </section>

        <section id="shipping">
          <h2>Shipping</h2>

          <h3>Order Tracking</h3>
          <p>
            After your order is shipped, you'll receive an email with tracking information.
            Please allow up to 24 hours for the tracking to activate.
          </p>

          <h3>Lost or Stolen Packages</h3>
          <p>
            Once your package is handed to the carrier, we are not responsible for lost, stolen,
            or misdelivered packages. For any issues, contact the carrier directly using your tracking number.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Support;
