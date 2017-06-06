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
  employees: gql`
    query Employees($storeId: Int) {
      store(id: $storeId) {
        employees {
          id
          user {
            id
            fullName
            email
            phone
            isActive
          }
        }
      }
    }
  `
};
