var React = require('react');

var Track = React.createClass({
  render: function() {
    return(
      <a onClick={this.props.handleTrackSelection(this.props.data)}>
        <span>
          {this.props.data.title}
        </span>
      </a>
    );
  }
});

module.exports = Track;
