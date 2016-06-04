var React = require('react');
var Links = require('./Links.jsx');

var Sidebar = React.createClass({
    getDefaultProps: function() {
      return {
        width: "250",
        sidebarColor: "#2C3E50"
      };
    },
  	render: function(){
  	var styles = {
			navLook: {
        height: "100%",
        width: this.props.width < "200" ? "250" : this.props.width,
        display: this.props.isVisible ? "block":"none",
        zIndex: 1,
        position: "fixed",
        background: this.props.sidebarColor
      }
		};
    var link = this.props.links.map(function(link,index) {
      return <Links key={index} href={link.href} title={link.title} />
    });
    	return (
		    <div style={styles.navLook}>
          {link}
		    </div>
		    );
  }
});

module.exports = Sidebar;
