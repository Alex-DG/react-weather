var React = require('react');
var {Link, IndexLink} = require('react-router');

// Top naavigation bar
var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    //alert('not yet wired up!');

    var location = this.refs.search.value; // value input search view
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
    return ( // jsx and regular html attribute => conflict => instead class, use className
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeCassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeCassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeCassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"></input>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
