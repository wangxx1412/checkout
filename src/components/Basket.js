import React, { useState } from "react";
import { Button, Segment } from "semantic-ui-react";

import ItemList from "./ItemList";
import Payment from "./Payment";

function Basket(props) {
  const [content, setContent] = useState("basket");

  const basket = props.basket;

  const calTotal = (basket) => {
    if (basket.length === 0) {
      return 0;
    } else {
      let sum = 0;
      for (let el of basket) {
        sum += el.price;
      }
      return sum;
    }
  };

  const toggleContent = (tag) => {
    setContent(tag);
  };

  return (
    <div>
      {content === "basket" && (
        <div>
          <Segment size={"big"}>
            <div style={{ marginBottom: "10px" }}>
              Yout Basket total is: ${calTotal(basket)}
            </div>
            <Button
              primary
              disabled={calTotal(basket) === 0 ? true : false}
              onClick={() => toggleContent("payment")}
              style={{ marginBottom: "10px" }}
            >
              Checkout
            </Button>
            <div>Click the item to remove it from basket.</div>
          </Segment>
          <ItemList items={basket} toggleItem={props.toggleItem} />
        </div>
      )}
      {content === "payment" && (
        <Payment
          toggleContent={toggleContent}
          basket={basket}
          total={calTotal(basket)}
        />
      )}
    </div>
  );
}

export default Basket;
