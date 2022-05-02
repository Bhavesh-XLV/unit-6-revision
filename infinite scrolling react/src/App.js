import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`)
      .then((res) => setData([...data, ...res.data]));
  }, [page]);

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      if (page <= 4) {
        setPage(page + 1);
      }
    }
  });

  return (
    <div className="App">
      <h1>Infinite Scrolling!</h1>
      {data.map((e) => (
        <h1 key={Math.random()}>Masai Student {e.id}</h1>
      ))}
    </div>
  );
}

export default App;
