import React, { Component } from 'react';
import placholderball from './ball_placeholder.svg';
import pokeball from './ball_poke.svg';
import greatball from './ball_great.svg';
import ultraball from './ball_ultra.svg';
import pokeball_icon from './simple_pokeball.svg';
import './blog.css';

class Party extends Component {
  render() {

    return(
      <div className="party">
        <Post image={ultraball} content="ByeBay"/>
        <Post image={placholderball} content=""/>
        <Post image={placholderball} content=""/>
        <Post image={placholderball} content=""/>
        <Post image={placholderball} content=""/>
        <Post image={placholderball} content=""/>
      </div>
      );
  }
}

class Post extends Component {
  render() {

    const image = this.props.image
    const content = this.props.content

    return (
      <div className="post">
        <img src={image} className="post-img" alt="placeholder" />
        <p className="post-content">
          {content}
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="blog">
        <div className="blog-header">
          <img src={pokeball_icon} className="blog-logo" alt="logo" />
          <h2>Stories from the SilphRoad</h2>
          <p className="blog-subtitle">
            A collection of personal Pokémon adventures.
          </p>
        </div>
        <Party />
        <div className="blog-body">
          <Post image={pokeball} content="this day was sweet!"/>
          <Post image={pokeball} content="more stories here"/>
          <Post image={ultraball} content="a travel around the bay"/>
          <Post image={greatball} content="swimming to remote gyms"/>
          <Post image={greatball} content="a round of hills and water"/>
          <Post image={pokeball} content="events upcoming"/>
        </div>
      </div>
    );
  }
}

export default App;
