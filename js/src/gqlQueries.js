"use strict";
var graphql_tag_1 = require('graphql-tag');
exports.gqlQueries = {
    me: (_a = ["\n    query Me {\n      me {\n        id,\n        firstName\n      }\n    }\n  "], _a.raw = ["\n    query Me {\n      me {\n        id,\n        firstName\n      }\n    }\n  "], graphql_tag_1.default(_a)),
    employees: (_b = ["\n    query Employees($storeId: Int) {\n      store(id: $storeId) {\n        employees {\n          id\n          user {\n            id\n            fullName\n            email\n            phone\n            isActive\n          }\n        }\n      }\n    }\n  "], _b.raw = ["\n    query Employees($storeId: Int) {\n      store(id: $storeId) {\n        employees {\n          id\n          user {\n            id\n            fullName\n            email\n            phone\n            isActive\n          }\n        }\n      }\n    }\n  "], graphql_tag_1.default(_b))
};
var _a, _b;
//# sourceMappingURL=gqlQueries.js.map