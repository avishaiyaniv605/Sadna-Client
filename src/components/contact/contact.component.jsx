import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { ContactContainer } from "./contact.styles";

class Contact extends React.Component {
  state = { name: "", email: "", description: "" };

  handleSubmit = () => {
    console.log("Got here!");
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <ContactContainer>
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            handleChange={this.handleChange}
            value={this.state.name}
            label="Full Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="description"
            type="text-area"
            handleChange={this.handleChange}
            value={this.state.description}
            label="Description"
            required
            isScrollable
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </ContactContainer>
    );
  }
}

export default Contact;
