import gql from 'graphql-tag';

export const gqlQueries = {
  me: gql`
    query Me {
      me {
        id,
        firstName
      }
    }
  `,
};
