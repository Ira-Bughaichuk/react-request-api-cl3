import PropTypes from 'prop-types'
import React, { Component } from 'react'
import fetchApi from 'services/services-api';

import Button from '../Button/Button';
import Loader from '../Loader/Loader';
export default class Albums extends Component {
    state = {
        albums: [],
        page: 1,
        loader: false,
        
    }
    
    componentDidMount() {
        this.setState({ loader: true });
        fetchApi()
        .then(response => this.setState({albums: response.data}))
        .catch(error => alert(error.message))
        .finally(()=>{ this.setState({ loader: false })})
    }
   
    handleCountAlbum = () => {
        const { albums, page } = this.state;
      return  albums.slice(0, page*10)
    }
    handleCountPage = () => {
        this.setState(prevState=>({page: prevState.page + 1}))
    }
    
    render() {
        const countAlbum = this.handleCountAlbum();
        const { loader } = this.state;
    return (
        <div>
            <ul>
                {countAlbum.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            {loader ?  <Loader /> :  <Button onClick={this.handleCountPage} />}
           
           
      </div>
    )
  }
}
