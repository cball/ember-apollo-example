import gql from 'graphql-tag';

export const allGamesQuery = gql`
  query {
    allGames(orderBy: lastGameUpdate_DESC) {
      id
      currentRound {
        id
        number
      }
      users {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
