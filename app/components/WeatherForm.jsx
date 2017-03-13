var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault(); // prevent the entire page from reloading

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    } else {
      alert('Location is empty!');
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location"/>
            <button>Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
