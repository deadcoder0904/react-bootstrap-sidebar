var React = require('react');

module.exports = React.createClass({
		getDefaultProps: function() {
			return {name: "Toggle",width: "300"};
		},
		render: function(){
			var styles = {
        paddingLeft: this.props.isVisible ? this.props.width : "10",
				paddingTop: "25",
				paddingBottom: "25"
      };
    	return (
				<div style={styles}>
					<button className="btn btn-warning" onClick={this.props.toggleNav}>{this.props.name}</button>
				</div>
		    );
  }
});
