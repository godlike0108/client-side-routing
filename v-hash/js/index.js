// All the routes
let routes = {};
// view
let view = null;

// register routes
route('/', 'home', renderTemplate);
route('/about', 'about', renderTemplate);

// route register function
function route(path, templateID, callback) {
	routes[path] = {templateID, callback};
}

// route handler
function router() {
	// assign router view
	view = view || document.getElementById('view');
	// assign url (hash version)
	let url = window.location.hash.slice(1) || '/';
	// use url to match current route
	let route = routes[url];
	// if view and route exist, render route content in view
	if(view && route.callback) {
		view.innerHTML = route.callback(route.templateID);
	}
}

// Show template
function renderTemplate(templateID) {
	return document.getElementById(templateID).innerHTML;
}

addEventListener('load', router);
addEventListener('hashchange', router);
