import React from "react";
import { Grid } from "semantic-ui-react";

import Item from "./Item";

function ItemList(props) {
  return (
    <Grid doubling stackable columns={5}>
      {props.items
        ? props.items.map((item) => {
            return (
              <Item item={item} key={item.id} toggleItem={props.toggleItem} />
            );
          })
        : "Loading"}
    </Grid>
  );
}

export default ItemList;
