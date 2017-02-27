var React = require('react');
var Nav = require('Nav');

// Will be responsible for rendering our individuals pages
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
