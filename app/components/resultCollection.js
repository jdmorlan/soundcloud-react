var React = require('react');
var Track = require('./track');
var SC = require('./soundcloud');

var ResultsCollection = React.createClass({
  getInitialState: function() {
    return {
      results: [],
      searchTerm: 'daze-of-resistance'
    }
  },

  componentDidMount: function() {
    this.fetchTracks();
  },

  fetchTracks: function() {
    var component = this;
    SC.initialize({ client_id: '67f5f6bd5ecee04b89566b5fccacc136' });

    SC.get('/tracks', { q: this.state.searchTerm })
      .then(function(tracks) { component.setState({ results: tracks })});
  },

  handleSearch: function(e) {
    e.preventDefault();

    var searchTerm = this.refs.search.value;
    this.setState({searchTerm: searchTerm})
    this.fetchTracks();
    this.refs.search.value = '';
  },

  handleSearchChange: function() {
    var searchTerm = this.refs.search.value;
    this.setState({searchTerm: searchTerm});
  },

  render: function() {
    var component = this;
    return(
      <div className="search">
        <form onSubmit={this.handleSearch}>
        <input type="text" ref="search" placeholder="Search" onChange={this.handleSearchChange}/>
        </form>
        <div className="results">
          {this.state.results.map(function(result){
            return (
              <Track data={result} handleTrackSelection={component.props.handleTrackSelection}/>
            )
          })}
        </div>
      </div>
    );
  }
});

module.exports = ResultsCollection;
