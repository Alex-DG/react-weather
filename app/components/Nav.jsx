var React = require('react');
var {Link, IndexLink} = require('react-router');

// Top naavigation bar
var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2> Nav Component</h2>
        <IndexLink to="/" activeCassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeCassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeCassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
