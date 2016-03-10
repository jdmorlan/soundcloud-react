var React = require('react');
var Timer = require('./timer');

var Player = React.createClass({
  getInitialState: function() {
    return {
      player: this.props.player,
      currentTime: 0,
      isPlaying: false
    }
  },

  componentDidMount: function() {
    var component = this;
    this.state.player.on('timeupdate', function(audio) {
      component.setState({currentTime: audio.target.currentTime});
    });

  },

  componentWillReceiveProps: function(newProps) {
    if (this.state.isPlaying) {
      this.state.player.stop();
      this.state.player.play();
    }
  },

  componentWillUnmount: function() {
    this.state.player.unbindAll();
  },

  playTrack: function(e) {
    e.preventDefault();
    var component = this;

    if (this.state.isPlaying === true) {
      this.state.player.pause();
      this.setState({isPlaying: false});
    } else {
      this.state.player.play();
      this.setState({isPlaying: true});
    }
  },

  handleProgressClick: function(e) {
    console.log(e);
  },

  render: function() {
    var buttonText = this.state.isPlaying ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>;
    return(
      <div className="soundcloud-player">
        <p>{this.props.currentTrack.title}</p>
        <div className="progress-bar">
          <a href="#" onClick={this.playTrack}>{buttonText}</a>
          <Timer timeValue={this.state.currentTime} className="elapsed-time" />
          <progress max={this.props.currentTrack.duration} value={this.state.currentTime}>
          </progress>
          <Timer timeValue={this.props.currentTrack.duration} className="total-time"/>
        </div>
      </div>
    );
  }
});

module.exports = Player;
