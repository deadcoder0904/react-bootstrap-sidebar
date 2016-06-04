var React = require('react');

var Links = React.createClass({
    getDefaultProps: function() {
      return {
        anchorLinkColor: "#fafafa",
        anchorLinkHoverBgColor: "#16A085"
      };
    },
    getInitialState: function() {
      return {
        hover: false
      };
    },
    mouseOver:function() {
      this.setState({hover: true});
    },
    mouseOut:function() {
      this.setState({hover: false});
    },
  	render: function(){
      var styles = {
        linkLooks: {
          textIndent: 2,
          lineHeight: 3,
          listStyle: "none"
        },
        anchorLink: {
          textDecoration: "none",
          color: this.props.anchorLinkColor,
          display: "block"
        },
        anchorLinkHover: {
          background: this.props.anchorLinkHoverBgColor
        }
      };
    	return (
		    <ul style={this.state.hover ? styles.anchorLinkHover : undefined}>
		    	 <li style={styles.linkLooks}
              onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
              <a href={this.props.href} style={styles.anchorLink}>
                {this.props.title}
              </a>
            </li>
		    </ul>
		    );
  }
});

module.exports = Links;
