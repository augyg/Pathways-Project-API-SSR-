const { login } = require('./login');
const { register } = require('./register');
const { getUser } = require('./getUser');

const routes = [
  { path: '/login', handle: login },
  { path: '/register', handle: register },
  { path: '/getUser', handle: getUser }
];

function route(req) {
  switch(req.path) {
    case '/login':
      return routes[0].handle(req.body.email, req.body.password);
    case '/register':
      return routes[1].handle(req.body);
    case '/getUser':
      return routes[2].handle(req.body.token);
    default: 
      return Promise.resolve(404);
  }
}

function findRoute(path) {
  return routes.some(e => e.path === path);
}

module.exports = { route, findRoute };