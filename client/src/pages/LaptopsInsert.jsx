import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class LaptopsInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      quantity: "",
    };
  }

  handleChangeInputName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputDescription = async (event) => {
    const description = event.target.value;
    this.setState({ description });
  };

  handleChangeInputQuantity = async (event) => {
    const quantity = event.target.validity.valid
      ? event.target.value
      : this.state.quantity;

    this.setState({ quantity });
  };

  handleIncludeLaptop = async () => {
    const { name, description, quantity } = this.state;
    const payload = { name, description, quantity };

    await api.insertLaptop(payload).then((res) => {
      window.alert(`Laptop inserted successfully`);
      this.setState({
        name: "",
        description: "",
        quantity: "",
      });
    });
  };

  render() {
    const { name, description, quantity } = this.state;
    return (
      <Wrapper>
        <Title>Create Laptop</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>Description: </Label>
        <InputText
          type="text"
          value={description}
          onChange={this.handleChangeInputDescription}
        />

        <Label>Quantity: </Label>
        <InputText
          type="number"
          step="0.1"
          lang="en-US"
          pattern="[0-9]+([,\.][0-9]+)?"
          value={quantity}
          onChange={this.handleChangeInputQuantity}
        />

        <Button onClick={this.handleIncludeMovie}>Add Laptop</Button>
        <CancelButton href={"/laptops/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default LaptopsInsert;
