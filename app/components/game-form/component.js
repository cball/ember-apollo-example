import Component from '@ember/component';
import ComponentQueryManager from 'ember-apollo-client/mixins/component-query-manager';
import { createRoundMutation, createGameMutation } from './mutations';

export default Component.extend(ComponentQueryManager, {
  isCreatingGame: false,

  actions: {
    createGame: async function(attrs = {}) {
      this.set('isCreatingGame', true);

      const round = await this._createRound(attrs);
      await this._createGame(round);

      this.set('isCreatingGame', false);
      this.onCreateGame();
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
