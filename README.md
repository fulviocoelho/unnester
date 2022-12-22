# unnester

TavaScript library to unnest information from objectes.

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install unnester
```

### Usage

ES6 import for typical API call signing use case:

```javascript
import {unnster} from 'unnester';

const person = {
    name: 'Fernando',
    age: 20,
    address: {
        street: 'Av. Marmota',
        zip_code: 13685,
    },
    config: {
        favorite_numbers: [1,2,3]
    }
};

const unnested_object = await unnest(person);
console.log(unnested_object);
```
## Release notes

### 1.0.1

fix on package.json scripts
increase NYC coverage threshold

### 1.0.0

Release with basic functionalities