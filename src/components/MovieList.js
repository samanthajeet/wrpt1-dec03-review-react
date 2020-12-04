import React, { Component } from 'react';
import Title from './Title';

class MovieList extends Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      movieList: ['Soul'],
      name: 'Matias',
    }
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleAddToList(){ // onClick for button
    this.setState({
      movieList: [...this.state.movieList, this.state.inputValue],
      inputValue: '',
    })
  }

  render(){
    const movieTitles = this.state.movieList.map((element, index) => {
      return (
        <p key={index}>
          {element}
        </p>
      )
    });

    return (
      <div>
        <input
          placeholder='movie title'
          onChange={(e) => this.handleChange(e)}
          value={this.state.inputValue}
        />
        <button onClick={() => this.handleAddToList()}>add movie</button>
        <p>{movieTitles }</p>
      </div>
    )
  }
}

export default MovieList;