import { useEffect, useState } from "react";
import Spinner from "../components/spinner.jsx";
import styles from "../styles/list.module.css";

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 15));
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className={styles.list}>
      <h2>List Of Items</h2>
      {data.map((item) => (
        <p className={styles.item} key={item.id}>
          {item.title}
        </p>
      ))}
    </div>
  );
}
