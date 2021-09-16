import React, { Component } from 'react';
import './App.css';
import { getPlanetPics } from '../../api-calls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      error: null
    }
  }

  componentDidMount = () => {
    getPlanetPics()
      .then(data => {
        const updatedPictures = data.reduce((obj, hit) => {
          let planetInfo = {
            'date': hit.date,
            'explanation': hit.explanation,
            'title': hit.tile,
            'image': hit.url
          }
          obj.push(planetInfo);
          return obj;
        }, []);
        this.setState({pictures: updatedPictures})
      })
      .catch(error => {
        this.setState({error: 'Unable to get Astronomy Pictures of the Day try again later'})
      })
  }

  render() {
    return (
      <div>
      <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
