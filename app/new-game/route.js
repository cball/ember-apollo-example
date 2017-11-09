import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import { createRoundMutation, createGameMutation } from './mutations';

export default Route.extend(RouteQueryManager, {
  model() {
    return {
      emojiPhrase: ''
    };
  },

  actions: {
    createGame: async function(attrs = {}) {
      const round = await this._createRound(attrs);
      await this._createGame(round);
      this.transitionTo('games');
    }
  },

  _createRound: async function({ emojiPhrase }) {
    const apollo = this.get('apollo');

    const variables = {
      emojiPhrase,
      userId: this.currentUser.id
    };

    const roundResult = await apollo.mutate({
      mutation: createRoundMutation,
      variables
    });

    return roundResult.createRound;
  },

  _createGame: async function(round) {
    const apollo = this.get('apollo');

    const gameResult = await apollo.mutate({
      mutation: createGameMutation,
      variables: {
        roundId: round.id,
        userId: this.currentUser.id
      }
    });

    return gameResult.createGame;
  },

  // typically we would fetch this from a currentUser service
  currentUser: {
    id: 'cj7c07dmx2mz70110ju7rb8dr'
  }
});
