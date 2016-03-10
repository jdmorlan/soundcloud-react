var React = require('react');
var SoundCloudContainer = require('./soundCloudContainer');

var Main = React.createClass({
  render: function() {
    return(
      <div className="main-container">
        <SoundCloudContainer />
      </div>
    )
  }
});

module.exports = Main;
