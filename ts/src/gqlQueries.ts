// import gql from 'graphql-tag';

export const gqlQueries = {
  me: 'query Me { me { id, firstName } }',
  employees: 'query Employees($storeId: Int) { store(id: $storeId) { employees { id, user { id, fullName, email, phone, isActive } } } }',
};
