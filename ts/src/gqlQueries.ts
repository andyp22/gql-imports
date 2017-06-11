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
  `,
  dealership: {
    store: gql`
      query DealershipStore($storeId: Int) {
        store(id: $storeId) {
          id
          name
          primaryContact {
            user {
              fullName
              email
              phone
            }
          }
          organization {
            id
            name
            groups {
              id
              name
            }
            regions(is_active: true) {
              id
              name
            }
          }
          groups {
            id
            name
          }
          region {
            id
            name
          }
        }
      }
    `
  }
};
