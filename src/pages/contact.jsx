import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input className={styles.input} type="text" id="name" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input className={styles.input} type="email" id="email" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">
            Message:
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            required
          ></textarea>
        </div>

        <button className={styles.button} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
