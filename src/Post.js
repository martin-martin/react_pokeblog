import React, { Component } from 'react'
import placeholderball from './ball_placeholder.svg'

class Post extends Component {

  render() {
    return (
      <div className="post">
        <img src={this.props.image} className="post-img" alt="placeholder" />
        <p className="post-content">{this.props.title}</p>
      </div>
    );
  }
}

export default Post
