import { useEffect, useState } from "react";
import Spinner from "../components/spinner.jsx";

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 20));
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <h2>List Page</h2>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
