import { Component } from 'react';
import searchStar from '../../services/star-wars-api';

import Modal from './Modal/Modal';
import Search from './Search/Search';
import StarList from './StarList/StarList';

class StarWarsApp extends Component {
  state = {
    starList: [],
    search: '',
    isOpen: false,
    currentStar: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      const result = await searchStar(this.state.search);
      this.setState({ starList: result });
    }
  }

  handleToggle = (item = {}) => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      currentStar: item,
    }));
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.elements.search.value });
  };

  render() {
    return (
      <div>
        <Search onSubmit={this.handleSearch} />
        <StarList starList={this.state.starList} onClick={this.handleToggle} />
        {this.state.isOpen ? <Modal keyStar={this.state.currentStar} /> : null}
      </div>
    );
  }
}
export default StarWarsApp;