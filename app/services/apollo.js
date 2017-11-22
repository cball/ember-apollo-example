import ApolloService from 'ember-apollo-client/services/apollo';
import middlewares from 'ember-apollo-client/utils/middlewares';

export default ApolloService.extend({
  middlewares: middlewares('authorize'),

  // this would typically come from a service
  currentUser: {
    token: 'asdf'
  },

  authorize(req, next) {
    req.options.headers = req.options.headers || {};
    req.options.headers['Authorization'] = this.get('currentUser.token');

    next();
  }
});
