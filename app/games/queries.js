import gql from 'graphql-tag';

export const allGamesQuery = gql`
  query {
    allGames(orderBy: updatedAt_DESC) {
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
      _usersMeta {
        count
      }
    }
  }
`;
