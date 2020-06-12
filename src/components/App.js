import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${page}`)
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  );
}

export default App;
