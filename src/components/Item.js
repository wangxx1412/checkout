import React from "react";

import { Card, Image, Grid } from "semantic-ui-react";

function Item(props) {
  const item = props.item;
  return (
    <Grid.Column>
      <Card>
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
