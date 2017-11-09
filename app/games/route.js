import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
// import { allGamesQuery } from './queries';
import allGamesQuery from '../gql/queries/all-games';

export default Route.extend(RouteQueryManager, {
  model() {
    return this.apollo.watchQuery({ query: allGamesQuery });
  }
});
