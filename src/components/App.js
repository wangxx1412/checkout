import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import Page from "./Page";
import ItemList from "./ItemList";

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState();

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    let newData = [];
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${page}`)
      .then((res) => {
        for (let el of res.data) {
          newData.push({ ...el, price: generateRandomPrice() });
        }
        setItems(newData);
      });
  }, [page]);

  const changePage = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div className="App">
      <div className="main">
        <Container>
          <ItemList items={items} />
          <Page changePage={changePage} />
        </Container>
      </div>
    </div>
  );
}

export default App;
