// All the routes
let routes = {};
// view
let view = null;
// origin
let origin = location.origin;

// register route
route('/', 'home', renderTemplate);
route('/about', 'about', renderTemplate);

// route handler
const router = {
	// init is used when we directly enter the app
	init(path) {
		// update the url
		history.replaceState(null, null, `${origin}${path}`);
		// assign router view
		view = view || document.getElementById('view');
		// update the content
		let route = routes[path];
		view.innerHTML = route.callback(route.templateID);
	},
	// go is used when we trigger links in th app
	go (path) {
		// update the url
		history.pushState(null, null, `${origin}${path}`);
		// update the content
		let route = routes[path];
		view.innerHTML = route.callback(route.templateID);
	}
}

router.init(location.pathname);
let navbar = document.querySelector('.navbar');
navbar.addEventListener('click', e => {
	if(e.target.tagName === 'A') {
		e.preventDefault();
		router.go(e.target.getAttribute('href'))
	}
})

// route register function
function route(path, templateID, callback) {
	routes[path] = {templateID, callback};
}

// Show template
function renderTemplate(templateID) {
	return document.getElementById(templateID).innerHTML;
}