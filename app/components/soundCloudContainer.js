var React = require('react');
var SoundCloudAudio = require('soundcloud-audio');

var ResultsCollection = require('./resultCollection');
var Player = require('./player');

var SoundCloudContainer = React.createClass({
  getInitialState: function() {
    return {
      player: new SoundCloudAudio('67f5f6bd5ecee04b89566b5fccacc136'),
      currentTrack: {}
    }
  },

  handleSelectedTrack: function(track) {
    var component = this;
    return function(event) {
      window.theTrack = track;
      component.setState({currentTrack: track});
      component.state.player.preload(track.stream_url);
    }
  },

  render: function() {
    return(
      <div>
        <ResultsCollection handleTrackSelection={this.handleSelectedTrack}/>
        <Player player={this.state.player} currentTrack={this.state.currentTrack} />
      </div>
    );
  }
});

module.exports = SoundCloudContainer;
