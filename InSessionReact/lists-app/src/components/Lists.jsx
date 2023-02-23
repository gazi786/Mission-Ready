import React from 'react';
import axios from 'axios';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      showModal: false,
      newListName: "",
    };
  }

  componentDidMount() {
    axios.get('/data/listsData.json')
      .then(response => {
        this.setState({ lists: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleAddListClick = () => {
    this.setState({ showModal: true });
  };

  handleAddListSubmit = (event) => {
    event.preventDefault();
    const newList = { name: this.state.newListName, items: [] };
    const updatedLists = [...this.state.lists, newList];
    this.setState({ lists: updatedLists, showModal: false, newListName: '' });
    this.updateListsData(updatedLists);
  };

  updateListsData = (updatedLists) => {
    axios.put('data/listsData.json', updatedLists)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleNewListNameChange = (event) => {
    this.setState({ newListName: event.target.value });
  };

  render() {
  return (
    <div>
      {this.state.lists.length > 0 ? (
        <ul>
          {this.state.lists.map((list) => (
            <li key={list.name}>{list.name}</li>
          ))}
        </ul>
      ) : (
        <p>No lists available yet</p>
      )}
      <button onClick={this.handleAddListClick}>Add new list</button>
      {this.state.showModal && (
        <div>
          <form onSubmit={this.handleAddListSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.newListName}
                onChange={this.handleNewListNameChange}
              />
            </label>
            <button type="submit">Add list</button>
          </form>
        </div>
      )}
    </div>
  );
}

}

export default Lists;
