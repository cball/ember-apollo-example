import gql from 'graphql-tag';

export const createRoundMutation = gql`
  mutation($emojiPhrase: String!, $userId: ID!) {
    createRound(emojiPhrase: $emojiPhrase, leaderId: $userId) {
      id
    }
  }
`;

export const createGameMutation = gql`
  mutation($roundId: ID!, $userId: ID!) {
    createGame(
      usersIds: [$userId]
      currentRoundId: $roundId
      roundsIds: [$roundId]
    ) {
      id
      currentRound {
        number
        emojiPhrase
        leader {
          id
          email
        }
      }
      users {
        id
        email
      }
    }
  }
`;
