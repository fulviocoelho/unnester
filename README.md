# unnester

TavaScript library to unnest information from objectes.

[Report Bug](https://github.com/fulviocoelho/unnester/issues)

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install unnester
```

### Usage

To import and use unnest import the function and pass the object as a parameter, according to the following example:

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

The expected output should be:
```json
{
    name: 'Fernando',
    age: 20,
    address_street: 'Av. Marmota',
    address_zip_code: 13685,
    address_numbers_from: 1,
    address_numbers_to: 100,
}
```

## Release notes

### 1.0.2

added use examples and issue link to readme

### 1.0.1

fix on package.json scripts
increase NYC coverage threshold

### 1.0.0

Release with basic functionalities