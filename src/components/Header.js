import React, { useState } from "react";
import { Menu, Label } from "semantic-ui-react";

function Header(props) {
  const [state, setState] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });
    props.toggle(name);
  };
  const { activeItem } = state;

  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="basket"
        active={activeItem === "basket"}
        onClick={handleItemClick}
      >
        Basket
        <Label color="red">{props.basket.length}</Label>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
