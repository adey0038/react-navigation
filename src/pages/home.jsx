import nature from "../assets/nature.jpg";

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of our application.</p>
      <img src={nature} alt={"A nature image"} />
    </div>
  );
}
