import React, { Component } from 'react';
import Header from '../Header';
import Video from '../Video';
import Search from '../Search';
import TrackList from '../TrackList';
import assetVideo from '../../assets/video.mp4';
import './styles.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      tracks: []
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    this.setState({ query: event.target.value }, () => {
    /**
     * TODO TASK 1: Based on search query from the state, get array of 4 tracks
     * from Spotify's API and update our tracks state with this data. Handle error
     * response in a simple console.error log
     *
     * Spotify API docs: https://developer.spotify.com/web-api/endpoint-reference
     */
   })
  }

  render() {
    return (
      <main>
        <div className="App-container">
          <Header />
          <Search onChange={this.onSearchChange} value={this.state.query} />
          <TrackList tracks={this.state.tracks} />
        </div>
        <Video src={assetVideo} autoPlay loop muted />
      </main>
    );
  }
}

export default App;

/**
 * TODO TASK 3: At the moment our app is not optimised for mobile screens, some
 * bits are overlaping, scrolling is not working correctly, go over it and see
 * what you can do in order to make it look nice :)
 */
