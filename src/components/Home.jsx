var React = require('react');

var Home = React.createClass({
    getDefaultProps: function() {
      return {width: "300"};
    },
  	render: function(){
      var styles = {
        paddingLeft: this.props.isVisible ? this.props.width : "10"
      };
      var text = "THIS IS THE MAIN CONTENT ";
      for (var i = 0; i < 100; i++) {
        text += "THIS IS THE MAIN CONTENT ";
      }
    	return (
		    <div style={styles}>
          {text}
        </div>
		    );
  }
});

module.exports = Home;
