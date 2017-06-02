# gql-imports
A boilerplate package for graphql queries, fragments, mutators, and etc written with TypeScript using the [graphql-tag](https://github.com/apollographql/graphql-tag) package. Add your queries or whatever to `ts/src` and run then compile before committing.

- To compile to JS: `npm run compile`

## Sample Query Example
From `ts/src/gqlQueries.ts`:
```javascript
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
```

## To Install
Add the following to your package.json:
```json
"devDependencies": {
  "gql-imports": "andyp22/gql-imports"
}
```
Then:
```
npm install
```

## Usage Example
```javascript
import { graphql } from 'react-apollo';
import { gqlQueries } from 'gql-imports';

export class HomePage extends React.Component { ... }

export default graphql(gqlQueries.me)(HomePage);
```

