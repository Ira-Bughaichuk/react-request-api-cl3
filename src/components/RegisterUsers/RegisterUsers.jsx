import { Component } from "react";
import { nanoid } from "nanoid";
import FormRegisterUser from "../../components/RegisterUsers/FormRegisterUser/FormRegisterUser";
import RegisterUserList from "../../components/RegisterUsers/RegisterUserList/RegisterUserList";

export default class RegisterUsers extends Component {
  state = {
    items: [],
  };
  addUser = (data) => {
    this.setState(({ items }) => {
      const newUser = { ...data, id: nanoid() };
      return {
        items: [newUser, ...items],
      };
    });
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <FormRegisterUser onSubmit={this.addUser} />
        <RegisterUserList items={items} />
      </div>
    );
  }
}