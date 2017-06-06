import gql from 'graphql-tag';

"use strict";
var graphql_tag_1 = require('graphql-tag');
exports.gqlQueries = {
    me: (_a = ["\n    query Me {\n      me {\n        id,\n        firstName\n      }\n    }\n  "], _a.raw = ["\n    query Me {\n      me {\n        id,\n        firstName\n      }\n    }\n  "], graphql_tag_1.default(_a)),
    employees: (_b = ["\n    query Employees($storeId: Int) {\n      store(id: $storeId) {\n        employees {\n          id\n          user {\n            id\n            fullName\n            email\n            phone\n            isActive\n          }\n        }\n      }\n    }\n  "], _b.raw = ["\n    query Employees($storeId: Int) {\n      store(id: $storeId) {\n        employees {\n          id\n          user {\n            id\n            fullName\n            email\n            phone\n            isActive\n          }\n        }\n      }\n    }\n  "], graphql_tag_1.default(_b))
};
var _a, _b;

exports.gqlQueries1 = {
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

//# sourceMappingURL=gqlQueries.js.map