import React, { useState } from "react";
import { Button, Form, Input, TextArea, Segment } from "semantic-ui-react";
import axios from "axios";

function Payment(props) {
  const [order, setOrder] = useState({
    fname: "",
    lname: "",
    email: "",
    basket: props.basket,
    creditnum: "",
    cvc: "",
    note: "",
    total: props.total || 0,
  });

  const [code, SetCode] = useState();

  // Handle Form State Change
  const handleFnameChange = (e) => {
    let value = e.target.value;
    setOrder((prev) => ({
      ...prev,
      fname: value,
    }));
  };

  const handleLnameChange = (e) => {
    let value = e.target.value;
    setOrder((prev) => ({
      ...prev,
      lname: value,
    }));
  };

  const handleEmailChange = (e) => {
    let value = e.target.value;
    setOrder((prev) => ({
      ...prev,
      email: value,
    }));
  };
  const handleCreditChange = (e) => {
    let value = e.target.value;
    setOrder((prev) => ({
      ...prev,
      creditnum: value,
    }));
  };
  const handleCvcChange = (e) => {
    let value = e.target.value;
    setOrder((prev) => ({
      ...prev,
      cvc: value,
    }));
  };
  const handleNoteChange = (e) => {
    let value = e.target.value;
    setOrder((prev) => ({
      ...prev,
      note: value,
    }));
  };

  //Handle submission, Error will be catched
  const handleSubmit = (order) => {
    axios
      .post("/order", order)
      .then((res) => {
        console.log(`Won't be here`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle the discount code
  const handleCodeChange = (e) => {
    let value = e.target.value;
    SetCode(value);
    if (value == "wangxx10off") {
      setOrder((prev) => ({
        ...prev,
        total: order.total * 0.9,
      }));
    } else {
      setOrder((prev) => ({
        ...prev,
        total: props.total,
      }));
    }
  };

  return (
    <div>
      <Segment>{`Your total price is $${order.total}`}</Segment>
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            onChange={handleFnameChange}
            value={order.fname}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            control={Input}
            onChange={handleLnameChange}
            value={order.lname}
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Input
          label="Email"
          onChange={handleEmailChange}
          value={order.email}
          placeholder="joe@doe.com"
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            onChange={handleCreditChange}
            value={order.creditnum}
            label="Credit Card"
            placeholder="1234567890"
          />
          <Form.Field
            control={Input}
            onChange={handleCvcChange}
            value={order.cvc}
            label="CVC"
            placeholder="CVC"
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          onChange={handleNoteChange}
          value={order.note}
          label="Note"
          placeholder="Please leave some notes here"
        />
        <Segment>
          <Form.Field
            label="Discount Code"
            onChange={handleCodeChange}
            control={Input}
          ></Form.Field>
        </Segment>
        <Form.Field
          control={Button}
          color="red"
          onClick={() => {
            props.toggleContent("basket");
          }}
        >
          Back
        </Form.Field>
        <Form.Field
          type="submit"
          control={Button}
          onClick={() => {
            handleSubmit();
          }}
          color="orange"
        >
          Place Order
        </Form.Field>
      </Form>
    </div>
  );
}

export default Payment;
