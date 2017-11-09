import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      emojiPhrase: ''
    };
  },

  actions: {
    createGame: async function() {
      this.transitionTo('games');
    }
  }
});
