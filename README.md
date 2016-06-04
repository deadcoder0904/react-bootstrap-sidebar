#react-bootstrap-sidebar
Reusable React Bootstrap Sidebar

#Usage

Declare an ```links``` array with property ```title``` & ```href``` <br />

```
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

```

Declare ```< Sidebar /> ``` Component by passing ``` links ``` array declared above & optional properties 
``` width ``` & ``` sidebarColor ``` & ``` anchorLinkColor ``` & ``` anchorLinkHoverBgColor ``` <br />

```

<Sidebar links={links} width="250" sidebarColor="#3D6898"
         anchorLinkColor="#fafafa" anchorLinkHoverBgColor="#16A085" />

```

#Default Values
```

width: "250",
sidebarColor: "#3D6898",
anchorLinkColor: "#fafafa",
anchorLinkHoverBgColor: "#16A085"

```

#Images

####React Bootstrap Navbar <br />

###### 1.Before Toggle <br />
![alt tag](http://imgur.com/kOne8Zr.png)

###### 2.After Toggle <br />
![alt tag](http://imgur.com/8kwtwLe.png)
