import axios from "axios";
import React from "react";

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      name: "",
      quantity: "",
      price: "",
      description: "",
      name1: "",
      quantity1: "",
      price1: "",
      description1: "",
      patching: "",
      page: 1,
    };
  }
  handleChange = (e) => {
    let { id, value } = e.target;
    this.setState({
      ...this.state,
      [id]: value,
    });
  };
  handleGetTodos() {
    const { page } = this.state;
    return axios
      .get("http://localhost:3001/todo", {
        params: {
          _page: page,
          _limit: 2,
        },
      })
      .then((res) => this.setState({ todo: res.data }));
  }
  handleADD = () => {
    const { name, quantity, price, description } = this.state;
    const payload = {
      name,
      quantity,
      price,
      description,
    };
    axios.post("http://localhost:3001/todo", payload).then(() => {
      this.handleGetTodos();
    });
    this.setState({
      name: "",
      quantity: "",
      price: "",
      description: "",
    });
  };
  componentDidMount() {
    this.handleGetTodos();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.handleGetTodos();
    }
  }
  handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3001/todo/${id}`).then(() => {
      this.handleGetTodos();
    });
  };
  handleEdit = (patching, name, quantity, price, description) => {
    this.setState({
      patching,
      name1: name,
      quantity1: quantity,
      price1: price,
      description1: description,
    });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3001/todo/${this.state.patching}`, {
        name: this.state.name1,
        quantity: this.state.quantity1,
        price: this.state.price1,
        description: this.state.description1,
      })
      .then(() => {
        this.handleGetTodos();
      });
  };

  render() {
    const {
      todo,
      name,
      quantity,
      price,
      description,
      name1,
      quantity1,
      price1,
      description1,
    } = this.state;
    return (
      <>
        <div>
          <h1>Add Grocery List</h1>
          <input
            type="text"
            placeholder="Add Name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Add Quantity"
            id="quantity"
            value={quantity}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Add Price"
            id="price"
            value={price}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Add Description"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button onClick={this.handleADD}>Add Todo</button>
          <div
            style={{
              margin: "auto",
              width: "300px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <table border="1">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Description</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                {todo?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td
                      onClick={() =>
                        this.handleEdit(
                          item.id,
                          item.name,
                          item.quantity,
                          item.price,
                          item.description
                        )
                      }
                    >
                      <b>Edit</b>
                    </td>
                    <td onClick={() => this.handleDelete(item.id)}>
                      <b>Delete</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={() => this.setState({ page: this.state.page - 1 })}
            disabled={this.state.page === 1 ? true : false}
          >
            Pre
          </button>
          <button onClick={() => this.setState({ page: this.state.page + 1 })}>
            Next
          </button>
          <h1>Edit</h1>
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Add Name"
                id="name1"
                value={name1}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type="number"
                placeholder="Add Quantity"
                id="quantity1"
                value={quantity1}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Add Price"
                id="price1"
                value={price1}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Add Description"
                id="description1"
                value={description1}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <button onClick={this.handleEditSubmit}>Save</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
