> ** with-dnd-context: a HOC solution for backend reusage issue in react-dnd **

[![npm](https://img.shields.io/badge/version-1.0.1-orange.svg)](https://www.npmjs.com/package/with-dnd-context)

# Why

[Cannot have two HTML5 backends at the same time](https://github.com/react-dnd/react-dnd/issues/186)

# Basic Usage

```javascript
import withDndContext from 'with-dnd-context'

class MyComponent {}

export default withDndContext(MyComponent);
```

## Installation

```
npm i with-dnd-context --save
```

## API

```javascript
// backendFactory is optional and default to react-dnd-html5-backend
const withDndContext: (WrappedComponent: React.ComponentType<any>, backendFactory?: BackendFactory) => React.ComponentType<any>;
```

