import React, { Component, PropTypes } from 'react';
import Track from '../Track';
import './styles.css';

class TrackList extends Component {
  constructor() {
    super()
    this.state = {
      nowPlaying: ''
    }
    this.playPause = this.playPause.bind(this)
  }

  playPause(audioID) {
    const audio = document.getElementById(audioID)
    if(audio.paused) {
      /**
       * TODO TASK 2: Before we start playing selected audio element, ensure
       * that all others are paused, so we don't have audio overlapping
       */
      this.setState({ nowPlaying: audio.id }, () => {
        audio.play()
      })
    } else {
      this.setState({ nowPlaying: '' })
      audio.pause()
    }
  }

  render() {
    return (
      <ul className="TrackList-ul">
        {this.props.tracks.map((track, index) => {
          return (
            <Track
              nowPlaying={this.state.nowPlaying === track.id}
              image={track.album.images[0].url}
              source={track.preview_url}
              onClick={this.playPause}
              id={track.id}
              artist={track.artists[0].name}
              song={track.name}
              key={`track-${index}-${track.id}`} />
          )
        })}
      </ul>
    )
  }
}

TrackList.propTypes = {
  tracks: PropTypes.array
}

TrackList.defaultProps = {
  tracks: []
}

export default TrackList;
