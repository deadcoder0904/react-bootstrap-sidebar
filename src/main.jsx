var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('./components/Sidebar.jsx');
var Home = require('./components/Home.jsx');
var Button = require('./components/Button.jsx');

var links = [
	{
		title: "Profile",
		href: "#"
	},
	{
		title: "Settings",
		href: "#"
	},
	{
		title: "Account Info",
		href: "#"
	}
];

var Main = React.createClass({
	getInitialState: function() {
		return {isVisible: false};
	},
	showOrHideNav: function() {
		this.setState({isVisible: !this.state.isVisible});
	},
	render: function(){
		return(
			<div>
				<Sidebar links={links} width="250" sidebarColor="#3D6898"
								anchorLinkColor="#fafafa" anchorLinkHoverBgColor="#16A085" isVisible={this.state.isVisible}/>
				<Button isVisible={this.state.isVisible} toggleNav={this.showOrHideNav}/>
				<Home width="300" isVisible={this.state.isVisible}/>
			</div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('main'));
