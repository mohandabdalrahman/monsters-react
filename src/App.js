import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  state = {
    monsters: [],
    searchValue: ''
  }
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const monsters = await response.json()
    console.log('App -> componentDidMount -> monsters', monsters)
    this.setState({
      monsters
    })
  }
  render() {
    const { monsters, searchValue } = this.state
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
      <div className="app">
        <input type="search" placeholder="search monster" onChange={(e) => this.setState({ searchValue: e.target.value })} />
        <CardList monsters={filterMonsters} />>
      </div>
    );
  }
}

export default App;

