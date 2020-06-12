import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";

import Header from "./Header";
import Page from "./Page";
import ItemList from "./ItemList";
import Basket from "./Basket";

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [content, setContent] = useState("home");
  const [basket, setBasket] = useState([]);

  // Generate random price
  const generateRandomPrice = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    let newData = [];
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      for (let el of res.data) {
        newData.push({ ...el, price: generateRandomPrice() });
      }
      setItems(newData);
    });
  }, [page]);

  const changePage = (pageNum) => {
    setPage(pageNum);
  };

  // Toggle between home and basket page
  const toggleContent = (tag) => {
    setContent(tag);
  };

  // Add or remove item to bakset
  const toggleItem = (item) => {
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
            {items.length !== 0 ? (
              <ItemList
                items={items.slice((page - 1) * 50, page * 50)}
                toggleItem={toggleItem}
              />
            ) : (
              <div>Loading</div>
            )}

            <Page changePage={changePage} />
          </div>
        )}
        {content === "basket" && (
          <Basket basket={basket} toggleItem={toggleItem} />
        )}
      </Container>
    </div>
  );
}

export default App;
