import React, { Component } from 'react';
import './App.css';
import { getPlanetPics } from '../../api-calls';
import Planets from '../Planets/Planets';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planetDetails: [],
      error: null
    }
  }

  componentDidMount = () => {
    getPlanetPics()
      .then(data => {
        const updatedPictures = data.reduce((obj, hit) => {
          let planetInfo = {
            'date': hit.date,
            'media': hit.media_type,
            'title': hit.title,
            'image': hit.url
          }
          obj.push(planetInfo);
          return obj;
        }, []);
        this.setState({planetDetails: updatedPictures})
      })
      .catch(error => {
        this.setState({error: 'Unable to get Astronomy Pictures of the Day try again later'})
      })
  }

  render() {
    return (
      <main className='app'>
      <h1 className='title'>Spacestagram</h1>
      <Planets planetDetails={this.state.planetDetails} />
      </main>
    );
  }
}

export default App;
