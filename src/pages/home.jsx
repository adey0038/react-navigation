import nature from "../assets/nature.jpg";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h2>Welcome to the Home Page</h2>
        <p>This is the home page of our application.</p>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.img} src={nature} alt={"A nature image"} />
      </div>
    </>
  );
}
