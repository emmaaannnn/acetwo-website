import { Link } from "react-router-dom";
import "../styles/page.css"; // Standard CSS for text pages

const Support = () => {
  return (
    <div className="standard-container">
      <header className="header">
        <div className="header-content">
          <div className="home-links">
            <Link to="/home">Home</Link>
            <Link to="/support">Customer Support</Link>
            <Link to="/policies">Policies</Link>
          </div>
          <div className="logo-container">
            <img src="/logo2.gif" alt="ACETWO Logo" className="home-logo" />
          </div>
        </div>
      </header>

      <div className="text-content">
        <h1>CUSTOMER SUPPORT</h1>
        
        <h2>ORDER ISSUES</h2>
        <h3>I have entered the wrong address.</h3>
        <p>
          We will need to fix this for you ASAP before your order gets shipped. Please get in touch straight away at info@acetwo.store. 
          Please include: Order number, order details, and updated address. We will contact you once this has been updated. 
          If your order has been shipped, unfortunately we are unable to update your order and you will need to reach out to the shipping provider directly.
        </p>

        <h3>I am missing an item from my order.</h3>
        <p>
          Please make sure the item isn't lost inside the parcel. 
          If you still cant find it, please contact us at info@acetwo.store
        </p>

        <h3>I didn't receive an order or shipping confirmation.</h3>
        <p>
          Make sure you have checked your junk and spam mail in case the email has been sent there. 
          Tracking numbers will be sent from "AUSPOT". You can mark us as SAFE so that you won't miss any confirmations in the future. 
          If it's not there please contact us at info@acetwo.store
        </p>
        
        <h2>RETURNS</h2>
        <h3>Returns & Refunds</h3>
        <p>
          We only refund items if they are defective or damaged. Any other means of return will be issued as store credit. 
          Once your defective item is received and inspected, we will process your credit or refund, and an email confirmation will be sent.
          You have 30 days from the date of delivery to return an item. To be eligible for a return, the item must be unused and in the same condition that you received it. 
          It must also be in the original packaging.Once we receive your returned item, we will inspect it and notify you of the status of your refund. 
          If your return is approved, we will initiate a refund as store credit. Please allow 14 days for the refund to be processed.
        </p>

        <h3>Discounts & Sale Items</h3>
        <p>
          - If your order includes a discount code, the relevant portion of the order discount will be deducted from any credit or refund amount.
        </p>
        <p>
          - Sales items cannot be refunded or returned.
        </p>

        <h3>Shipping Costs</h3>
        <p>
          You will be responsible for paying for your own shipping costs for returning your item. 
          Shipping costs are non-­refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>


        <h2>SHIPPING</h2>
        <h3>Order Tracking</h3>
        <p>
          Once your order is shipped, you will receive an email with a tracking number and a link to track your package's journey. 
          Please allow up to 24 hours for the tracking information to become available.
        </p>

        <h3>Lost or Stolen Packages</h3>
        <p>
          Once your order is handed over to the carrier, we are not responsible for lost, stolen, or misdelivered packages. 
          If you encounter any issues with the delivery of your order, please contact the carrier directly with your tracking information.
        </p>
      </div>
    </div>
  );
};

export default Support;
