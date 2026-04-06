export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
