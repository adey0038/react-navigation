import heroImg from "../assets/tenor_meme.png";

export default function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of our application.</p>
      <img src={heroImg} alt="A funny face" />
    </div>
  );
}
