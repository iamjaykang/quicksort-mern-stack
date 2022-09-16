import React, { Component } from "react";
import api from "../api";

// class UpdateLaptop extends Component {
//   updateUser = (event) => {
//     event.preventDefault();

//     window.location.href = `/laptops/update/${this.props.id}`;
//   };

//   render() {
//     return <button className="cursor-pointer font-bold py-2 px-4 rounded" onClick={this.updateUser}>Update</button>;
//   }
// }

class DeleteLaptop extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do you want to delete the laptop ${this.props.id} permanently?`
      )
    ) {
      api.deleteLaptopById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <button className="cursor-pointer font-bold py-2 px-4 rounded" onClick={this.deleteUser}>Delete</button>;
  }
}

class LaptopsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllLaptops().then((laptops) => {
      this.setState({
        laptops: laptops.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { laptops, isLoading } = this.state;

    let showTable = true;
    if (!laptops.length) {
      showTable = false;
    }

    return (
        <div className="container">
          <>
            <table className="container">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {laptops &&
                  laptops.map((item, i) => (
                    <tr key={i}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <DeleteLaptop id={item._id} />
                      </td>
                      <td>
                        {/* <UpdateLaptop id={item._id} /> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        </div>
    );
  }
}

export default LaptopsList;
