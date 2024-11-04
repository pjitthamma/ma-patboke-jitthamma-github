import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent3 from "../components/FrameComponent3";
import "./Contact.css";

const Policy: FunctionComponent = () => {
  return (
    <div className="contactP">
      <Header meubelHouseLogos05="/meubel-house-logos051@2x.png" />
      <section className="heroP">
        <h1>Policy Information</h1>
        <div className="policy-section">
          <h2>1. Payment Policy</h2>
          <p>We offer a variety of secure payment options to ensure a smooth and convenient shopping experience:</p>

          <b>Direct Bank Transfer</b>
          <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

          <b>Credit Card</b>
          <p>Pay securely using your Visa, MasterCard, or American Express. Your payment details are processed through a secure and encrypted payment gateway. Your order will be processed and shipped immediately after payment confirmation.</p>

          <b>Cash on Delivery</b>
          <p>Choose to pay in cash upon receiving your order. This option allows you to inspect the item before payment.</p>
        
      
          <h2>2. Shipping Policy</h2>
          <p>We strive to deliver your orders as quickly as possible:</p>

          <b>Processing Time:</b>
          <p>All orders are processed within 1-3 business days. During peak periods, processing times may be extended.</p>

          <b>Shipping Methods:</b>
          <p>We offer standard and expedited shipping options. Shipping rates and delivery times vary based on location and will be displayed at checkout.</p>

          <b>International Shipping:</b>
          <p>We currently ship to select countries. Please note that international orders may be subject to customs fees or import taxes, which are the responsibility of the customer.</p>

          <b>Tracking Information:</b>
          <p>Once your order is shipped, you will receive a confirmation email with a tracking number, so you can monitor your delivery's progress.</p>

          <h2>3. Privacy Policy</h2>
          <p>We respect your privacy and are committed to protecting your personal information:</p>

          <b>Information Collection:</b>
          <p>We collect personal data such as your name, email address, shipping address, and payment details to process your order. This data is only used to provide you with our services.</p>

          <b>Data Security:</b>
          <p>Your personal information is stored securely and is only shared with trusted third parties involved in the order process (e.g., payment processors, couriers).</p>

          <b>Cookies:</b>
          <p>We use cookies to enhance your browsing experience and for analytical purposes. You can choose to accept or decline cookies in your browser settings.</p>

          <div className="refund-section">
            <h2>4. Return and Refund Policy</h2>
            <p>Your satisfaction is our priority, and we offer a hassle-free return and refund process:</p>

            <b>Eligibility for Returns:</b>
            <p>If you are not completely satisfied with your purchase, you may return the item within 14 days of receiving it. To be eligible for a return, the item must be unused, in its original packaging, and in the same condition as you received it.</p>

            <b>Return Process:</b>
            <p>To initiate a return, please contact our customer service team at [email/contact info]. Once your return is approved, you will receive instructions on how to send the item back to us. Return shipping costs are the responsibility of the customer unless the item is faulty or incorrect.</p>

            <b>Refunds:</b>
            <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, a refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.</p>

            <b>Non-Refundable Items:</b>
            <p>Certain items such as personalized or custom-made furniture cannot be returned unless they are faulty.</p>

            <b>Late or Missing Refunds:</b>
            <p>If you haven’t received a refund after the stated period, please first check with your bank or credit card provider. If the issue persists, contact our customer service for assistance.</p>
          </div>

          <h2>5. Warranty Policy</h2>
          <p>We stand by the quality of our products:</p>

          <b>Warranty Coverage:</b>
          <p>Most of our products come with a 1-year warranty covering manufacturing defects. If you encounter any issues, please contact our customer service team for assistance.</p>

          <b>Exclusions:</b>
          <p>The warranty does not cover wear and tear, misuse, or damage caused by improper care.</p>

          <h2>6. Contact Information</h2>
          <p>If you have any questions or concerns regarding our policies, feel free to reach out:</p>

          <p>Email: support@funiro.com</p>
          <p>Phone: (+49) 151-5597-4761</p>
          <p>Business Hours: Monday to Friday, 9:00 AM to 6:00 PM (CET)</p>

        </div>
      </section>
      <FrameComponent3 />
    </div>
  );
};

export default Policy;
