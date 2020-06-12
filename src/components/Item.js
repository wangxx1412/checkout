import React, { useState } from "react";

import { Card, Image, Grid } from "semantic-ui-react";

function Item(props) {
  const [selected, setSelected] = useState(false);
  const item = props.item;
  return (
    <Grid.Column>
      <Card
        onClick={() => {
          props.toggleItem(item);
          setSelected(!selected);
        }}
      >
        <Image src={item.thumbnailUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{`$${item.price}`}</Card.Header>
          <Card.Description>{item.title}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default Item;
