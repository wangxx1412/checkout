import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";

import Header from "./Header";
import Page from "./Page";
import ItemList from "./ItemList";
import Basket from "./Basket";

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState();
  const [content, setContent] = useState("home");
  const [basket, setBasket] = useState([]);

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

  const toggleContent = (tag) => {
    setContent(tag);
  };

  const toggleItem = (item) => {
    console.log(item);
    if (basket.filter((x) => x.id === item.id).length === 0) {
      setBasket((prev) => [...prev, item]);
    } else {
      setBasket(basket.filter((x) => x.id !== item.id));
    }
  };

  return (
    <div className="App">
      <Header toggle={toggleContent} basket={basket} />
      <Container>
        {content === "home" && (
          <div>
            <ItemList items={items} toggleItem={toggleItem} />
            <Page changePage={changePage} />
          </div>
        )}
        {content === "basket" && <Basket basket={basket} />}
      </Container>
    </div>
  );
}

export default App;
