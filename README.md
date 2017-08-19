## React Welcome Name

A React Component for welcoming guests by name.

Name is stored in browser's localStorage to remember the name for repeat visits.

An option to change the stored name is provided.

# To install
`npm install --save welcome-name-react`

# To use
```
import React, { Component } from 'react';
import Welcome from 'welcome-name-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <OtherStuff />
      </div>
    );
  }
}
```
