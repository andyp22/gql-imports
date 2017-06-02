import gql from 'graphql-tag';

export const gqlQueries = {
  me: 'query Me { me { id, firstName } }',
  me2: gql`query Me {
    me {
      id,
      firstName
    }
  }`,
};
