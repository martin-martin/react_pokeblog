import React, { Component } from 'react'
import Post from './Post'
import placeholderball from './ball_placeholder.svg'
import pokeball from './ball_poke.svg'
import greatball from './ball_great.svg'
import ultraball from './ball_ultra.svg'
import pokeball_icon from './simple_pokeball.svg'
import './blog.css'

class App extends Component {

  state = {
    posts: [
      {
        title: "this day was sweet",
        ball: pokeball,
        link: "",
        isParty: false
      },
      {
        title: "a travel around the bay",
        ball: ultraball,
        link: "",
        isParty: true
      },
      {
        title: "more stories here",
        ball: pokeball,
        link: "",
        isParty: false
      },
      {
        title: "swimming to remote gyms",
        ball: greatball,
        link: "",
        isParty: false
      },
      {
        title: "a round of hills and water",
        ball: greatball,
        link: "",
        isParty: false
      },
      {
        title: "events upcoming",
        ball: pokeball,
        link: "",
        isParty: false
      }
    ]
  }

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
        <div className="party">
          {this.state.posts.map((post, i) => {
            let count = 0

            if (post.isParty) {
              return <Post image={post.ball} idKey={i} title={post.title}/>
              count += 1
            }
            {/*
              a pkmn party always consists of the possible 6 pkmn
              leave the grayed out balls as placeholders
              if there aren't the full amount of 6 stories in the party
            */}
            for (i = count; count<=6; i++) {
              return <Post image={placeholderball} idKey={i} title={""}/>
            }
          }
          )}
        </div>
        <div className="blog-body">
          {this.state.posts.map((post, i) => {
            if (post.isParty === false) {
              return <Post image={post.ball} idKey={i} title={post.title}/>
            }}
          )}
        </div>
      </div>
    )
  }
}

export default App
